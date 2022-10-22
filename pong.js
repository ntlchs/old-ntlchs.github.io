const pong = document.getElementById("pong");

pong.addEventListener("scroll", (e) => {
  e.preventDefault();
  return false;
});

var s = function (c) {
  var w = pong.clientWidth;
  var h = pong.clientHeight;
  var p = 2; //padding

  let barW = 180;
  let barH = 30;
  var barY = h - p - barH;

  var ballX = w / 2;
  var ballY = h / 2;
  let r = 20; // ball radius

  let speedX = -2;
  let speedY = 5;

  let gameStarted;

  c.setup = function () {
    c.createCanvas(pong.clientWidth, pong.clientHeight);
  };

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

    // moves ball
    ballX += speedX;
    ballY += speedY;

    const ballCrossedRight = ballX > w - r;
    const ballCrossedLeft = ballX < r;
    const ballCrossedUp = ballY < r;
    const ballInBarY = ballY > h - p - r - barH;

    if (ballCrossedRight || ballCrossedLeft) {
      speedX = -speedX;
    }

    if (ballInBarY && ballX >= barX && ballX <= barX + barW && speedY > 0) {
      speedY = -speedY;
    }

    if (ballCrossedUp && speedY < 0) {
      speedY = -speedY;
    } else if (ballY > h + r && speedY > 0) {
      ballY = -r;
    }
  };
};

var myp5 = new p5(s, "pong");

// website goes directly into game
pong.scrollIntoView();
