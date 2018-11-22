function Person(prs) {
    this.name = prs.name;
    this.color = prs.color;
    this.greet = () => {
        const { name, color } = this;
        console.log("Hello I'm " + name + " and my color is " + color);
    }
}

module.exports = Person;
