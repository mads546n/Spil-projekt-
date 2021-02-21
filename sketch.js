let s; 
var gitter = 20; 
var mad;
var mode; //Vurderer om spillet er startet eller ej.
var mur1;
var mur2;
var mur3;
var mur4;
var mur5;
let color;
let poisonArray = [];
//Angiv mængden af Poison på mappet
let poisonAmount = 3
let options = {
    bg: "#888",
  scolor: "lightgreen",
  acolor: "red",
  ocolor: "#212121",
  wall: true,
  poison: true,
  powerup: true,
  map: 2,
  dark: false
}

const col = [220, 110, 0]; 

function setup() {
    mode = 0; //Spillet er ikke startet.
    createCanvas(600, 600); 
    s = new Slange(); 
    frameRate(10);  

     // Hvis Poison er slået til, så set Poison lokation for mængden angivet
     if (options.poison === true) {
        poisonLokation(poisonAmount)
    }
}

function madLokation() {
    var gitterLaengde = floor(width/gitter);
    var gitterBredde = floor(height/gitter); 
    mad = createVector(floor(random(gitterLaengde)), floor(random(gitterBredde)));
    mad.mult(gitter);
}

function wallLokation() {
    var murGitterLaengde = floor(width/gitter);
    var murGitterBredde = floor(height/gitter); 
    mur1 = createVector(floor(random(murGitterLaengde)), floor(random(murGitterBredde)));
    mur1.mult(gitter);
    mur2 = createVector(floor(random(murGitterLaengde)), floor(random(murGitterBredde)));
    mur2.mult(gitter);
    mur3 = createVector(floor(random(murGitterLaengde)), floor(random(murGitterBredde)));
    mur3.mult(gitter);
    mur4 = createVector(floor(random(murGitterLaengde)), floor(random(murGitterBredde)));
    mur4.mult(gitter);
    mur5 = createVector(floor(random(murGitterLaengde)), floor(random(murGitterBredde)));
    mur5.mult(gitter);
}

function colorLokation() {
    const gitterLaengde = floor(width / gitter);
    const gitterBredde = floor(height / gitter);
    color = createVector(floor(random(gitterLaengde)), floor(random(gitterBredde)));
    color.mult(gitter);
}

// Det samme som for oven men for poison.
function poisonLokation(number) {
    poisonArray = [];
    for (let i = 0; i < number; i++) {
        let vx = Math.floor(Math.random() * canvas.width / gitter) * gitter;
        let vy = Math.floor(Math.random() * canvas.height / gitter) * gitter;
        poisonArray.push([vx, vy]);
    }
}

function draw() {
    clear();
    if (mode == 0) {
        textSize(21); 
        text("Tryk ENTER for at starte spillet", 250, 300);  
        //text("Du har spist " + highScore + " frugt(er)", 300, 350); 
    }
    if (mode == 1) {
    background(110); 
    fill(col);
    s.update();
    s.show(); 
    s.doed();  
    s.murDoed(); 

    // Sikrer at poison bliver flyttet rundt efter spiller har spist
    if (s.eat(mad)) {
        madLokation();
        wallLokation();
        poisonLokation(poisonAmount);
        colorLokation();
    }

    fill(255, 0, 100); 
    rect(mad.x, mad.y, gitter, gitter); 

    fill(155, 155, 155);
    rect(mur1.x, mur1.y, gitter, gitter);
    rect(mur2.x, mur2.y, gitter, gitter);
    rect(mur3.x, mur3.y, gitter, gitter);
    rect(mur4.x, mur4.y, gitter, gitter);
    rect(mur5.x, mur5.y, gitter, gitter);

    fill(110, 250, 10); 
    rect(color.x, color.y, gitter, gitter);

     // Tjekker om Poison er slået til og sørger for at draw hver eneste Poison brik.
     if (options.poison === true) {
        fill(128,0,128)
        for (let i = 0; i < poisonArray.length; i++) {
            rect(poisonArray[i][0], poisonArray[i][1], gitter, gitter)
        }
    }

        if (s.col(color)) {
        colorLokation();
        }
    }
}

