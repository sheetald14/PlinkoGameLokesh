class Particles{

construction(x,y,r){
    
var options={
    //restitution:04
}
this.r=r;
this.x=x;
thisy=y;

this.body=Bodies.circle(x,y,this.r,options);
this.color=color(random(0,255),random(0,255),random(0,255));
World.add(world,this.body);
}
/*display(){

    var pos = this.body.position;
    var angle = this.body.angle;
   // push();
    translate(pos.x,pos.y);
    rotate(angle);
    noStroke();
    fill(this.color)
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r)
   // pop();
}*/

display(){
    //   push();
   var pos=this.body.position;
   translate(pos.x,pos.y);
    rotate(this.fillbody.angle);
   ellipseMode(RADIUS);
   fill("white");
   ellipse(pos.x,pos.y,this.r,this.r);
   //pop();
   
   }
}