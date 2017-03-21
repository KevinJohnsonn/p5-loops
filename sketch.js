function setup(){
    createCanvas(600,400);
    background(249,122,141);
}

function draw(){
    strokeWeight(4);
    stroke(255);
    
    var x= 0;
    while(x<650){
        fill(94, 255, 89);
         ellipse(x,  255,25, 25);
         x = x + 50;
    }
    
    for(var x =0; x < 650; x = x + 10){
        fill(89, 152, 255);
        ellipse(200, x, 25, 25);
    }
  
}