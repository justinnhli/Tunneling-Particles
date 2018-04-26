// JavaScript source code
var goingRight = true;
var running = false;
var expStart = 0;
var probability = 0;
var tunneling1True = false;
var tunneling2True = false;
var tunneling3True = false;
var restartValue = 0;
var electronRight = true;

function animationManager(flag, element, height, energy) {
    var elem = document.getElementById(element);
    var tunneling1 = document.getElementById("tunneling1");
    var tunneling2 = document.getElementById("tunneling2");
    var tunneling3 = document.getElementById("tunneling3");
    var barrier1 = document.getElementById("barrier1");
    var barrier2 = document.getElementById("barrier2");
    if (flag == "start" && running == false) {
        running = true;
        var pos = elem.offsetLeft;
        var slider = document.getElementById(energy);
        var top = 185;
        id = setInterval(frame, 10);
        function frame() {
            pos = elem.offsetLeft;
            if (goingRight == true) {
                if (element == 'proton3' && (tunneling1.checked || tunneling1True)) {
                    // right wall traveling right
                    if (pos < 575 && pos > 475) {
                        tunneling1True = true;
                        if (expStart > top) {
                            elem.style.top = (top + (expStart - top) * Math.exp(-(pos - 475) / (-125 / Math.log(0.0001 * (expStart - top))))) + 'px';
                        } else {
                            elem.style.top = (top - expStart * Math.exp(-(pos - 475) / (-125 / Math.log(0.0001 * expStart)))) + 'px';
                        }
                        // travel exponentially
                        pos++;
                        elem.style.left = pos + 'px';
                    } else if (pos == 575) {
                        flag = 'stop';
                        tunneling1True = false;
                        animationManager(flag, element, height, energy);
                    } else {
                        elem.style.top = (top + (parseInt(slider.value) * Math.sin(pos / 9))) + 'px';
                        pos++;
                        elem.style.left = pos + 'px';
                        expStart = (top + (parseInt(slider.value) * Math.sin(pos / 9)));
                    }
                } else if (element == 'proton4' && (tunneling2.checked || tunneling2True)) {
                    // right wall traveling right
                    if (pos < 480 + parseInt(barrier1.value) && pos > 475) {
                        tunneling2True = true;
                        if (expStart > top) {
                            restartValue = (top + (expStart - top) * Math.exp(-(pos - 475) / (-900 / Math.log(0.0001 * (expStart - top)))));
                            elem.style.top = restartValue + 'px';
                            restartValue = restartValue % top;
                        } else {
                            restartValue = (top - expStart * Math.exp(-(pos - 475) / (-900 / Math.log(0.0001 * expStart))));
                            elem.style.top = restartValue + 'px';
                            restartValue = restartValue % top;
                        }
                        // travel exponentially
                        pos++;
                        elem.style.left = pos + 'px';
                    } else if (pos == 875) {
                        flag = 'stop';
                        animationManager(flag, element, height, energy);
                    } else if (pos >= 480 + parseInt(barrier1.value)) {
                        elem.style.top = (top + (restartValue * Math.sin(pos / 9))) + 'px';
                        pos++;
                        elem.style.left = pos + 'px';
                        expStart = (top + (restartValue * Math.sin(pos / 9)));
                    } else {
                        elem.style.top = (top + (parseInt(slider.value) * Math.sin(pos / 9))) + 'px';
                        pos++;
                        elem.style.left = pos + 'px';
                        expStart = (top + (parseInt(slider.value) * Math.sin(pos / 9)));
                    }

                } else if (element == 'proton5' && (tunneling3.checked || tunneling3True)) {
                    // right wall traveling right
                    if (pos < 480 + parseInt(barrier2.value) && pos > 475) {
                        tunneling3True = true;
                        if (expStart > top) {
                            restartValue = (top + (expStart - top) * Math.exp(-(pos - 475) / (-900 / Math.log(0.0001 * (expStart - top)))));
                            elem.style.top = restartValue + 'px';
                            restartValue = restartValue % top;
                        } else {
                            restartValue = (top - expStart * Math.exp(-(pos - 475) / (-900 / Math.log(0.0001 * expStart))));
                            elem.style.top = restartValue + 'px';
                            restartValue = restartValue % top;
                        }
                        // travel exponentially
                        pos++;
                        elem.style.left = pos + 'px';
                    } else if (pos == 875) {
                        flag = 'stop';
                        animationManager(flag, element, height, energy);
                    } else if (pos >= 480 + parseInt(barrier2.value)) {
                        elem.style.top = (top + (restartValue * Math.sin(pos / 9))) + 'px';
                        pos++;
                        elem.style.left = pos + 'px';
                        expStart = (top + (restartValue * Math.sin(pos / 9)));
                    } else {
                        elem.style.top = (top + (parseInt(slider.value) * Math.sin(pos / 9))) + 'px';
                        pos++;
                        elem.style.left = pos + 'px';
                        expStart = (top + (parseInt(slider.value) * Math.sin(pos / 9)));
                    }
                } else if (pos == 475) {
                    goingRight = false;
                } else {
                    elem.style.top = (top + (parseInt(slider.value) * Math.sin(pos / 9))) + 'px';
                    pos++;
                    elem.style.left = pos + 'px';
                }
            }
            else {
                if (pos == 100) {
                    goingRight = true;
                }
                else {
                    elem.style.top = (top + (parseInt(slider.value) * Math.sin(pos / 9))) + 'px';
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
        tunneling3True = false;
        tunneling2True = false;
        tunneling1True = false;
        elem.style.left = 100 + 'px';
        elem.style.top = 185 + 'px';
        goingRight = true;
        running = false;
    }
    
}

function changeBarrier(slider, rightwall, rightside) {
    var wall = document.getElementById(rightwall);
    var wallwidth = wall.style.width;
    var side = document.getElementById(rightside);
    var sidewidth = 296;
    var barrier = document.getElementById(slider);
    wall.style.width = barrier.value + 'px';
    side.style.width = (sidewidth - (barrier.value - 100)) + 'px';    
}

function move() {
    var elem = document.getElementById("electron1");
    id = setInterval(frame, 10);
    var pos = elem.offsetLeft;
    var background = document.getElementById("background");
    var top = 80;
    var updateTop = 0;
    function frame() {
        // move in sine wave to right
        if (pos < background.offsetWidth && pos >= 150 && electronRight == true) {
            elem.style.top = (top + (20 * Math.sin(pos / 9))) + 'px';
            pos++;
            elem.style.left = pos + 'px';
            // move in sine wave to left
        } else if (pos < background.offsetWidth && pos >= 150 && electronRight == false) {
            elem.style.top = (top + (20 * Math.sin(pos / 9))) + 'px';
            pos--;
            elem.style.left = pos + 'px';
        } else if (pos == background.offsetWidth) {
            electronRight = false;
            pos--;
        } else {
            electronRight = true;
            pos++;
        }          
    }
}

function switchParticle(url) {
    var particle = document.getElementById("proton5");
    particle.style.background = "url('" + url + "')"
    particle.style.backgroundPosition = "center";
    particle.style.backgroundSize = 30 + 'px';
}

function click1(show, hide) {
    document.getElementById(show).style.visibility = 'visible';
    document.getElementById(hide).style.visibility = 'hidden';
}