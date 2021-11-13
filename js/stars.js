var sketchProc = function (processingInstance) {
    
        var canvas = document.document.querySelector('canvas');        

        // var c = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        with (processingInstance) {

        size(canvas.width, canvas.height);
        frameRate(30);

        var t = 0;

var shootingStar = function(x,y){
    this.position = new PVector(x,y);
    this.velocity = new PVector(-3,3);
    this.acceleration = new PVector(random(-0.29,-0.3),random(0.8,1));
    this.size = 2;
    this.speed = random(1,2);
    this.draw = function() {
        noStroke();
        fill(255, 255, 255);
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
background(230, 228, 240);
rect(0,0,400,400);
var draw = function() {
if(stars.length>50){//this reduces the lagging
    stars.shift();
}
    t++;
    if(t%40===20){
        stars.add(random(0,500),random(-100,0));
        stars.add(random(0,500),random(-100,0));
        stars.add(random(400,500),random(200));
    }
    
    stars.draw();
    fill(0, 4, 84,20);
    rect(0,0,400,400);

 for(var i=0;i<10;i++){
     stroke(255, 255, 255);
     strokeWeight(2);
     point(random(width),random(height));
 }
};


  


        }
    };