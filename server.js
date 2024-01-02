const PORT = 3002;
import express from "express";
const app = express();
import cors from "cors";
import formidable from "express-formidable";
import formatImage from "./server_modules/formating.js";
import convertVideo from "./server_modules/converting.js";

app.use(formidable());

const corsOptions = {
  origin: "https://eleditortest.voguetta.net",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.post("/compressImage", async (req, res) => {
  try {
    // req.fields.size = parseInt(req.fields.size);
    req.fields.maxSize = parseInt(req.fields.maxSize);

    let fileOutputName =
      req.files.image.name.replace(/\.[^.]+$/, "") + "." + req.fields.format;

    res.type("image/webp");
    res.header("Content-Disposition", `inline; filename="${fileOutputName}"`);

    res.send(await formatImage(req.fields, req.files));
  } catch (e) {
    res.status(500).send(error.message);
  }
});

app.post("/convertVideo", async (req, res) => {
  try {
    let fileOutputName = req.files.video.name.replace(/\.[^.]+$/, "") + ".mp4";

    res.header("Content-Type", "video/mp4");
    res.header("Content-Disposition", `inline; filename="${fileOutputName}"`);

    const convertedVideo = await convertVideo(req.files, res);
    res.end(convertedVideo);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
