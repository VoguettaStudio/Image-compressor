const PORT = 3000;
import express from 'express';
const app = express();

import formidable from 'express-formidable'

import formatImage from './server_modules/formating.js'
import convertVideo from './server_modules/converting.js';

app.use(formidable());

app.post('/formatting', (req, res) => {
    
    req.fields.size = parseInt(req.fields.size);
    
    res.header('Content-Type', 'image/webp')

    res.end(formatImage(req.fields, req.files));
});

app.post('/converting', async (req, res) => {
    
    try {
        
        res.header('Content-Type', 'video/webm');
        res.header('Content-Disposition', 'inline; filename=output.webm');

        const convertedVideo = await convertVideo(req.files, res);
    
        res.end(convertedVideo);
    
    } catch(error) {
        res.status(500).send(error.message);
    }
    
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});