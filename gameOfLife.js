const gol = document.getElementById("gol");
let w = gol.clientWidth;
let h = gol.clientHeight;

var v = function (c) {
  console.log(w, h);
  let size = 100;
  let gameStarted = false;
  let gamePaused = false;

  function createArray() {
    let board = [];
    for (let i = 0; i < size; i++) {
      let line = [];
      for (let j = 0; j < size; j++) {
        line.push(false);
      }
      board.push(line);
    }
    return board;
  }

  let board = createArray();
  let nextGeneration = createArray();

  c.setup = () => {
    c.createCanvas(w, h);
    cellSize = w / size;
    c.background(0);
    c.frameRate(9);
  };

  c.mousePressed = function () {
    if (
      c.mousePressed &&
      c.mouseX > gol.clientLeft &&
      c.mouseX < w &&
      c.mouseY > gol.clientTop &&
      c.mouseY < h
    ) {
      let gameStatus = gameStarted;
      gameStarted = true;
      if (gameStatus != gameStarted) {
        createGliderGun(size / 2 - 20, size / 2 - 5);
      }
    }
  };

  c.draw = () => {
    if (!gameStarted) {
      c.background(0);
      c.fill(255);
      c.textSize(20);
      c.textAlign(c.CENTER);
      c.text("Click to start", w / 2, h / 2);
      return;
    }

    if (gamePaused) {
      c.background(0);
      c.fill(255);
      c.textSize(20);
      c.textAlign(c.CENTER);
      c.text("Press esc to play", w / 2, h / 2);
      return;
    }

    c.background(0);
    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        nextGeneration[x][y] = evolve(x, y);
        if (board[x][y]) {
          c.fill(255);
          c.square(cellSize * x, cellSize * y, cellSize);
        }
      }
    }
    board = nextGeneration;
    nextGeneration = createArray();
  };

  function evolve(i, j) {
    // RULES:
    if (board[i][j] && countNeighbors(i, j) < 2) {
      // 1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
      return false;
    }
    if (
      board[i][j] &&
      (countNeighbors(i, j) == 2 || countNeighbors(i, j) == 3)
    ) {
      // 2. Any live cell with two or three live neighbours lives on to the next generation.
      return true;
    }
    if (board[i][j] && countNeighbors(i, j) > 3) {
      // 3. Any live cell with more than three live neighbours dies, as if by overpopulation.
      return false;
    }
    if (!board[i][j] && countNeighbors(i, j) == 3) {
      // 4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
      return true;
    }
    return board[i][j];
  }

  function countNeighbors(i, j) {
    let bottom = board[module(i + 1, size)][j];
    let bottomLeft = board[module(i + 1, size)][module(j - 1, size)];
    let bottomRight = board[module(i + 1, size)][module(j + 1, size)];
    let left = board[i][module(j - 1, size)];
    let right = board[i][module(j + 1, size)];
    let top = board[module(i - 1, size)][j];
    let topLeft = board[module(i - 1, size)][module(j - 1, size)];
    let topRight = board[module(i - 1, size)][module(j + 1, size)];
    return (
      bottom +
      bottomLeft +
      bottomRight +
      left +
      right +
      top +
      topLeft +
      topRight
    );
  }

  function module(x, y) {
    let mod = x % y;
    if (mod < 0) {
      mod = y + mod;
    }
    //debugger; //('x', x, 'y', y, 'mod', mod);
    return mod;
  }

  function createFromString(x, y, str) {
    let x0 = x;
    for (let i = 0; i < str.length; i++) {
      //debugger;
      if (str[i] == ".") {
        x++;
      }
      if (str[i] == "O") {
        board[x][y] = true;
        x++;
      }
      if (str[i] == "\n") {
        y++;
        x = x0;
      }
    }
  }

  function createBlinker(x, y) {
    let blinker = "OOO";
    createFromString(x, y, blinker);
  }

  function createBlock(x, y) {
    let block = "\
      OO\n\
      OO";
    createFromString(x, y, block);
  }

  function createEater(x, y) {
    let eater1 = "\
        OO\n\
        O.O\n\
        ..O\n\
        ..OO";
    createFromString(x, y, eater1);
  }

  function createGlider(x, y) {
    let glider = "\
        .O\n\
        ..O\n\
        OOO";
    createFromString(x, y, glider);
  }

  function createGliderGun(x, y) {
    let gliderGun =
      "\
      ........................O\n\
      ......................O.O\n\
      ............OO......OO............OO\n\
      ...........O...O....OO............OO\n\
      OO........O.....O...OO\n\
      OO........O...O.OO....O.O\n\
      ..........O.....O.......O\n\
      ...........O...O\n\
      ............OO";
    createFromString(x, y, gliderGun);
  }

  function createHerschel(x, y) {
    let herschel = "O\n\
    OOO\n\
    O.O\n\
    ..O";
    createFromString(x, y, herschel);
  }

  function createReverseGlider(x, y) {
    createGlider(x, y);
    createGlider(x + 2, y);
    createGlider(x + 4, y);
  }

  function createRPentomino(x, y) {
    let rPentomino = "\
    .OO\n\
    OO\n\
    .O";
    createFromString(x, y, rPentomino);
  }

  c.keyPressed = () => {
    console.log("here");
    let x = c.round(c.mouseX / cellSize);
    let y = c.round(c.mouseY / cellSize);
    console.log({ k: c.keyCode });
    if (c.keyCode == 75) {
      // k
      createBlinker(x, y);
    } else if (c.keyCode == 66) {
      // b
      createBlock(x, y);
    } else if (c.keyCode == 69) {
      // e
      createEater(x, y);
    } else if (c.keyCode == 71) {
      // g
      createGlider(x, y);
    } else if (c.keyCode == 72) {
      // h
      createHerschel(x, y);
    } else if (c.keyCode == 78) {
      // n
      createGliderGun(x, y);
    } else if (c.keyCode == 80) {
      // p
      createRPentomino(x, y);
    } else if (c.keyCode == 82) {
      // r
      createReverseGlider(x, y);
    } else if (c.keyCode == 27) {
      // esc
      if (gameStarted || gamePaused == false) {
        gamePaused = true;
        return;
      } else {
        gamePaused = false;
      }
    }
  };
};

var myp5 = new p5(v, "gol");
