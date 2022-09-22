
var sketchProc = function (processingInstance) {
    
        var canvas = document.querySelector('#mycanvas');
        var c = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        with (processingInstance) {

        size(canvas.width, canvas.height);
        frameRate(30);
  
 
//shooting stars with PVectors
//Click to make more!



var t = 0;

var shootingStar = function(x,y){
    this.position = new PVector(x,y);
    this.velocity = new PVector(0,2);
    this.acceleration = new PVector(random(-0.2,-0.3),random(0.8,1));
    this.size = 2;
    this.speed = random(1,2);
    this.draw = function() {
        noStroke();
        fill(255, 255, 255,1);
        ellipse(this.position.x,this.position.y,this.size,this.size);
    };
    this.update=function(){
        this.size+=0.04;
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
      
        
    };
};
var stars = [];
stars.add = function(x,y){
    stars.push( new shootingStar(x,y));
};
stars.draw= function() {
    for(var i=0;i<stars.length;i++){
        stars[i].draw();
        stars[i].update();
    }
};

// mouseClicked = function(){
//     stars.add(mouseX, mouseY);
//   };
var dots = [];
// background(22, 13, 153, 0.096);

var draw = function() {
    background(0, 99, 233, 3);
if(stars.length>500){//this reduces the lagging
    stars.shift();
}
    t++;
    if(t%60===20){
        stars.add(random(0,1000),random(-100,0));
        stars.add(random(0,1000),random(-100,0));
        stars.add(random(400,500),random(200));
    }
    
    stars.draw();
    // fill(0, 4, 84);
    

 for(var i=0;i<200;i++){
     stroke(255, 255, 255);
     strokeWeight(random(0.8,3.3));
     point(random(width),random(height));
 }
};    

    }
};


// Get the canvas that Processing-js will use
var canvas = document.getElementById("mycanvas");
canvas.width = window.innerWidth;
// Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
var processingInstance = new Processing(canvas, sketchProc);

