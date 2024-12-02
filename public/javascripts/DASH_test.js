
(function () {
    var url = "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd";
    var videoElement = document.querySelector('.videoContainer video');
    var player = dashjs.MediaPlayer().create();
    player.initialize(videoElement, url, true);

    var controlbar = new ControlBar(player);
    controlbar.initialize();
})();

var videoContainer = document.getElementById('videoContainer');
document.addEventListener('fullscreenchange', function () {
    if (document.fullscreenElement) {
        videoContainer.classList.add('fullscreen');
    } else {
        videoContainer.classList.remove('fullscreen');
    }
});