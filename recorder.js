//https://stackoverflow.com/questions/19235286/convert-html5-canvas-sequence-to-a-video-file
function record(canvas, time) {
    var recordedChunks = [];
    return new Promise(function (res, rej) {
        var stream = canvas.captureStream(25 /*fps*/);
        mediaRecorder = new MediaRecorder(stream, {
            mimeType: "video/webm; codecs=vp9",
			bitsPerSecond: 3000000 //seems nw
        });
/*
		@ w audio https://stackoverflow.com/questions/42901470/mediarecorder-api-simple-example-hello-world
		video rec //this seems will be slow >256x256 https://github.com/muaz-khan/WebRTC-Experiment/tree/master/RecordRTC
		https://stackoverflow.com/questions/61779154/can-you-merge-a-canvas-and-video-element-and-record-the-output-using-mediarecord
		https://stackoverflow.com/questions/66813248/video-capture-of-canvas-element-by-mediastream-recording-api-is-not-working
*/
		//TODO set bitrate https://stackoverflow.com/questions/65800159/how-do-you-determine-bitspersecond-for-media-recording
        
        //ondataavailable will fire in interval of `time || 4000 ms`
		$('vDownload').innerText='';
        mediaRecorder.start(time || 5000);

        mediaRecorder.ondataavailable = function (event) {	console.log('.')
            recordedChunks.push(event.data);
             // after stop `dataavilable` event run one more time
            if (mediaRecorder.state === 'recording') {
                mediaRecorder.stop();
            }

        }

        mediaRecorder.onstop = function (event) {	console.log('stop')
            var blob = new Blob(recordedChunks, {type: "video/webm" });
            var url = URL.createObjectURL(blob);
            //res(url);
			//window.location.replace(url); //window.open
			$('vDownload').href=url;
			$('vDownload').innerText='video Download';
			//@ https://stackoverflow.com/questions/25547475/save-to-local-file-from-blob?noredirect=1&lq=1
        }
    })
}