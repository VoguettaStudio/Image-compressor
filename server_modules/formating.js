import sharp from 'sharp'
import fs from 'fs'


export default async function formatImage(fields, image){

    const promise = fs.promises.readFile('./server_modules/taylor-swift-eras-moments.webp');

    var buf = Buffer.from(JSON.stringify(image));

    var imageBuffer = await Promise.resolve(promise).then(function(buffer){
        return buffer;
    });

    //console.log(imageBuffer);
    
    const img = sharp(imageBuffer).webp({quality: 70, effort:6});


    fs.writeFile('./server_modules/enhancedpepe.webp',await img.toBuffer(), 'binary', function(err){})
    
    return img;
}