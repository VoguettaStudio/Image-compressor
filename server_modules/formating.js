import sharp from 'sharp'
import fs from 'fs'

export default async function formatImage(fields, file){

    const imageBuffer = fs.readFileSync(file.image.path);

    var img = sharp(imageBuffer);

    const metadata = await img.metadata();

    const width = metadata.width * fields.size / 100;
    const height = metadata.height * fields.size /100;

    img
        .resize({width: width, height: height})
        .webp({quality: 70, effort:6});

    await img.toFile('./server_modules/enhanced.webp');

    return img;
}