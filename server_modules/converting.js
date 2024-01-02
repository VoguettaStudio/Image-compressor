import ffmpeg from "fluent-ffmpeg";

export default function convertVideo(file, res) {
  return new Promise((resolve, reject) => {
    const command = ffmpeg().input(file.video.path);

    command.format("mp4").videoCodec("libx265");

    const buffers = [];
    command.on("data", (data) => {
      buffers.push(data);
    });

    command.on("error", (err) => {
      reject(err);
    });

    command.on("end", () => {
      const convertedBuffer = Buffer.concat(buffers);
      resolve(convertedBuffer);
    });

    command.pipe(res, { end: true });
  });
}
