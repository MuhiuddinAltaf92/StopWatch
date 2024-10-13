var hours = 0;
var minutes = 0;
var seconds = 0;
var milliseconds = 0;

var gethour = document.getElementById('hour');
var getmin = document.getElementById('min');
var getsec = document.getElementById('sec');
var getmsec = document.getElementById('msec');
var lapContainer = document.getElementById('laps'); // Container for laps

var interval;
var lapCount = 0;

function updateTimer() {
    milliseconds++;
    getmsec.innerHTML = milliseconds < 10 ? '0' + milliseconds : milliseconds;
    if (milliseconds >= 100) {
        seconds++;
        getsec.innerHTML = seconds < 10 ? '0' + seconds : seconds;
        milliseconds = 0;
    }
    if (seconds >= 60) {
        minutes++;
        getmin.innerHTML = minutes < 10 ? '0' + minutes : minutes;
        seconds = 0;
    }
    if (minutes >= 60) {
        hours++;
        gethour.innerHTML = hours < 10 ? '0' + hours : hours;
        minutes = 0;
    }
}

function start() {
    interval = setInterval(updateTimer, 10);
    document.getElementById('start-btn').disabled = true;
}

function stop() {
    clearInterval(interval);
    document.getElementById('start-btn').disabled = false;
}

function lap() {
    lapCount++;
    var lapTime = getFormattedTime(); // Get the current time as formatted string
    var lapItem = document.createElement('div');
    lapItem.classList.add('lap-item');
    lapItem.innerHTML = `Lap ${lapCount}: ${lapTime}`;
    lapContainer.appendChild(lapItem); // Add lap time to the container
}

function reset() {
    stop();
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    lapCount = 0;

    gethour.innerHTML = '00';
    getmin.innerHTML = '00';
    getsec.innerHTML = '00';
    getmsec.innerHTML = '00';

    lapContainer.innerHTML = ''; // Clear all lap times
}

function getFormattedTime() {
    var h = hours < 10 ? '0' + hours : hours;
    var m = minutes < 10 ? '0' + minutes : minutes;
    var s = seconds < 10 ? '0' + seconds : seconds;
    var ms = milliseconds < 10 ? '0' + milliseconds : milliseconds;
    return `${h}:${m}:${s}:${ms}`;
}
function toggleMode() {
    const toggle = document.getElementById('mode-toggle');
    if (toggle.checked) {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }
}
