
// // -- observable 
// var EventEmitter = require('events').EventEmitter;
// var util = require('util');


// // function helloEvents() {
// //     var eventEmitter = new EventEmitter();
// //     setTimeout(function() {
// //       eventEmitter.emit('hello', 'world');
// //     }, 100);
// //     return eventEmitter;
// //   }


// //   function helloCallback(callback) {
// //     setTimeout(function() {
// //       callback('hello', 'world');
// //     }, 100);
// //   }

// var eventEmitter = new EventEmitter();

// function SyncEmit() {
//     // setTimeout(function() {
//         eventEmitter.emit('ready');
//         console.log('Object');
//     // }, 100);
// }


// util.inherits(SyncEmit, EventEmitter);
  
// var syncEmit = new SyncEmit();
// syncEmit.on('ready', function() {
//     console.log('Object is ready to be used');
// });

// SyncEmit();


// // ----------------
// // Factory 


// class IceCreamFactory {
//     constructor() {
//       this.createIcecream = function(flavor) {
//         let iceCream;
//         if (flavor === 'chocolate'){
//             iceCream = new Chocolate();
//         }  
//         else if (flavor === 'mint'){
//             iceCream = new Mint();
//         } 
//         else if (flavor === 'strawberry'){
//             iceCream = new Strawberry();
//         }
//         return iceCream;
//       };
//     }
//   }
  
//   class Chocolate {
//     constructor() {
//       this.icecreamFlavor = "chocolate";
//       this.message = function() {
//         return `You chose the ${this.icecreamFlavor} flavor.`;
//       };
//     }
//   }
  
//   class Mint {
//     constructor() {
//       this.icecreamFlavor = "mint";
//       this.message = function() {
//         return `You chose the ${this.icecreamFlavor} flavor.`;
//       };
//     }
//   }
  
//   class Strawberry{
//     constructor() {
//       this.icecreamFlavor = "strawberry";
//       this.message = function() {
//         return `You chose the ${this.icecreamFlavor} flavor.`;
//       };
//     }
//   }
  
//   // creating objects
//   const iceCreamfactory = new IceCreamFactory();
  
//   const chocolate = iceCreamfactory.createIcecream('chocolate');
//   const mint = iceCreamfactory.createIcecream('mint');
//   const strawberry = iceCreamfactory.createIcecream('strawberry');
  
//   console.log(chocolate.message()); 
//   console.log(mint.message()); 
//   console.log(strawberry.message()); 


  // --
  var singleTon = (function(){
    var instance;

    function createInstance(type) {
        instance = new Object("I am ");
        console.log("instance type"+type)
        return instance;
    }
    
    return {
        getInstance : function (type) {
            if(!instance) {
                return createInstance(type);
            } else {
                return instance;
            }
        }
    };
  })();
let dbInstance1 = singleTon.getInstance("mongoDB");
let dbInstance2 = singleTon.getInstance("mySQL");
console.log(dbInstance1)
console.log(dbInstance2)
console.log(dbInstance1 === dbInstance2)

