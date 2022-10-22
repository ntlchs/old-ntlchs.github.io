const pong = document.getElementById("pong");

pong.addEventListener("scroll", (e) => {
  e.preventDefault();
  return false;
});

var s = function (c) {
  var w = pong.clientWidth;
  var h = pong.clientHeight;
  var p = 2; //padding

  let barW = 150;
  let barH = 15;
  var barY = h - p - barH;

  var ballX = w / 2;
  var ballY = h / 2;
  let r = 10; // ball radius

  let speedX = 3;
  let speedY = 5;

  let gameStarted;

  c.setup = function () {
    c.createCanvas(pong.clientWidth, pong.clientHeight);
  };

  c.mousePressed = function () {
    gameStarted = true;
  };

  c.draw = function () {
    var bottomBarY = c.mouseX - barW / 2;
    var topBarX = ballX - barW / 2;

    c.background(0);
    c.fill(255);

    c.rect(bottomBarY, barY, barW, barH);

    c.rect(topBarX, p, barW, barH);

    c.ellipse(ballX, ballY, 2 * r, 2 * r);

    for (i = 0; i < w; i += 20) {
      c.stroke(255);
      c.line(i, h / 2, i + 10, h / 2);
    }

    if (!gameStarted) {
      c.text("CLICK TO START", 20, 50);
      return;
    }

    // moves ball
    ballX += speedX;
    ballY += speedY;

    const ballCrossedRight = ballX > w - r;
    const ballCrossedLeft = ballX < r;
    const ballInTopBar = ballY < r + p + barH;
    const ballInBottomBar = ballY > h - p - r - barH;

    if (ballCrossedRight || ballCrossedLeft) {
      speedX = -speedX;
    }

    if (ballInTopBar && speedY < 0) {
      speedY = -speedY;
    } else if (ballY > h + r && speedY > 0) {
      ballY = -r;
    }

    if (
      ballInBottomBar &&
      ballX >= bottomBarY &&
      ballX <= bottomBarY + barW &&
      speedY > 0
    ) {
      speedY = -speedY;
    }
  };
};

var myp5 = new p5(s, "pong");

// website goes directly into game
pong.scrollIntoView();
