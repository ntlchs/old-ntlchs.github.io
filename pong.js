const pong = document.getElementById("pong");

var s = function (c) {
  var canvasW = pong.clientWidth;
  var canvasH = pong.clientHeight;
  var padding = 5;

  let barWidth = 180;
  let barHeight = 30;

  let ballRadius = 25;
  var ballX = canvasW / 2;
  var ballY = canvasH / 2;

  let speedX = 5;
  let speedY = 5;

  var barY = canvasH - barHeight - padding;

  var minY = padding + ballRadius;
  var maxY = canvasH - 2 * barHeight;

  var minX = pong.clientLeft + padding;
  var maxX = canvasW - padding;

  var canvasW = (c.setup = function () {
    c.createCanvas(pong.clientWidth, pong.clientHeight);
  });

  c.draw = function () {
    var barX = c.mouseX;

    c.background(0);
    c.fill(255);
    c.ellipse(ballX, ballY, 2 * ballRadius, 2 * ballRadius);
    c.rect(barX, barY, barWidth, barHeight);

    ballX += speedX;
    ballY += speedY;

    if (ballX > maxX || ballX < ballRadius + padding) {
      speedX = -speedX;
    }
    if (ballY > maxY || ballY < ballRadius + padding) {
      speedY = -speedY;
    }

    // sets ball limits so ball doesn't overpass canvas vertically
    // if (ballY == maxY) {
    //   ballY -= speed;
    // } else if (ballY == minY) {
    //   ballY += speed;
    // } else {
    //   ballY += 1;
    // }
    // sets bar limits so bar doesn't overpass canvas horizontally
    if (c.mouseX < minX) {
      barX = minX;
    } else if (c.mouseX + barWidth > maxX) {
      barX = maxX;
    }
  };
};

var myp5 = new p5(s, "pong");

pong.scrollIntoView();
