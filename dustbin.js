class Dustbin {
    constructor(x,y,w,h){
        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,option);
        World.add(world,this.body)
        this.h=h;
        this.w=w;

    }
    display(){
        var pos=this.body.position
        fill("red")
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
    }
}