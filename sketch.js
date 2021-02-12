let s; 
var gitter = 20; 
var mad;
var mode; //Vurderer om spillet er startet eller ej.

const col = [220, 110, 0]; 

function setup() {
    mode = 0; //Spillet er ikke startet.
    createCanvas(600, 600); 
    s = new Slange(); 
    frameRate(10);  
}

function madLokation() {
    var gitterLaengde = floor(width/gitter);
    var gitterBredde = floor(height/gitter); 
    mad = createVector(floor(random(gitterLaengde)), floor(random(gitterBredde)));
    mad.mult(gitter);
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

    if (s.eat(mad)) {
        madLokation();
    }

    fill(255, 0, 100); 
    rect(mad.x, mad.y, gitter, gitter); 
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

    this.doed = function() { 
        for (var i = 0; i < this.hale.length; i++) {
            var pos = this.hale[i];
            var d = dist(this.x, this.y, pos.x, pos.y);
            if (d < 1) {
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
                //location.reload(); 
                //this.total = 0;
                //this.hale = [];
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
        fill(255); 
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
    }
    if (keyCode === BACKSPACE) { 
        location.reload();  
    }
}