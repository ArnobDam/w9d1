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
    ctx.fillStyle = this.object[color];
    ctx.beginPath();

    ctx.arc(this.object[pos][0], this.object[pos][1], this.object[radius], 0, 2 * Math.PI, true);

    ctx.fill();
}


