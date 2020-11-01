 class Polygon{
    constructor(x,y,width,height) {
        var options = {
            isStatic: false
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image=loadImage("polygon.png")
        World.add(world, this.body);
      }
      display(){

        var pos =this.body.position;
        push()
        translate(this.body.position.x, this.body.position.y); 
        rotate(this.body.angle);
        imageMode(CENTER);
        fill("brown");
       image(this.image,0,0,this.width, this.height);
       pop();
      }
     
 }
 