var singleTon = (function(){
    var instance;

    function createInstance(type) {
        instance = new Object("createInstance");
        console.log("instance type::"+type)
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

