let s; 
var gitter = 20;
var mad;
var mur1;
var mur2;
var mur3;
var mur4;
var mur5;

const col = [220, 110, 0];


function setup() {
    createCanvas(600, 600); 
    s = new Slange();
    frameRate(10); 
    madLokation(); 
    wallLokation();
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





function draw() {
    background(110); 
    fill(col); 
    s.update();
    s.show(); 
    s.doed();

    if (s.eat(mad)) {
        madLokation();
        wallLokation();
    }



    fill(255, 0, 100); 
    rect(mad.x, mad.y, gitter, gitter); 

    fill(155, 155, 155);
    rect(mur1.x, mur1.y, gitter, gitter);
    rect(mur2.x, mur2.y, gitter, gitter);
    rect(mur3.x, mur3.y, gitter, gitter);
    rect(mur4.x, mur4.y, gitter, gitter);
    rect(mur5.x, mur5.y, gitter, gitter);




    

    
    

    

    
}

function Slange() {
    this.x = 0; 
    this.y = 0; 
    this.xspeed = 1; 
    this.yspeed = 0; 
    this.total = 0, 
    this.hale = []; 

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
                console.log('Starter Forfra')  
                alert("Du er død!   " + "   Du har spist " + this.total + " frugt(er)");
                location.reload(); 
                this.total = 0;
                this.hale = [];
            }
            var m1 = dist(this.x, this.y, mur1.x, mur1.y);
            if (m1 < 1) {
                console.log('Starter Forfra')  
                alert("Du er død!   " + "   Du har spist " + this.total + " frugt(er)");
                location.reload(); 
                this.total = 0;
                this.hale = [];
            }
            var m2 = dist(this.x, this.y, mur2.x, mur2.y);
            if (m2 < 1) {
                console.log('Starter Forfra')  
                alert("Du er død!   " + "   Du har spist " + this.total + " frugt(er)");
                location.reload(); 
                this.total = 0;
                this.hale = [];
            }
            var m3 = dist(this.x, this.y, mur3.x, mur3.y);
            if (m3 < 1) {
                console.log('Starter Forfra')  
                alert("Du er død!   " + "   Du har spist " + this.total + " frugt(er)");
                location.reload(); 
                this.total = 0;
                this.hale = [];
            }
            var m4 = dist(this.x, this.y, mur4.x, mur4.y);
            if (m4 < 1) {
                console.log('Starter Forfra')  
                alert("Du er død!   " + "   Du har spist " + this.total + " frugt(er)");
                location.reload(); 
                this.total = 0;
                this.hale = [];
            }
            var m5 = dist(this.x, this.y, mur5.x, mur5.y);
            if (m5 < 1) {
                console.log('Starter Forfra')  
                alert("Du er død!   " + "   Du har spist " + this.total + " frugt(er)");
                location.reload(); 
                this.total = 0;
                this.hale = [];
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
}