function Slange() {
    this.x = 0; 
    this.y = 0; 
    this.xspeed = 1; 
    this.yspeed = 0; 
    this.total = 1; 
    this.hale = [];
    this.hale[this.total-1] = createVector(this.x, this.y);
    this.farve = [220, 110, 116];  

    this.dir = function(x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    this.eat = function(pos) {
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
            this.total++;
            return true; 
        } else { 
          return false; 
        }
    }

    this.col = function (pos) {
        const d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
            this.total++
            let r = Math.floor(Math.random()*(255-0+1)+0), b = Math.floor(Math.random()*(255-0+1)+0), g = Math.floor(Math.random()*(255-0+1)+0)
            this.farve = [r, b, g]
            return true;
        } else {
            return false;
        }
    }

    this.doed = function() { 
        for (var i = 0; i < this.hale.length; i++) {
            var pos = this.hale[i];
            var d = dist(this.x, this.y, pos.x, pos.y);

            let poisonRamt = false
          // Tjekker om spilleren rammer en af poison brikkerne.
            if (options.poison === true) {
                for (let j = 0; j < poisonArray.length; j++) {
                    if (pos.x === poisonArray[j][0] && pos.y === poisonArray[j][1]) {
                        poisonRamt = true;
                        console.log("Poison!")
                        poisonArray = [];
                    }
                }
            }

            // Tjekker om vi enten rammer os selv, væggen eller en poison
            if (d < 1 || poisonRamt === true) {
                console.log('Starter Forfra');    
                //alert("Du er død!   " + "   Du har spist " + this.total + " frugt(er)");
                mode = 3;
                if (mode == 3) {
                    draw = false;  
                    background(275);
                    fill(col);
                    textSize(25); 
                    text("Du er død!", 300, 300);
                    text("Du har spist " + (this.total-1) + " frugter", 250, 350);
                    text("Tryk BACKSPACE for at genstarte spillet", 150, 450); 
                    mad.style.display = "none"; 
            }
        }
    }
}

    this.murDoed = function() {
        for (var m1 = 0; m1 < this.hale.length; m1++) {
            var pos1 = this.hale[m1];
            var m1 = dist(this.x, this.y, mur1.x, mur1.y);
            if (m1 < 1) {
                mode = 3;
                if (mode == 3) {
                    draw = false;  
                    background(275);
                    fill(col);
                    textSize(25); 
                    text("Du er død!", 300, 300);
                    text("Du har spist " + (this.total-1) + " frugter", 250, 350);
                    text("Tryk BACKSPACE for at genstarte spillet", 150, 450); 
                    mad.style.display = "none"; 
                }
            }
        }
        for (var m2 = 0; m2 < this.hale.length; m2++) {
            var pos2 = this.hale[m2];
            var m2 = dist(this.x, this.y, mur2.x, mur2.y);
            if (m2 < 1) {
                mode = 3;
                if (mode == 3) {
                    draw = false;  
                    background(275);
                    fill(col);
                    textSize(25); 
                    text("Du er død!", 300, 300);
                    text("Du har spist " + (this.total-1) + " frugter", 250, 350);
                    text("Tryk BACKSPACE for at genstarte spillet", 150, 450); 
                    mad.style.display = "none"; 
                }
            }
        }
        for (var m3 = 0; m3 < this.hale.length; m3++) {
            var pos3 = this.hale[m3];
            var m3 = dist(this.x, this.y, mur3.x, mur3.y);
            if (m3 < 1) {
                mode = 3;
                if (mode == 3) {
                    draw = false;  
                    background(275);
                    fill(col);
                    textSize(25); 
                    text("Du er død!", 300, 300);
                    text("Du har spist " + (this.total-1) + " frugter", 250, 350);
                    text("Tryk BACKSPACE for at genstarte spillet", 150, 450); 
                    mad.style.display = "none"; 
                }
            }
        }
        for (var m4 = 0; m4 < this.hale.length; m4++) {
            var pos4 = this.hale[m4];
            var m4 = dist(this.x, this.y, mur4.x, mur4.y);
            if (m4 < 1) {
                mode = 3;
                if (mode == 3) {
                    draw = false;  
                    background(275);
                    fill(col);
                    textSize(25); 
                    text("Du er død!", 300, 300);
                    text("Du har spist " + (this.total-1) + " frugter", 250, 350);
                    text("Tryk BACKSPACE for at genstarte spillet", 150, 450); 
                    mad.style.display = "none"; 
                }
            }
        }
        for (var m5 = 0; m5 < this.hale.length; m5++) {
            var pos5 = this.hale[m5];
            var m5 = dist(this.x, this.y, mur5.x, mur5.y);
            if (m5 < 1) {
                mode = 3;
                if (mode == 3) {
                    draw = false;  
                    background(275);
                    fill(col);
                    textSize(25); 
                    text("Du er død!", 300, 300);
                    text("Du har spist " + (this.total-1) + " frugter", 250, 350);
                    text("Tryk BACKSPACE for at genstarte spillet", 150, 450); 
                    mad.style.display = "none"; 
                }
            }
        }
    }

    this.update = function() {
        if (this.total === this.hale.length) {
            for (var i = 0; i < this.hale.length-1; i++) {
                this.hale[i] = this.hale[i+1];
            }
        }
        this.hale[this.total-1] = createVector(this.x, this.y); 

        this.x = this.x + this.xspeed*gitter; 
        this.y = this.y + this.yspeed*gitter;

        //Constrainer Snake, så den ikke forlader canvas eller "gitter".
        this.x = constrain(this.x, 0, width-gitter);
        this.y = constrain(this.y, 0, height-gitter);
    }

    this.show = function() {
        fill(this.farve); 
        for (var i = 0; i < this.hale.length; i++) {
            rect(this.hale[i].x, this.hale[i].y, gitter, gitter); 
        } 
        rect(this.x, this.y, gitter, gitter); 
    }
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        s.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        s.dir(0, 1); 
    } else if (keyCode === RIGHT_ARROW) {
        s.dir(1, 0);
    }    else if (keyCode === LEFT_ARROW) {
        s.dir(-1, 0);  
    } 
    if (keyCode === ENTER) {
        mode=1; 
        madLokation();
        wallLokation();
        colorLokation();
    }
    if (keyCode === BACKSPACE) { 
        location.reload();  
    }
}
