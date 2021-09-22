
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
    } else if (hours == 24) {
        hours = 0;
    } else {
        hours = hours;
    }
    h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds)

    if (hours < 12 && hours>=5) {
        h1.textContent = "Good Morning";

    } else if (hours < 18 && hours >= 12) {
        h1.textContent = "Good Afernoon";
        $("#bkpic3").css("background-image", "url(image/postAfternoon2-bg.jpg)");

    } else if (hours < 23 && hours >= 18){
        h1.textContent = "Good Evening";
        
        $("#bkpic3").css("background-image", "url(image/postEvening2-bg.jpg)");
       $("#myClass").addClass("overlay");
       
    } else  {
        h1.textContent = "Good Night";
        $("#bkpic3").css("background-image", "url(image/postEvening-bg.jpg)");
    }
}, 1000);

function addZero(time) {
    return (time < 10) ? "0" + time : time;
}












