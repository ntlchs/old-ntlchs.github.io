function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const pong = document.getElementById("pong");

var s = function (c) {
  var w = pong.clientWidth;
  var h = pong.clientHeight;
  var p = 2; //padding

  let barW = 15;
  let barH = 150;
  var barX = p;

  var ballX = w / 2;
  var ballY = h / 2;
  let r = 10; // ball radius

  let speedX = 7;
  let speedY = 4;

  let gameStarted;
  let computerScore = 0;
  let yourScore = 0;

  c.setup = function () {
    c.createCanvas(pong.clientWidth, pong.clientHeight);
    c.frameRate(100);
  };

  c.mousePressed = function () {
    gameStarted = true;
  };

  c.draw = function () {
    c.background(0);
    c.fill(255);

    //moves bars
    var LeftBarY = c.mouseY - barH / 2;
    var RightBarY = ballY - barH / 2;

    c.rect(barX, LeftBarY, barW, barH);

    c.rect(w - p - barW, RightBarY, barW, barH);

    c.ellipse(ballX, ballY, 2 * r, 2 * r);

    // game info on screen
    if (!gameStarted) {
      c.textSize(20);
      c.textAlign(c.CENTER);
      c.text("Click to start", w / 2, h / 4);
      c.text("press r to reset score", w / 2, h / 4 + 30);
      c.text("press esc to pause game", w / 2, h / 4 + 60);
      return;
    } else {
      c.textAlign(c.LEFT);
      c.text("computer", w - 120, 60);
      c.text(computerScore, w - 120, 90);
      c.text("you", 20, 60);
      c.text(yourScore, 20, 90);
      ballX += speedX;
      ballY += speedY;
    }

    for (i = 0; i < h; i += 20) {
      //dash line
      c.stroke(255);
      c.line(w / 2, i, w / 2, i + 10);
    }

    const ballCrossedTop = ballY < r;
    const ballCrossedDown = ballY > h - r;
    const ballInLeftBar = ballX < p + r + barW && speedX < 0;
    const ballInRightBar = ballX > w - p - barW - r && speedX > 0;
    const ballCrossedLeft = ballX < p && speedX < 0;

    if (ballCrossedTop || ballCrossedDown) {
      speedY = -speedY;
    }

    if (ballInRightBar) {
      speedX = -speedX;
    } else if (ballCrossedLeft) {
      computerScore++;
      ballX = w / 2;
      ballY = h / 2;
    }

    let TopHalf = ballY >= LeftBarY && ballY < LeftBarY + barH / 2;
    let bottomHalf = ballY > LeftBarY + barH / 2 && ballY <= LeftBarY + barH;

    if (ballInLeftBar && TopHalf) {
      speedX = -speedX;
      if (speedY > 0) {
        speedY = -speedY;
      }
    } else if (ballInLeftBar && bottomHalf) {
      speedX = -speedX;
      if (speedY < 0) {
        speedY = -speedY;
      }
    }
  };
  c.keyPressed = () => {
    if (c.keyCode == 27) {
      // esc
      gameStarted = false;
      return;
    } else if ((c.keyCode = 82)) {
      // r
      computerScore = 0;
      yourScore = 0;
    }
  };
};

var myp5 = new p5(s, "pong");
