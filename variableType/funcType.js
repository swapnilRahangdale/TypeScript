var addvalue = function (a, b) {
    var aValue = a.trim();
    var bValue = b.trim().toUpperCase();
    var newValue = aValue + bValue;
    return newValue;
};
var addNewuser = function (newUser) {
    var id = Math.random();
    var newDate = new Date();
    return {
        name: newUser.name,
        email: newUser.email,
        id: id,
        date: newDate
    };
};
var userObj = {
    email: 'sr@y.com',
    name: 'arc'
};
var newUser = addNewuser(userObj);
console.log('newUser', newUser);
var printUserUpperCase = function (name) {
    console.log(name.toUpperCase());
};
printUserUpperCase('vigo');
