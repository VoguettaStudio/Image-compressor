import ffmpeg from 'fluent-ffmpeg';

export default async function compressMp4(req, res) {
    
    try {

        ffmpeg(req.files.video.path)
            .videoCodec('libx265')
            .toFormat('mp4')
            .outputOptions('-movflags frag_keyframe+empty_moov')
            .on('end', () => {
                console.log('Video compression finished');
            })
            .on('error', (e) => {
                console.error('Error during video compression:', e);
            })
            .pipe(res, {end: true})

    } catch(e){
        console.log(e);
    }

}