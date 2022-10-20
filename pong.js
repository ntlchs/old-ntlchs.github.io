const pong = document.getElementById("pong");

var s = function (c) {
  var canvasW = pong.clientWidth;
  var canvasH = pong.clientHeight;
  var p = 5; //padding

  let barW = 180;
  let barH = 30;

  let r = 25; // ball radius
  var ballX = canvasW / 2;
  var ballY = canvasH / 2;

  let speedX = 3;
  let speedY = 3;

  var barY = canvasH - barH - p;

  var maxY = canvasH - 2 * barH - p;
  var maxX = canvasW - p;

  let gameStarted;

  var canvasW = (c.setup = function () {
    c.createCanvas(pong.clientWidth, pong.clientHeight);
  });

  c.mousePressed = function () {
    gameStarted = true;
  };

  c.draw = function () {
    var barX = c.mouseX - barW / 2;

    c.background(0);
    c.fill(255);
    c.rect(barX, barY, barW, barH);

    c.ellipse(ballX, ballY, 2 * r, 2 * r);

    if (!gameStarted) {
      return;
    }

    ballX += speedX;
    ballY += speedY;

    const ballCrossedRight = ballX > maxX - r;
    const ballCrossedLeft = ballX < r + p;
    // moves ball
    if (ballCrossedRight || ballCrossedLeft) {
      speedX = -speedX;
    }
    if (
      (ballY > maxY && ballX >= barX && ballX <= barX + barW && speedY > 0) ||
      ballY < r + p
    ) {
      speedY = -speedY;
    } else if (ballY > canvasH + r) {
      ballY = canvasH / 2;
    }
  };
};

var myp5 = new p5(s, "pong");

// website goes directly into game
pong.scrollIntoView();
