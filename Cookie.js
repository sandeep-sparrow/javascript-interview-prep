class Cookie{
    constructor(color){
        this.color = color;
    }
    getColor(){
        return this.color;
    }
    setColor(color){
        this.color = color;
    }
}

let cookie1 = new Cookie("blue");
let cookie2 = new Cookie("green");

console.log(cookie1.getColor());
console.log(cookie2.getColor());

const details = {age: "30", city: "bangalore"}
const styles = {name: "sandeep", ...details}

console.log(styles);
