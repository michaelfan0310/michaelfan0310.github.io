
var h2 = document.getElementById('clock');
var h1 = document.getElementById('greeting');

// display current time by the second
var currentTime = setInterval(function () {
    var date = new Date();

    var hours = (date.getHours());
    // var hours = date.getHours();

    var minutes = date.getMinutes();

    var seconds = date.getSeconds();
    
    //convert military time to standard time

    if (hours < 0) {
        hours = hours * -1;
    // } else if (hours == 00) {
    //     hours = 12;
    } else {
        hours = hours;
    }
    h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds)

    if (hours < 12 && hours>=5) {
        h1.textContent = "Good Morning";
    } else if (hours < 18 && hours >= 12) {
        h1.textContent = "Good Afernoon";
    } else {
        h1.textContent = "Good Evening";
    }

}, 1000);

function addZero(time) {
    return (time < 10) ? "0" + time : time;
}












