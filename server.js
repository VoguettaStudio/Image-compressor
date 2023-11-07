const PORT = 3000;
import express from 'express';
const app = express();

import formidable from 'express-formidable'

import formatImage from './server_modules/formating.js'

app.use(formidable());

app.post('/formatting', (req, res) => {
    
    req.fields.size = parseInt(req.fields.size);
    formatImage(req.fields, req.files);

    res.send({ status: 'ok' });
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});