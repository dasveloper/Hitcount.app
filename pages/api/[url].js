import { Redis } from "@upstash/redis";
import renderImage from "../../utils/renderImage";

const redis = Redis.fromEnv();

export default async function handler(req, res) {
  try {
    // Parse url and image options
    const { background, color, digits, url } = req.query;
    const hexBackground = "#" + (background || "000000");
    const hexColor = "#" + (color || "FFFFFF");
    const padding = Math.min(parseInt(digits, 10), 10) || 6;

    // Get and increment hits
    const hits = url === "example" ? 0 : await redis.incr(url);

    // Pad hits with 0s
    const paddedHits = hits.toString().padStart(padding, "0");

    // Create the image data
    const imgData = renderImage({
      text: paddedHits,
      color: hexColor,
      background: hexBackground,
    });

    // Create the image buffer
    const img = Buffer.from(imgData, "base64");

    // Send the image
    res.writeHead(200, {
      "Content-Type": "image/svg+xml",
      "Content-Length": img.length,
    });
    return res.end(img);
  } catch (error) {
    console.log(error);
    res.status(500).send("Could not create error");
  }
}
