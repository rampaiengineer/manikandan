import fs from "fs";
import path from "path";
import axios from "axios";
import * as cheerio from "cheerio";

const BASE_URL = "https://www.meenakshiandmeenakshi.com";
const OUTPUT_DIR = "./meenakshi-images";
const MAX_PAGES = 40; // safety limit so we don't crawl too much

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function downloadImage(imgUrl) {
  try {
    const url = imgUrl.startsWith("http")
      ? imgUrl
      : `${BASE_URL}/${imgUrl.replace(/^\/+/, "")}`;

    const fileName = path.basename(new URL(url).pathname);
    const destPath = path.join(OUTPUT_DIR, fileName);

    if (fs.existsSync(destPath)) {
      console.log("Skip (exists):", fileName);
      return;
    }

    const res = await axios.get(url, { responseType: "arraybuffer" });
    await fs.promises.writeFile(destPath, res.data);
    console.log("Saved:", fileName);
  } catch (err) {
    console.error("Failed:", imgUrl, err.message);
  }
}

async function scrapeAndCollect(startUrl) {
  const visited = new Set();
  const queue = [startUrl];

  while (queue.length && visited.size < MAX_PAGES) {
    const pageUrl = queue.shift();
    if (!pageUrl || visited.has(pageUrl)) continue;
    visited.add(pageUrl);

    try {
      console.log("Scraping:", pageUrl);
      const res = await axios.get(pageUrl);
      const $ = cheerio.load(res.data);

      const imageUrls = new Set();

      // 1) Any <img> src / data-src with product_images
      $("img").each((_, el) => {
        const src =
          $(el).attr("src") ||
          $(el).attr("data-src") ||
          $(el).attr("data-original");
        if (!src) return;
        if (src.includes("/upload_images/product_images/")) {
          imageUrls.add(src);
        }
      });

      // 2) Fallback: search raw HTML for any URL fragment that looks like product_images
      const raw = res.data;
      const regex = /\/upload_images\/product_images\/[^"'()\s>]+/g;
      const matches = raw.match(regex);
      if (matches) {
        matches.forEach((m) => imageUrls.add(m));
      }

      console.log(`  → Found ${imageUrls.size} product images on this page`);
      for (const img of imageUrls) {
        await downloadImage(img);
      }

      // collect internal links to crawl a bit deeper
      $("a").each((_, el) => {
        const href = $(el).attr("href");
        if (!href) return;
        if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) {
          return;
        }
        let nextUrl = href;
        if (!href.startsWith("http")) {
          nextUrl = `${BASE_URL}/${href.replace(/^\/+/, "")}`;
        }
        if (nextUrl.startsWith(BASE_URL) && !visited.has(nextUrl)) {
          queue.push(nextUrl);
        }
      });
    } catch (err) {
      console.error("Failed to scrape page:", pageUrl, err.message);
    }
  }
}

async function main() {
  await ensureDir(OUTPUT_DIR);
  // Start from main product listing page so we follow all paginated links
  await scrapeAndCollect(`${BASE_URL}/shop_list`);
}

main().catch((err) => {
  console.error("Unexpected error in crawler:", err);
});


