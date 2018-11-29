export default class Person {
    constructor(prs) {
        this.name = prs.name;
        this.color = prs.color;
    }
    
    greet () {
        const { name, color } = this;
        console.log("Hi there! I'm " + name + " and my color is " + color);
    }
}
