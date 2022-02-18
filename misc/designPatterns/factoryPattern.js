class IceCreamFactory {
    constructor() {
        
    }
    createIcecream(flavor) {
        let iceCream;
        if (flavor === 'chocolate'){
            iceCream = new Chocolate();
        }  
        else if (flavor === 'mint'){
            iceCream = new Mint();
        } 
        else if (flavor === 'strawberry'){
            iceCream = new Strawberry();
        }
        return iceCream;
      }
  }
/**
  interface iceCreameInterface {
    message();
  }
*/

  class Chocolate {     // In case of java this will implements interface iceCreameInterface. 
                        // Becasue object.message has to exsts while calling 
    constructor() {
      this.icecreamFlavor = "chocolate";
    }
    message() {
        return `You chose the ${this.icecreamFlavor} flavor.`;
    }
  }
  
  class Mint {    // In case of java this will implements interface iceCreameInterface 
    constructor() {
      this.icecreamFlavor = "mint";
    }
    message() {
        return `You chose the ${this.icecreamFlavor} flavor.`;
      }
  }
  
  class Strawberry{   // In case of java this will implements interface iceCreameInterface 
    constructor() {
      this.icecreamFlavor = "strawberry";
    }
    message() {
        return `You chose the ${this.icecreamFlavor} flavor.`;
    }
  }
  
  // creating objects
  const iceCreamfactory = new IceCreamFactory();
  
  const chocolate = iceCreamfactory.createIcecream('chocolate');
  const mint = iceCreamfactory.createIcecream('mint');
  const strawberry = iceCreamfactory.createIcecream('strawberry');
  
  console.log(chocolate.message()); 
  console.log(mint.message()); 
  console.log(strawberry.message()); 

