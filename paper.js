class Paper{
    constructor(x,y){
        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.paper=Bodies.circle(x,y,70,options)
        World.add(world,this.paper)
        this.image=loadImage("images/paper.png")
        this.r=50;
    }
    display(){
        var pos=this.paper.position;
       imageMode(RADIUS);
        image(this.image,pos.x,pos.y+25,this.r,this.r);
    }

}