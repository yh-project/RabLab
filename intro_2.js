var autoplayVideoInterval = setInterval("autoplayVideo()",1000);


function autoplayVideo()
{
    var promise = document.querySelector('video').play();
    if (promise !== undefined)
    {

        promise.then(function (_)
        {
            clearInterval(autoplayVideoInterval);
        }).catch(function (error) {
        // Show a "Play" button so that user can start playback.
        });
    }
}