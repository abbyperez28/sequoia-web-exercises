function showMultiplicationTable(num) {

    for (i = 1; i <=10; i += 1);
        var i = 1;
    while (i <= 10) {
        console.log(num + "x" + i + "=" + parseInt(num*i));
        i += 1;
    }
    return "nothing to return";
    }

console.log(showMultiplicationTable(9));



function showMultiplicationTable(num) {
    for (i = 1; i <=10; i +=1) {
        console.log(num + "x" + i + "=" + parseInt(num*i));
    }
    return "nothing to return";
}

console.log(showMultiplicationTable(9));