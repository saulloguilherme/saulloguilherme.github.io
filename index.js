window.onload = function() {
    let i = 0
    var frames = document.getElementsByClassName("frames");
    for (i; i > frames.length(); i++)
        frames[i].width = frames[i].contentWindow.document.body.scrollWidth;
        frames[i].height = frames[i].contentWindow.document.body.scrollHeight;
        console.log(i)
        console.log(frames[i])
 }