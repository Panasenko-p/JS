class circle {
    constructor(radius) {
        this.radius = radius;
    };
    get funradius(){
        return `${this.radius}`;
    };
    set funradius(funradius){
        const setradius = funradius;
    };
    get diameter (){
        return  `${this.radius*2}`;
    };
    area(){
        let area = Math.PI*this.radius*this.radius;
        console.log(area);
    }
    circle_length() {
        let length = 2*Math.PI*this.radius;
        console.log(length);
    }
};
let namber_r = new circle(5);
console.log(namber_r);
namber_r.area();
namber_r.circle_length();

