// JavaScript source code
var goingRight = true;


function animationManager(flag) {
    var elem = document.getElementById("proton");

    if (flag == "start") {
        var pos = elem.offsetLeft;
        var top = 185;
        id = setInterval(frame, 10);
        function frame() {
            pos = elem.offsetLeft;
            if (goingRight == true) {
                if (pos == 375) {
                    goingRight = false;
                } else {
                    elem.style.top = (top + (150 * Math.sin(pos / 10))) + 'px';
                    pos++;
                    elem.style.left = pos + 'px';
                }
            }
            else {
                if (pos == 0) {
                    goingRight = true;
                }
                else {
                    elem.style.top = (top + (150 * Math.sin(pos / 10))) + 'px';
                    pos--;
                    elem.style.left = pos + 'px';
                }
            }
        }
    } else if (flag == "stop") {
        window.clearInterval(id);
    } else {
        window.clearInterval(id);
        elem.style.left = 0 + 'px';
        elem.style.top = 185 + 'px';
        goingRight = true;
    }
    
}

function stopAnimation() {
    clearInterval(id);
    var elem = document.getElementById("proton");
    // change position back to 0
    elem.style.left = 0 + 'px';
    elem.style.top = 185 + 'px';
}
