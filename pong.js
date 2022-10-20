const pong = document.getElementById("pong");

var s = function (c) {
  var x = 100;
  var y = 100;
  var canvasWidth = (c.setup = function () {
    c.createCanvas(pong.clientWidth, pong.clientHeight);
  });

  c.draw = function () {
    c.background(0);
    c.fill(255);
    c.rect(x, y, 50, 50);
  };
};
var myp5 = new p5(s, "pong");
