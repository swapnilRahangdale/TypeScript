console.log("this is a ts file");
console.log("this is a ts file2");

const fun1 = () => {

    const a:number = 25;

    

    const b :number = 25;

    const add:number = a + b;

    console.log(add);

    return add;

}

   const returnAdd:number = fun1();

   console.log('returnAdd',returnAdd);


// const addFun = (a:number,b:string) => a+parseInt(b)

// const addFunReturn :string = addFun(1,'8').toString();

// console.log(addFunReturn);
