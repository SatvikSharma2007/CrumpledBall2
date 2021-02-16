class Ground {
    constructor(){
        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(400,690,800,10,option);
        World.add(world,this.body)
    

    }
    display(){
        var pos=this.body.position
        fill("brown")
        rectMode(CENTER);
        rect(pos.x,pos.y,800,10);
    }
}