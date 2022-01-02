class parent {
    constructor() {
        this.name = null;
        console.log("parent const")
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }

}
class child extends parent{
    constructor() {
        super();
        console.log("child const")
    }
    getName() {
        return "chils "+this.name
    }
}

function main () {
    let childObj = new child();
    childObj.setName("ravi");
    console.log(childObj.getName());
}
main();