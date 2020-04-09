var ship;
var aantalEnemiesPerRij = 11;
var aantalRijen = 5;
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
var verloren;
var score = 0;
var shieldHeight = 0.7*innerHeight;
var pauzeIm;

var bullets = [];
var enemies = [];
var shields = [];
var ruimtewezen = [];
var ruimtemonster = [];
var shieldA = [];
var bubble = [];
var achtergrond = [];

var aantalBeeldjesRuimtewezen = 7;
var aantalBeeldjesRuimtemonster = 9;
var aantalBeeldjesShield = 6;
var aantalBeeldjesBubble = 5;
var aantalBeeldjesAchtergrond = 23;
var nieuw_beeldje;
var nummerRuimtewezen = 1;
var nummerRuimtemonster = 1;
var nummerShield = 1;
var nummerBubble = 1;
var nummerAchtergrond = 1;

var count = 4;
var count2 = 6;
var fps = 60;
var pauzescherm = false;
var soundtrack;

function preload() {
    schietgeluid = loadSound("music/schietgeluid.mp3");
    enemy_hit = loadSound("music/enemy_hit.mp3");
    muziek = loadSound("music/muziek.mp3");
    victory = loadSound("music/win.mp3");
    verloren = loadSound("music/verloren.mp3");
    soundtrack = loadSound("music/soundtrack.wav");
    font = loadFont("PressStart2P-Regular.ttf");

    for (var n = 1; n <= aantalBeeldjesRuimtewezen; n++) {
        nieuw_beeldje = loadImage("player/Player"+n+".png");
        ruimtewezen.push(nieuw_beeldje);
    }

    for (var n = 1; n <= aantalBeeldjesRuimtemonster; n++) {
        nieuw_beeldje = loadImage("enemy/Enemy0"+n+".png");
        ruimtemonster.push(nieuw_beeldje);
    }

    for (var n = 1; n <= aantalBeeldjesShield; n++) {
        nieuw_beeldje = loadImage("shield/Shield"+n+".png");
        shieldA.push(nieuw_beeldje);
    }

    for (var n = 1; n <= aantalBeeldjesBubble; n++) {
        nieuw_beeldje = loadImage("bubble/Bubble"+n+".png");
        bubble.push(nieuw_beeldje);
    }

    for (var n = 1; n <= aantalBeeldjesAchtergrond; n++) {
        nieuw_beeldje = loadImage("achtergrond/Bg"+n+".png");
        achtergrond.push(nieuw_beeldje);
    }

}


function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(fps);
  textFont(font);
  textAlign(CENTER, CENTER);
  ship = new Ship(lMarge, rMarge, ruimtewezen);
  for (var n = 0; n < aantalEnemiesPerRij*aantalRijen; n++) {
    if (n == 10 || n == 21 || n == 32 || n == 43) {    
        enemies[n] = new Enemy(xEnemy*50+(lMarge*width), yEnemy, ruimtemonster);
        xEnemy = 0;
        yEnemy += 50;
    } 
    else {
        enemies[n] = new Enemy(xEnemy*50+(lMarge*width), yEnemy, ruimtemonster);
        xEnemy += 1.3;
    }

    button = createImg("Pauze-2.png");
    button.position(50, 35);
    button.mousePressed(pauze);
    
  }
  for (var n = 0; n < 3; n++) {
    var shield = new Shield(0.35+n*0.15, shieldHeight, shieldA);
    shields.push(shield);
  }

  slider = createSlider(0, 1, 0.5, 0.01);
  soundtrack.loop();

}

