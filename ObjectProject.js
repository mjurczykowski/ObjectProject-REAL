

let Circle = {
    radius: 5,

    circumference: function(){
        let c = 2*this.radius * Math.pi;
        return c;
    },

    area: function(){
        let a = this.radius * this.radius * Math.pi;
        return a;
    }
}

let Rectangle = {
    length: 2,
    width: 4,

    perimeter: function(){
        let p = 2 * this.length + 2 * this.width;
        return p;
    },

    area: function(){
        let a = this.length * this.width;
        return a;
    }

}

let Square = {
    sideLength: 8,

    perimeter: function(){
        let p = 4*this.sideLength;
        return p;
    },

    area: function(){
        let a = this.sideLength * 2;
        return a;
    }
}

//Dont forget about box and sphere

let Sphere = {
    radius: 7,

    volume: function(){
        let v = 4/3 * Math.pi * this.radius * this.radius * this.radius;
        return v;
    },

    surfaceArea: function(){
        let s = 4 * Math.pi * this.radius * this.radius;
        return s;
    }
}


let Box = {
    length: 4,
    width: 3,
    height: 2,

    volume: function(){
        let v = this.length * this.width * this.height;
        return v;
    },

    surfaceArea: function(){
        let s = 2*(this.length * this.width) + 2*(this.length * this.height) + 2*(this.width * this.height);
        return s;
    }

}




//------------------------------------------------
//copy paste test code when you finish under here
