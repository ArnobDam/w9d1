// function MovingObject(
//     pos: [30, 30],
//     vel: [10, 10],
//     radius: 5,
//     color: "#00FF00"
// );

function MovingObject(object) {
    // this.object = {
    //     pos: [30, 30],
    //     vel: [10, 10],
    //     radius: 5,
    //     color: "#00FF00"
    // }
    this.pos = object.pos;
    this.vel = object.vel;
    this.radius = object.radius;
    this.color = object.color;
};

module.exports = MovingObject;

// const mo = new MovingObject({

//   });

MovingObject.prototype.draw = function (ctx) {

    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);

    ctx.fill();
    ctx.closePath();
}

MovingObject.prototype.move = function (ctx) {

    
    this.draw(ctx);
    let newPos = [
        this.pos[0] += this.vel[0],
        this.pos[1] += this.vel[1]
    ]
    this.pos = newPos;

    // ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
}


