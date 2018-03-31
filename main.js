// JavaScript source code
var goingRight = true;
var running = false;
var expStart = 0;

function animationManager(flag, element, height, energy) {
    var elem = document.getElementById(element);

    if (flag == "start" && running == false) {
        running = true;
        var pos = elem.offsetLeft;
        var slider = document.getElementById(energy);
        var top = 185;
        id = setInterval(frame, 10);
        function frame() {
            pos = elem.offsetLeft;
            if (goingRight == true) {
                if (element == 'proton3') {
                    // left wall traveling right
                    if (pos < 100 && pos > 0) {
                        if (expStart > top) {
                            elem.style.top = (top - expStart * Math.exp((pos - 100) / (-125 / Math.log(0.0001 * expStart)))) + 'px';
                        } else {
                            elem.style.top = (top - expStart * Math.exp((pos - 100) / (-125 / Math.log(0.0001 * expStart)))) + 'px';
                        }
                        pos++;
                        elem.style.left = pos + 'px';
                        // right wall traveling right
                    } else if (pos < 575 && pos > 475) {
                        if (expStart > top) {  
                            elem.style.top = (top + (expStart - top) * Math.exp(-(pos - 475) / (-125 / Math.log(0.0001 * (expStart - top))))) + 'px';
                        } else {
                            elem.style.top = (top - expStart * Math.exp(-(pos - 475) / (-125 / Math.log(0.0001 * expStart)))) + 'px';
                        }
                        // travel exponentially
                        pos++;
                        elem.style.left = pos + 'px';
                    } else if (pos == 575) {
                        goingRight = false;
                    } else {
                        elem.style.top = (top + (parseInt(slider.value) * Math.sin(pos / 9))) + 'px';
                        pos++;
                        elem.style.left = pos + 'px';
                        expStart = (top + (parseInt(slider.value) * Math.sin(pos / 9)));
                    }
                } else if (pos == 475) {
                    goingRight = false;
                } else {
                    elem.style.top = (top + (parseInt(slider.value) * Math.sin(pos / 10.5))) + 'px';
                    pos++;
                    elem.style.left = pos + 'px';
                }
            }
            else {
                if (element == 'proton3') {
                    // left wall traveling left
                    if (pos < 100 && pos > 0) {
                        if (expStart > top) {
                            elem.style.top = (top + (expStart - top) * Math.exp((pos - 100) / (-125 / Math.log(0.0001 * (expStart - top))))) + 'px';
                        } else {
                            elem.style.top = (top - expStart * Math.exp((pos - 100) / (-125 / Math.log(0.0001 * expStart)))) + 'px';
                        }
                        pos--;
                        elem.style.left = pos + 'px';
                        // right wall traveling left
                    } else if (pos < 575 && pos > 475) {
                        // travel exponentially
                        if (expStart > top) {
                            elem.style.top = (top + (expStart - top) * Math.exp(-(pos - 475) / (-125 / Math.log(0.0001 * (expStart - top))))) + 'px';
                        } else {
                            elem.style.top = (top - expStart * Math.exp(-(pos - 475) / (-125 / Math.log(0.0001 * expStart)))) + 'px';
                        }
                        pos--;
                        elem.style.left = pos + 'px';
                    } else if (pos == 0) {
                        goingRight = true;
                    } else {
                        elem.style.top = (top - (parseInt(slider.value) * Math.sin(pos / 9))) + 'px';
                        pos--;
                        elem.style.left = pos + 'px';
                        expStart = (top - (parseInt(slider.value) * Math.sin(pos / 9)));
                    }
                } else if (pos == 100) {
                    goingRight = true;
                }
                else {
                    elem.style.top = (top + (parseInt(slider.value) * Math.sin(pos / 10.5))) + 'px';
                    pos--;
                    elem.style.left = pos + 'px';
                }
            }
        }
    } else if (flag == "stop") {
        window.clearInterval(id);
        running = false;
    } else if (flag == "reset") {
        window.clearInterval(id);
        elem.style.left = 100 + 'px';
        elem.style.top = 185 + 'px';
        goingRight = true;
        running = false;
    }
    
}

function draw() {
    var c = document.getElementById("leftside2");
    var ctx = c.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
}

