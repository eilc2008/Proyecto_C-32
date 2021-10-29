class Ball {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

        //this.trajectory = [];

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        /*if(this.body.velocity.x > 10 && this.body.position.x > 200){
            pos = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position);
          }*/
          
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();

        /*for(var i=0; i<this.trajectory.length; i++){
            ellipse(0, 0, this.r,this.r);
        }*/
    }

};