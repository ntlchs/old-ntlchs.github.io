const pong = document.getElementById("pong");

var s = function (c) {
  let ballRadius = 50;
  let barWidth = 180;
  let barHeight = 30;
  var canvasWidth = (c.setup = function () {
    c.createCanvas(pong.clientWidth, pong.clientHeight);
  });

  c.draw = function () {
    var ballX = 100;
    var ballY = 100;
    var barY = pong.clientHeight - 50;
    var barrierLeft = pong.clientLeft + 20;
    var barrierRight = pong.clientWidth - barWidth - 20;
    var barX = c.mouseX;

    if (barX < barrierLeft) {
      barX = barrierLeft;
    } else if (barX > barrierRight) {
      barX = barrierRight;
    }
    c.background(0);
    c.fill(255);
    c.ellipse(ballX, ballY, ballRadius, ballRadius);
    c.rect(barX, barY, barWidth, barHeight);
  };
};

var myp5 = new p5(s, "pong");
pong.scrollIntoView();
