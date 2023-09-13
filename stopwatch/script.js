let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById('display');
let timer = null; //declare a variable named timer and initialize it to null. This variable will be used to hold the reference to the timer interval.

function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;


    console.log(h + ':' + m + ':' + s);
    displayTime.innerHTML = h + ':' + m + ':' + s;

}

function watchStart() { // This is the watchStart function that starts the timer.
    if (timer !== null) {
        clearInterval(timer);
    } //This conditional check ensures that if a timer is already running (i.e., timer is not null), it clears the previous timer interval using clearInterval(timer). This prevents multiple timers from running simultaneously.

    timer = setInterval(stopwatch, 1000); //sets up the time interval value = 1000 = timer which results in executing the function stopwatch in every second
}  //When you call watchStart(), it will either start a new timer or restart the existing timer, ensuring that only one timer is running at any given time. The stopwatch function will be executed every second while the timer is active.

function watchStop() {
    clearInterval(timer);
}
function watchReset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00:00;00";
}


