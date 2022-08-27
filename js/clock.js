
runClock();
setInterval("runClock()", 1000);

function runClock() {
    // store the current date and time
    var currentDay = new Date();
    var dateStr = currentDay.toLocaleDateString();
    var timeStr = currentDay.toLocaleTimeString();

    // display the current date and time
    document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

}