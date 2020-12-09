class Drop {
constructor(x,y){

    var options={
        isStatic:false,
        friction:0.1

}
this.x=x;
this.y=y;
this.r=r
this.body=Bodies.circle(this.x, this.y, this.r/2, options)
        World.add(world, this.body);
this.rain = this.body;

}


 update() {
	if (this.rain.position.y>height) {
    Matter.Body.setPosition(this.rain, {x:random (0,400), y:random (0,400)}) 
	
    }
