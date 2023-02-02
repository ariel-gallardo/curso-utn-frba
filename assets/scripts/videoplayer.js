window.addEventListener('load',(e) => {


    let intNumber;

    let playButton = document.getElementById('playButton');
    let stopButton = document.getElementById('stopButton');
    let duration = document.getElementById('duration');
    let videoPlayer = document.getElementById('videoPlayer');

    const setTime = () => {
        intNumber = setInterval(() => {
            let sec = Math.round(videoPlayer.currentTime);
            let minutes = Math.floor((sec%(60*60))/60);
            var secs = Math.ceil((sec % (60 * 60))%60 );
            duration.innerHTML = `${minutes <= 9 ? `0${minutes}` : minutes}:${secs <= 9 ? `0${secs}` : secs}`;
        },1000)
    };

    const pauseTime = () => {
        clearInterval(intNumber); 
    };

    const stopTime = () => {
        clearInterval(intNumber); 
        videoPlayer.currentTime = 0;
    };

    playButton.addEventListener('click',() => {
        if(videoPlayer.paused){
            playButton.innerHTML = `⏸`;
            videoPlayer.play() && setTime();
        }else
        {
            videoPlayer.pause() && pauseTime();
            playButton.innerHTML = `▶️`;
        }
    });

    stopButton.addEventListener('click',() => {
        videoPlayer.pause();
        stopTime();
    });
});