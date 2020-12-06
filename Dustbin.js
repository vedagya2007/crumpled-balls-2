class Dustbin{
    constructor(x,y,width,height){
       var options ={
           isStatic:true
       }
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       this.image = loadImage("Images/dustbingreen.png.png");
       World.add(world,this.body);

    };
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(255, 255, 255, 0.5);
        rect(pos.x, pos.y, this.width, this.height);
      }
}