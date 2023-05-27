console.log("this is a ts file");
console.log("this is a ts file2");
var fun1 = function () {
    var a = 25;
    var b = 25;
    var add = a + b;
    console.log(add);
    return add;
};
//    const returnAdd:number = fun1();
//    console.log('returnAdd',returnAdd);
var addFun = function (a, b) { return a + b; };
var addFunReturn = addFun(1, '12');
console.log(addFunReturn);
