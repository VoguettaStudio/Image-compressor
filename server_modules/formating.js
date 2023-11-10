import sharp from 'sharp'
import fs from 'fs'

export default async function formatImage(fields, file){

    const imageBuffer = fs.readFileSync(file.image.path);
    var img = sharp(imageBuffer);

    const metadata = await img.metadata();
    const width = Math.round(metadata.width * fields.size / 100);
    const height = Math.round(metadata.height * fields.size /100);

    img
        .webp({quality: 70, effort:6})
        .resize({width: width, height: height});

    return await img.toBuffer();
}