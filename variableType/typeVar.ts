
const typeVar = () =>{

// premitive Type 


const stringtype: string = 'name';
const numbType: number = 1;
const booleanType: boolean =  true ;
const nullType : null = null;
const undefineType : undefined = undefined;


//complex type 

const emptyArr : [] = [] ;

const stringArr : string[] = ['name'] ;

const numArr : number[] = [1,2,3,4,5] ;

const stringAndNumberArr: (string | number) [] = ['name', 25, 'city', 44,];

type sub = 'sub';

type add = 'add';

type mul = 'mul';

type div = 'divi';

const arrCustom: (sub | add | mul | div)[] = ['sub', 'add', 'mul', 'divi']

// not do this 

// let obj1 : {} = {};

// obj1 = 'string';

// obj1 = 12345


//do This 

let objectUser :
{
    name: string,
    age: number,
    city?: string,        //? de skte ho ya feer nhi bhi de skte
    mob: number|undefined,   //aise define nhi krna best way to define ? mark dedo as above
    statusOFadd: sub | mul | add,
    nullOrString : string |null,
    lastOfString: string
    
    
   
    
} 
={

    name:'swap',
    age : 26,
    mob : undefined,
    statusOFadd: 'mul',
    nullOrString: null,
    lastOfString :'rahangdale'

    

};

//objectUser.test1 = 'test'  //not possible due to type checking



}


typeVar()