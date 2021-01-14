let s; 
let gitter = 20;
let mad;
let poisonArray = [];
// Angiv mængden af Poison på mappet
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
    createCanvas(600, 600);
    s = new Slange();
    frameRate(10); 
    madLokation();

    // Hvis Poison er slået til, så set Poison lokation for mængden angivet
    if (options.poison === true) {
        poisonLokation(poisonAmount)
    }
}

function madLokation() {
    const gitterLaengde = floor(width / gitter);
    const gitterBredde = floor(height / gitter);
    mad = createVector(floor(random(gitterLaengde)), floor(random(gitterBredde)));
    mad.mult(gitter);
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
    background(110); 
    fill(col); 
    s.update();
    s.show();
    s.doed();

    // Sikrer at posion bliver flyttet rundt efter spiller har spist
    if (s.eat(mad)) {
        madLokation();
        poisonLokation(poisonAmount)
    }

    fill(255, 0, 100); 
    rect(mad.x, mad.y, gitter, gitter);

    // Tjekker om Poison er slÃ¥et til og sÃ¸rger for at draw hver eneste Poison brik.
    if (options.poison === true) {
        fill(128,0,128)
        for (let i = 0; i < poisonArray.length; i++) {
            rect(poisonArray[i][0], poisonArray[i][1], gitter, gitter)
        }
    }
}

function Slange() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.hale = [];

    this.dir = function (x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    this.eat = function (pos) {
        const d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
            this.total++;
            return true;
        } else {
            return false;
        }
    }

    this.doed = function () {
        for (let i = 0; i < this.hale.length; i++) {
            let pos = this.hale[i];
            let d = dist(this.x, this.y, pos.x, pos.y);

            let poisonRamt = false
            // Tjekker om spilleren rammer en af poison brikkene.
            if (options.poison === true) {
                for (let j = 0; j < poisonArray.length; j++) {
                    if (pos.x === poisonArray[j][0] && pos.y === poisonArray[j][1]) {
                        poisonRamt = true;
                        console.log('Poison!')
                        poisonArray = [];
                    }
                }
            }

            // Tjekker om vi enten rammer os selv, vÃ¦ggen eller en Poison
            if (d < 1 || poisonRamt === true) {
                console.log('Starter Forfra')
                this.total = 0;
                this.hale = [];
            }
        }
    }

    this.update = () => {
        if (this.total === this.hale.length) {
            for (let i = 0; i < this.hale.length - 1; i++) {
                this.hale[i] = this.hale[i + 1];
            }
        }
        this.hale[this.total - 1] = createVector(this.x, this.y);

        this.x = this.x + this.xspeed * gitter;
        this.y = this.y + this.yspeed * gitter;

        //Constrainer Snake, sÃ¥ den ikke forlader canvas eller "gitter".
        this.x = constrain(this.x, 0, width - gitter);
        this.y = constrain(this.y, 0, height - gitter);
    }

    this.show = function () {
        fill(255);
        for (let i = 0; i < this.hale.length; i++) {
            rect(this.hale[i].x, this.hale[i].y, gitter, gitter);
        }
        rect(this.x, this.y, gitter, gitter);
    }

    // TilfÃ¸jet en switch case keyhandler der gÃ¸r brug af "W S A D" Mit keyboard ville Ã¥benbart ikke gÃ¸re brug af piletaster...
    function keyHandler(event) {
        switch (event.keyCode) {
            case 119: s.dir(0, -1); break;
            case 115: s.dir(0, 1); break;
            case 97: s.dir(-1, 0); break;
            case 100: s.dir(1, 0); break;
        }
    }
    document.addEventListener('keypress', keyHandler)
}