function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const pong = document.getElementById("pong");

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
  let computerScore = 0;
  let yourScore = 0;

  c.setup = function () {
    c.createCanvas(pong.clientWidth, pong.clientHeight);
  };

  c.mousePressed = function () {
    gameStarted = true;
  };

  c.keyPressed = function () {
    computerScore = 0;
    yourScore = 0;
  };

  c.draw = function () {
    c.background(240);
    c.fill(0);

    //moves bars
    var bottomBarX = c.mouseX - barW / 2;
    var topBarX = ballX - barW / 2;

    c.rect(bottomBarX, barY, barW, barH);

    c.rect(topBarX, p, barW, barH);

    c.ellipse(ballX, ballY, 2 * r, 2 * r);
    for (i = 0; i < w; i += 20) {
      //dash line
      c.stroke(0);
      c.line(i, h / 2, i + 10, h / 2);
    }

    // game info on screen
    if (!gameStarted) {
      c.text("CLICK TO START", 20, 50);
      c.text("press any key to reset score", 20, 70);
      return;
    } else {
      c.text("computer", 20, 35);
      c.text(computerScore, 20, 50);
      c.text("you", 20, h - 50);
      c.text(yourScore, 20, h - 35);
    }

    // moves ball
    ballX += speedX;
    ballY += speedY;

    const ballCrossedRight = ballX > w - r;
    const ballCrossedLeft = ballX < r;
    const ballInTopBar = ballY < r + p + barH;
    const ballInBottomBar = ballY > h - p - r - barH;
    const ballCrossedDown = ballY > h + r;

    if (ballCrossedRight || ballCrossedLeft) {
      speedX = -speedX;
    }

    if (ballInTopBar && speedY < 0) {
      speedY = -speedY;
    } else if (ballCrossedDown && speedY > 0) {
      computerScore++;
      ballX = w / 2;
      ballY = h / 2;
      gameStarted = false;
    }

    if (
      ballInBottomBar &&
      ballX >= bottomBarX &&
      ballX <= bottomBarX + barW &&
      speedY > 0
    ) {
      speedY = -speedY;
    }
  };
};

var myp5 = new p5(s, "pong");
