var slideShow = function(container) {
    this.images = [];
    this.curImage = 0;
    for (i = 0; i < container.childElementCount; i++) {
        this.images.push(container.children[i]);
        this.images[i].style.display = "none";
    }

    // Handle going to to the next slide
    var nextSlide = function() {
        for (var i = 0; i < this.images.length; i++) {
            this.images[i].style.display = "none";
        }
        this.images[this.curImage].style.display = "block";
        this.curImage++;
        if (this.curImage >= this.images.length) {
            this.curImage = 0;
        }
        window.setTimeout(nextSlide.bind(this), 1500);
    };

    nextSlide.call(this);
};
 slideShow(document.getElementById("slideshow"));



const d = new Date();
const weekday= new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var TODAY=document.getElementById('today');
TODAY.textContent=weekday[d.getDay()];

const date = d.getDate();
document.getElementById("todate").innerHTML=date;

var CURRENTYEAR=document.getElementById('year');
CURRENTYEAR.textContent= new Date().getFullYear()+"         Michael Fan";


