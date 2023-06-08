function Stairs() {
    this.currentStair = 0;
}

Stairs.prototype = new ProtoStairs;

function ProtoStairs() {
    this.up = function() {
        this.currentStair++;
    }
    this.down = function() {
        this.currentStair--;
    }
    this.showStair = function() {
        return this.currentStair;
    }
}


const res = new Stairs();
res.up();
res.up();
res.showStair();
res.down();
res.showStair();
console.log(res);

const res1 = new Stairs();
res1.up();
res1.up();
res1.up();
res1.up();
console.log(res1);