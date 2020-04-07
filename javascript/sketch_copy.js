var ship;
var aantalEnemiesPerRij = 11;
var aantalRijen = 5;
var bullets = [];
var enemies = [];
var shields = [];
var lMarge = 0.25;
var rMarge = 0.75;
var currentTime;
var oldTime;
var timeMargin;
var cooldownCounter = 1;
var cooldownCounter2 =0;
var yEnemy = 60;
var xEnemy = 0;
var aantalKogelsVijand = 2;
var schietgeluid;
var slider;
var enemy_hit;
var muziek;
var volume;
var victory;
var gameover;
var score = 0;
var shieldHeight = 0.7*innerHeight;
var ruimtewezen = [];
var aantalBeeldjes = 7;
var nieuw_beeldje;
var nummer = 1;
var count = 4;
var fps = 60;
var pauzescherm = false;

function preload() {
    schietgeluid = loadSound("javascript/schietgeluid.mp3");
    enemy_hit = loadSound("enemy_hit.mp3");
    muziek = loadSound("muziek.mp3");
    victory = loadSound("win.mp3");
    gameover = loadSound("gameover.mp3");

    for (var n = 1; n <= aantalBeeldjes; n++) {
        nieuw_beeldje = loadImage("Player"+n+".png");
        ruimtewezen.push(nieuw_beeldje);
    }

}


function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(fps);
  ship = new Ship(lMarge, rMarge, ruimtewezen);
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

  
  var shield = new Shield(0.35, shieldHeight);
  shields.push(shield);
  shield = new Shield(0.5, shieldHeight);
  shields.push(shield);
  shield = new Shield(0.65, shieldHeight);
  shields.push(shield);

  slider = createSlider(0, 1, 0.5, 0.01);
  muziek.loop();

}

function draw() {
if pauzescherm {
    background(51);
    textSize(20);
    text('Het spel is gepauzeerd', innerWidth/2, innerHeight/2);
    textAlign(CENTER, CENTER);
}
else {
    background(51);

    schietgeluid.setVolume(slider.value());
    muziek.setVolume(slider.value());
    slider.position(0.9 * width, 0.1 * height);
    fill("white");
        volume = text("volume", 0.9 * width, );


    //Cooldown
    var s = second();
    var m = minute();
    var h = hour();
    currentTime = s + 60*m + 3600*h;
    timeMargin = currentTime - oldTime;
    if (timeMargin == 1) {
        cooldownCounter++;
        cooldownCounter2++;
    }

    //Update kogels
    for (var n = 0; n < bullets.length; n++) {
        bullets[n].show();
        bullets[n].move();
        if (bullets[n].hits(ship) && bullets[n].type == 'enemy') {
            bullets[n].destroy();
            ship.destroy();
            score -= 50;
        }
        for (var m = 0; m < enemies.length; m++) {
        if (bullets[n].hits(enemies[m]) && bullets[n].type == 'ship') {
            enemies[m].destroy();
            bullets[n].destroy();
            score += 10;
        } 
        }
        for (var m = 0; m < shields.length; m++) {
            if (bullets[n].hits(shields[m])) {
                bullets[n].destroy();
                shields[m].destroy();
            }
        }
        for (var m = 0; m < bullets.length; m++) {
            if (bullets[n].hits(bullets[m]) && bullets[n] != bullets[m]) {
                bullets[n].destroy();
                bullets[m].destroy();
            }
        }
        
    }

    //Shield
    for (var n = 0; n < shields.length; n++) {
        shields[n].show();
    }
    

    //Beweegt ruimteschip

    if (frameCount % (fps / count) == 0) {
        nummer++;
        if (nummer == aantalBeeldjes) { nummer = 1; }
    }

    ship.show(nummer);
    ship.move();

    var edge = false;


    //Beweegt vijanden
    let a = Math.floor(Math.random()*(enemies.length));
    for (var n = 0; n < enemies.length; n++) {
        enemies[n].show();
        enemies[n].move();
        if (cooldownCounter2 == 2) {
            var bullet = new Bullet(enemies[a].x, enemies[a].y, 'enemy');
            bullets.push(bullet);
            cooldownCounter2 = 0;
        }
    
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
            enemy_hit.setVolume(slider.value());
            enemy_hit.play();
        }
    }

    for (var n = 0; n < shields.length; n++) {
        if (shields[n].toDelete) {
            shields.splice(n, 1);
        }
    }

    //Onder tijd
    oldTime = currentTime;

    //toont aantal levens
    for (var n = 0; n < ship.lives; n++) {
        var y = height-150;
        var x = n*80 + 20;
        ship.create(x, y);
    }

    //toont score
    fill('white');
    text("Score: " + score,50, 30);

    if (ship.lives == 0 ) {
        muziek.stop();
        gameover.setVolume(slider.value());
            gameover.play();
        window.location.href = "loss.html";
        noLoop();
    }
    else if (enemies.length == 0) {
        muziek.stop();
        victory.setVolume(slider.value());
            victory.play();

        window.location.href = "win.html";
        noLoop();
    }
    else if (enemies[enemies.length-1].y >= shieldHeight) {
        muziek.stop();
        gameover.setVolume(slider.value());
            gameover.play();
        window.location.href = "loss.html";
        noLoop();
    }

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
        var bullet = new Bullet(ship.x, ship.y, 'ship');
        bullets.push(bullet);
        cooldownCounter = 0;
        schietgeluid.play();
    }

    if (keyCode === RIGHT_ARROW) {
        ship.setDir(1);
    } else if (keyCode === LEFT_ARROW) {
        ship.setDir(-1);
    }
    }
}