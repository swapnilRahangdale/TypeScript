
const checkType =() =>{

type STATUSADD ='status-add';

const STATUSSUB: 'status-sub' = 'status-sub';

let status : 'add'| 'sub' | 'div' | 'mul' | STATUSADD = 'add';

status = 'sub';

status = 'div';

status = 'mul';

status = 'status-add';

let string1 = 'string 1';

console.log('status', status, typeof status);

console.log('string1',string1, typeof string1);



// status = 'perc'      //give type error

}

checkType()