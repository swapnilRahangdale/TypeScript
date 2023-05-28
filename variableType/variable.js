var checkType = function () {
    var STATUSSUB = 'status-sub';
    var status = 'add';
    status = 'sub';
    status = 'div';
    status = 'mul';
    status = 'status-add';
    var string1 = 'string 1';
    console.log('status', status, typeof status);
    console.log('string1', string1, typeof string1);
    // status = 'perc'      //give type error
};
checkType();
