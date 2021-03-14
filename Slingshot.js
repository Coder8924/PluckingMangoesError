class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 10
        }
        this.pointB = pointB;
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }
    attach(body) {
        this.body.bodyA = body;
      }
    fly() {
        this.body.bodyA = null;
    }
    display() {
    if(this.body.bodyA){ 
    var posA = this.body.bodyA.position;
    var posB = this.pointB;
    push();
    stroke(48,22,8);
    }
    pop();
    }
 }


