/**
class service {
    constructor(connectionStr, sName){
        this.connectionStr = connectionStr;
        this.serviceName = sName;
    }
    getConnectionObj(){
        return this.connectionStr;
    }
}


// approach1 -> dependency injection can be used here 
// 1. -> Unit test cases
// 2. -> Changes in service constructor result in changes in other classes like parent 
class parent {
    constructor(connectionStr, sName){
        this.name = name;
        this.connectionStr = new service(connectionStr, sName);
    }
    getDataFromDB(){
        //
        let connectionObj = this.connectionStr.getConnectionObj();
    }
}
 */
// ------------------------------------------------------------------------------------------------------------------

// class parent {
//     constructor(){
        
//     }
//     // execute() {
//     //     console.log("Hi parent")
//     // }
// }

// class child1 extends parent {
//     constructor(){
//         super();
//     }
//     // execute() {
//     //     console.log("Hi child1")
//     // }
// }
// class child2 extends parent {
//     constructor(){
//         super();
//     }
//     execute() {
//         console.log("Hi child2")
//     }
// }

// class subChild12 extends child1, child2 {
//     constructor(){
//         super();
//     }
// }

// let subChild1Obj = new subChild12();
// subChild1Obj.execute();

// ------------------------------------------------------------------------------------------------------------------
// type script 
// // @ts-check

function exp(arr) {
    if(aaa.length) {
        return true;
    }
    return false;
}