function draw() {
    if(pauzescherm) {
        background(achtergrond[nummerAchtergrond]);
        nummerAchtergrond = updateNummer(count2, nummerAchtergrond, aantalBeeldjesAchtergrond);
        text('Het spel is gepauzeerd', innerWidth/2, innerHeight/2);
        soundtrack.setVolume(slider.value());
    }
    else if (ship.lives == 0) {
        background(achtergrond[nummerAchtergrond]);
        nummerAchtergrond = updateNummer(count2, nummerAchtergrond, aantalBeeldjesAchtergrond);
        text('Verloren', innerWidth/2, innerHeight/2 - 10);
        text('Score: ' + score, innerWidth/2, innerHeight/2+10);
        muziek.stop();
<<<<<<< HEAD
        gameover.setVolume(slider.value());
        gameover.play();
        playButton();

=======
        verloren.setVolume(slider.value());
        verloren.play();
        button = createImg("Play-3.png");
        button.position(innerWidth/2-22.5, innerHeight/2+40);
        button.mousePressed(play);
>>>>>>> 2bd47cf588d3764672bfcde3581ca97981c03f1d
    }
    else if (enemies.length == 0) {
        background(achtergrond[nummerAchtergrond]);
        nummerAchtergrond = updateNummer(count2, nummerAchtergrond, aantalBeeldjesAchtergrond);
        text('Gewonnen', innerWidth/2, innerHeight/2-10);
        text('Score: ' + score, innerWidth/2, innerHeight/2+10);
        muziek.stop();
        victory.setVolume(slider.value());
        victory.play();
        playButton();
    }
    else if (enemies[enemies.length-1].y >= shieldHeight) {
        background(achtergrond[nummerAchtergrond]);
        text('Verloren', innerWidth/2, innerHeight/2-10);
        text('Score: ' + score, innerWidth/2, innerHeight/2+10);
        muziek.stop();
<<<<<<< HEAD
        gameover.setVolume(slider.value());
        gameover.play();
        playButton();
=======
        verloren.setVolume(slider.value());
        verloren.play();
        button = createImg("Play-3.png" );
        button.position(innerWidth/2-22.5, innerHeight/2+30);
        button.mousePressed(play);
>>>>>>> 2bd47cf588d3764672bfcde3581ca97981c03f1d

    }
    else {
        background(achtergrond[nummerAchtergrond]);

        schietgeluid.setVolume(slider.value());
        soundtrack.setVolume(slider.value());
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
            bullets[n].show(nummerBubble);
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
        
        nummerBubble = updateNummer(count, nummerBubble, aantalBeeldjesBubble);
        nummerRuimtemonster = updateNummer(count, nummerRuimtemonster, aantalBeeldjesRuimtemonster);
        nummerRuimtewezen = updateNummer(count, nummerRuimtewezen, aantalBeeldjesRuimtewezen);
        nummerAchtergrond = updateNummer(count2, nummerAchtergrond, aantalBeeldjesAchtergrond);
   
        ship.show(nummerRuimtewezen);
        ship.move();

        var edge = false;

        //Beweegt vijanden
        let a = Math.floor(Math.random()*(enemies.length));
        for (var n = 0; n < enemies.length; n++) {
            enemies[n].show(nummerRuimtemonster);
            enemies[n].move();
            if (cooldownCounter2 == 2) {
                var bullet = new Bullet(enemies[a].x, enemies[a].y, 'enemy', bubble);
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
        text("Score: " + score, 150, 50);

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
            var bullet = new Bullet(ship.x, ship.y, 'ship', bubble);
            bullets.push(bullet);
            cooldownCounter = 0;
            schietgeluid.play();
        }

        if (keyCode === RIGHT_ARROW) {
            ship.setDir(1);
        } else if (keyCode === LEFT_ARROW) {
            ship.setDir(-1);
        }


        if (keyCode === 27) {
            pauzescherm = !pauzescherm;
        }
    }

function pauze() {
    pauzescherm = !pauzescherm;
}

function play() { 
    window.location.href = "index.html";
}

function updateNummer(countX, nummer, aantalBeeldjes) {
    if (frameCount % (fps / countX) == 0) {
        nummer++;
        if (nummer == aantalBeeldjes) { nummer = 1; }
    }
    return nummer;
}

function playButton() {
    button = createImg("Play-3.png");
    button.position(innerWidth/2-22.5, innerHeight/2+30);
    button.mousePressed(play);
}