import { registerFont, createCanvas } from "canvas";
import path from "path";

export default function renderImage({ text, color, background }) {
  // Register font
  registerFont(path.resolve("./fonts/RobotoMono.ttf"), {
    family: "RobotoMono",
  });

  // Create canvas
  const canvas = createCanvas(0, 0, "svg");
  const ctx = canvas.getContext("2d");

  // Get text size
  ctx.font = `32px Roboto Mono`;
  const metrics = ctx.measureText(text);
  const left = -1 * metrics.actualBoundingBoxLeft;
  const right = metrics.actualBoundingBoxRight;
  const ascent = metrics.actualBoundingBoxAscent;
  const descent = metrics.actualBoundingBoxDescent;
  const contentHeight = ascent + descent;
  const contentWidth = left + right;
  const padding = 5;

  // Set canvas size
  canvas.width = contentWidth + padding * 2;
  canvas.height = contentHeight + padding * 2;

  // Fill canvas background
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Set font styles
  ctx.font = `32px Roboto Mono`;
  ctx.fillStyle = color;
  ctx.textAlign = "center";

  // Add text to canvas
  let x = contentWidth / 2 + padding;
  let y = ascent + padding;
  ctx.fillText(text, x, y);

  return canvas.toBuffer();
}
