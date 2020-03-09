var ship;
var aantalEnemies = 11;
var bullets = [];
var enemies = [];
var schietgeluid;

function setup() {
  createCanvas(innerWidth, innerHeight);
  ship = new Ship();
  for (var n = 0; n < aantalEnemies; n++) {
    enemies[n] = new Enemy(n*50+(0.25*width), 60);
  }
}

function draw() {
  background(51);
  ship.show();
  ship.move();

  for (var n = 0; n < bullets.length; n++) {
    bullets[n].show();
    bullets[n].move();
    for (var m = 0; m < enemies.length; m++) {
      if (bullets[n].hits(enemies[m])) {
        enemies[m].destroy();
        bullets[n].destroy();
      }
    }
  }

  var edge = false;

  for (var n = 0; n < enemies.length; n++) {
    enemies[n].show();
    enemies[n].move();
    if (enemies[n].x > 0.75*width || enemies[n].x < 0.25*width) {
      edge = true;
    }
  }

  if (edge) {
    for (var n = 0; n < enemies.length; n++) {
      enemies[n].shiftDown();
    }
  }

  for (var n = bullets.length-1; n >= 0; n--) {
    if (bullets[n].toDelete) {
      bullets.splice(n, 1);
    }
  }

  for (var n = 0; n < enemies.length; n++) {
      if (enemies[n].toDelete) {
        enemies.splice(n, 1);
      }
  }


}

function keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
  }
}


function keyPressed() {
  if (key === ' ') {
    var bullet = new Bullet(ship.x, height);
    bullets.push(bullet);
    schietgeluid.play();
  }

  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}
