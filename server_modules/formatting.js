import sharp from "sharp";
import fs from "fs";

export default async function formatImage(fields, file) {
  const imageBuffer = fs.readFileSync(file.image.path);
  var img = sharp(imageBuffer);

  const metadata = await img.metadata();
  const width = metadata.width;
  const height = metadata.height;
  var newWidth;
  var newHeight;

  const largerDimension = width > height ? "width" : "height";

  // Check if the larger dimension exceeds maxSize
  if (
    (largerDimension === "width" && metadata.width > fields.maxSize) ||
    (largerDimension === "height" && metadata.height > fields.maxSize)
  ) {
    if (largerDimension === "width") {
      // Set width to maxSize and adjust height to maintain aspect ratio
      newHeight = Math.round((height / width) * fields.maxSize);
      newWidth = fields.maxSize;
    } else {
      // Set height to maxSize and adjust width to maintain aspect ratio
      newWidth = Math.round((width / height) * fields.maxSize);
      newHeight = fields.maxSize;
    }
  }

  img
    .webp({ quality: 70, effort: 6 })
    .resize({ width: newWidth, height: newHeight });

  return await img.toBuffer();
}
