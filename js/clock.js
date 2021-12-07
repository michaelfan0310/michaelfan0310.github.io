
var h2 = document.getElementById('clock');
var h1 = document.getElementById('greeting');
var q =document.getElementById('question');
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
    h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);
    

    if (hours < 12 && hours>=5) {
        h1.textContent = "Good Morning";
        h1.style.color="#B4FE98";
        h2.style.color="rgba(6, 240, 6, 0.13)";

    } else if (hours < 18 && hours >= 12) {
        h1.textContent = "Good Afernoon";
        // h1.style.color="#FF0000";
        // h2.style.color="#FF0000";
        $("#bkpic3").css("background-image", "url(image/postAfternoon2-bg.jpg)");

    } else if (hours < 23 && hours >= 18){
        h1.textContent = "Good Evening";
        q.textContent =  "Why are you still working?";
        h1.style.color="#2B4F60";
        h2.style.color="rgb(43, 79, 96,0.7)";
        
        $("#bkpic3").css("background-image", "url(image/postEvening2-bg.jpg)");
       $("#myClass").addClass("overlay");
       
    } else  {
        h1.textContent = "Good Night";
        q.textContent =  "Why are you still working??DreamMakingTime";
        h1.style.color="#3D2C8D";
        h2.style.color="rgb(61, 44, 141,0.6)";
        $("#bkpic3").css("background-image", "url(image/postEvening-bg.jpg)");
    }
}, 1000);

function addZero(time) {
    return (time < 10) ? "0" + time : time;
}












