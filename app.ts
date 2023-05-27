console.log("this is a ts file");
console.log("this is a ts file2");

const fun1 = () => {

    let a:number = 12;

    //a = '13';

    const b :string = '25';

    const add:string = a + b;

    console.log(add);

    return add;

}

//    const returnAdd:string = fun1();

//    console.log('returnAdd',returnAdd);


const addFun = (a:number,b:string) => a+parseInt(b)

const addFunReturn :string = addFun(1,'8').toString();

console.log(addFunReturn);
