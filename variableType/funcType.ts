
const addvalue = (a:string,b:string):string => {

    const aValue:string = a.trim();
    const bValue:string = b.trim().toUpperCase();

    const newValue:string = aValue + bValue;

    return newValue;

}

//  const newValueReturn:string  = addvalue('city','nagpur');

//  console.log('newValueReturn', newValueReturn);



//complexxxxxxxxx  fun

type userType = {
    email: string,
    name: string
}

type addUserReturnType = {
    email: string;
    name: string;
    id: number;
    date: any;
}

const addNewuser = (newUser: userType):addUserReturnType => {

    const id :number= Math.random();
    const newDate:any = new Date();


    return{

        name : newUser.name,
        email: newUser.email,
        id: id,
        date: newDate

    }
};

const userObj:userType = {
 
    email: 'sr@y.com',
    name: 'arc'
}

const newUser : addUserReturnType = addNewuser(userObj);

console.log('newUser',newUser)




// printUserUpperCase fun

const printUserUpperCase = (name:string):void => {

    console.log(name.toUpperCase())

};

printUserUpperCase('vigo')

