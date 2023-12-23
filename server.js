const PORT = 3000;
import express from 'express';
const app = express();

import formidable from 'express-formidable'

import formatImage from './server_modules/formating.js'
import convertVideo from './server_modules/converting.js';

app.use(formidable());

app.post('/formatting', async (req, res) => {
    try {
        req.fields.size = parseInt(req.fields.size);
    
        let fileOutputName = req.files.image.name.replace(/\.[^.]+$/, '')+"."+req.fields.format;

        res.type('image/webp');
        res.header('Content-Disposition', `inline; filename="${fileOutputName}"`);

        res.send(await formatImage(req.fields, req.files));
    } catch(e){
        res.status(500).send(error.message);
    }
});

app.post('/converting', async (req, res) => {
    try {

        let fileOutputName = req.files.video.name.replace(/\.[^.]+$/, '')+".webm"
    
        res.header('Content-Type', 'video/webm');
        res.header('Content-Disposition', `inline; filename="${fileOutputName}"`);

        const convertedVideo = await convertVideo(req.files, res);
        res.end(convertedVideo);
    
    } catch(error) {
        res.status(500).send(error.message);
    }
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});