const player = document.querySelector('.player');
const canvas = document.querySelector('.photo');

function initRecording() {
    navigator.mediaDevices.getUserMedia({video: true, audio:false})
        .then(localMedia => {
            player.src = window.URL.createObjectURL(localMedia);
            player.play();
        })
        .catch(error => {
            console.log("OH NO!", error);
        });
}

function paintToCanvas() {
    const {videoHeight: height, videoWidth: width} = player;
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
    }, 16);
}

initRecording();

player.addEventListener('canplay', paintToCanvas)