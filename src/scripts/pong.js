// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

const pong = document.querySelector("#pong");

let s = function (c) {
  const w = pong.clientWidth;
  const h = pong.clientHeight;
  const p = 2; //padding

  const barW = 150;
  const barH = 15;
  const barY = h - p - barH;

  let ballX = w / 2;
  let ballY = h / 2;
  const r = 10; // ball radius

  let speedX = 4;
  let speedY = 7;

  let gameStarted;
  let computerScore = 0;
  let yourScore = 0;

  c.setup = function () {
    c.createCanvas(pong.clientWidth, pong.clientHeight);
    c.frameRate(100);
  };

  c.mousePressed = function () {
    if (
      c.mousePressed &&
      c.mouseX > pong.clientLeft &&
      c.mouseX < w &&
      c.mouseY > pong.clientTop &&
      c.mouseY < h
    ) {
      gameStarted = true;
    }
  };

  c.draw = function () {
    c.background(240);
    c.fill(0);
    c.stroke(0);

    //moves bars
    let bottomBarX = c.mouseX - barW / 2;
    let topBarX = ballX - barW / 2;

    c.rect(bottomBarX, barY, barW, barH);

    c.rect(topBarX, p, barW, barH);

    c.ellipse(ballX, ballY, 2 * r, 2 * r);
    for (let i = 0; i < w; i += 20) {
      //dash line
      c.stroke(0);
      c.line(i, h / 2, i + 10, h / 2);
    }

    // game info on screen
    if (!gameStarted) {
      c.textSize(20);
      c.text("CLICK TO START", 20, 50);
      c.text("press any key to reset score", 20, 80);
      return;
    } else {
      c.text("computer", 20, 35);
      c.text(computerScore, 20, 60);
      c.text("you", 20, h - 60);
      c.text(yourScore, 20, h - 35);
    }

    // moves ball
    ballX += speedX;
    ballY += speedY;

    const ballCrossedRight = ballX > w - r;
    const ballCrossedLeft = ballX < r;
    const ballInTopBar = ballY < r + p + barH && speedY < 0;
    const ballInBottomBar = ballY > h - p - r - barH && speedY > 0;
    const ballCrossedDown = ballY > h + r && speedY > 0;

    if (ballCrossedRight || ballCrossedLeft) {
      speedX = -speedX;
    }

    if (ballInTopBar) {
      speedY = -speedY;
    } else if (ballCrossedDown) {
      computerScore++;
      ballX = w / 2;
      ballY = h / 2;
      gameStarted = false;
    }

    let leftHalf = ballX >= bottomBarX && ballX < bottomBarX + barW / 2;
    let rightHalf = ballX > bottomBarX + barW / 2 && ballX <= bottomBarX + barW;

    if (ballInBottomBar && leftHalf) {
      speedY = -speedY;
      if (speedX > 0) {
        speedX = -speedX;
      }
    } else if (ballInBottomBar && rightHalf) {
      speedY = -speedY;
      if (speedX < 0) {
        speedX = -speedX;
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

const myp5 = new p5(s, "pong");
