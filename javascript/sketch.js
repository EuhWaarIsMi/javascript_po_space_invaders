var ship;
var aantalEnemiesPerRij = 11;
var aantalRijen = 5;
var bullets = [];
var enemies = [];
var lMarge = 0.25;
var rMarge = 0.75;
var currentTime;
var oldTime;
var timeMargin;
var cooldownCounter = 1;
var yEnemy = 60;
var xEnemy = 0;


function setup() {
  createCanvas(innerWidth, innerHeight);
  ship = new Ship(lMarge, rMarge);
  for (var n = 0; n < aantalEnemiesPerRij*aantalRijen; n++) {
    if (n == 10 || n == 21 || n == 32 || n == 43) {
        
        enemies[n] = new Enemy(xEnemy*50+(lMarge*width), yEnemy);
        xEnemy = 0;
        yEnemy += 40;
    } 
    else {
        enemies[n] = new Enemy(xEnemy*50+(lMarge*width), yEnemy);
        xEnemy += 1;
    }
    
  }
}

function draw() {
  background(51);

  //Cooldown
  var s = second();
  var m = minute();
  var h = hour();
  currentTime = s + 60*m + 3600*h;
  timeMargin = currentTime - oldTime;
  if (timeMargin == 1) {
      cooldownCounter++;
  }

  //Update kogels
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

  //Beweegt ruimteschip
  ship.show();
  ship.move();

  var edge = false;

  //Beweegt vijanden
  for (var n = 0; n < enemies.length; n++) {
    enemies[n].show();
    enemies[n].move();
    if (enemies[n].x > rMarge*width || enemies[n].x < lMarge*width) {
      edge = true;
    }
  }

  //Zorgt ervoor dat de vijanden teruggaan als ze bij de rand komen
  if (edge) {
    for (var n = 0; n < enemies.length; n++) {
      enemies[n].shiftDown();
    }
  }

  //Delete kogels, als ze iets raken
  for (var n = bullets.length-1; n >= 0; n--) {
    if (bullets[n].toDelete) {
      bullets.splice(n, 1);
    }
  }

  //Delete vijanden, als ze geraakt zijn
  for (var n = 0; n < enemies.length; n++) {
      if (enemies[n].toDelete) {
        enemies.splice(n, 1);
      }
  }

  //Onder tijd
  oldTime = currentTime;

}

//Zet het schip stil, als er geen toetsen ingedrukt worden, behalve de spatiebalk
function keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
  }
}

//Zorgt voor de functionaliteit bij elke toets
function keyPressed() {
  if (key === ' ' && cooldownCounter >= 1) {
    var bullet = new Bullet(ship.x, ship.y);
    bullets.push(bullet);
    cooldownCounter = 0;
  }

  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}
