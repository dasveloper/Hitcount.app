import { createCanvas, GlobalFonts } from "@napi-rs/canvas";
import path from "path";

const fontPath = path.resolve("./fonts/RobotoMono.ttf");
GlobalFonts.registerFromPath(fontPath, "RobotoMono");

export default function renderImage({ text, color, background }) {
  // Create text canvas
  const textCanvas = createCanvas(1, 1, 0x01);
  const textCtx = textCanvas.getContext("2d");

  // Get text size
  textCtx.font = `32px Roboto Mono`;
  const metrics = textCtx.measureText(text);
  const left = -1 * metrics.actualBoundingBoxLeft;
  const right = metrics.actualBoundingBoxRight;
  const ascent = metrics.actualBoundingBoxAscent;
  const descent = metrics.actualBoundingBoxDescent;
  const contentHeight = ascent + descent;
  const contentWidth = left + right;
  const padding = 5;

  // New canvas size
  const width = contentWidth + padding * 2;
  const height = contentHeight + padding * 2;

  // Create new canvas at new canvas size (@napi-rs doesn't support resizing SvgCanvas)
  const canvas = createCanvas(width, height, 0x01);
  const ctx = canvas.getContext("2d");

  // Fill canvas background
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, width, height);

  // Set font styles
  ctx.font = `32px Roboto Mono`;
  ctx.fillStyle = color;
  ctx.textAlign = "center";

  // Add text to canvas
  let x = contentWidth / 2 + padding;
  let y = ascent + padding;
  ctx.fillText(text, x, y);

  return canvas.getContent();
}
