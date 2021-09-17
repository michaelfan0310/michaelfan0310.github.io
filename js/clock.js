



var h2 = document.getElementById('clock');

// display current time by the second
var currentTime = setInterval(function () {
    var date = new Date();

    var hours = (date.getHours());
    // var hours = date.getHours();

    var minutes = date.getMinutes();

    var seconds = date.getSeconds();

    var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';


    //convert military time to standard time

    if (hours < 0) {
        hours = hours * -1;
    } else if (hours == 00) {
        hours = 12;
    } else {
        hours = hours;
    }


    h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + "" + ampm;

}, 1000);




function addZero(time) {

    return (time < 10) ? "0" + time : time;

}









