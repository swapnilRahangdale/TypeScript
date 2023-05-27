console.log("this is a ts file");
console.log("this is a ts file2");
var fun1 = function () {
    var a = 12;
    //a = '13';
    var b = '25';
    var add = a + b;
    console.log(add);
    return add;
};
//    const returnAdd:string = fun1();
//    console.log('returnAdd',returnAdd);
var addFun = function (a, b) { return a + parseInt(b); };
var addFunReturn = addFun(1, '8').toString();
console.log(addFunReturn);
