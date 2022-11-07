console.log("Webpack is working!")

const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;

const mo = new MovingObject({
    pos: [30, 30],
    vel: [.25, .25],
    radius: 5,
    color: "#00FFFF"
});

document.addEventListener("DOMContentLoaded", function () {
    const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = 500;
    canvasEl.height = 500;

    const ctx = canvasEl.getContext("2d");

    mo.draw(ctx);

    setInterval(function () {
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
        mo.move(ctx);
    }, .5);
})

// mo.draw();