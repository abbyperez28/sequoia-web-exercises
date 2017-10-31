//**********WHILE LOOP**********
// var i = 0;
//     while(i < 10) {
//         i++;
//         console.log("i = " + i);
//     }


//
//**********DO WHILE**********
// var i = 0;
//     do {
//         i++;
//         console.log("1 = " + i);
//     }while (i<8);


//**********FOR LOOP**********
// var shapes = ['square', 'rectangle', 'circle', 'triangle'];
//
// // loop through the array and log the values
// for (var i = 0; i < shapes.length; i++) {
//     console.log('The shape at index ' + i + ' is: ' + shapes[i]);
// }


//**********FOR EACH LOOP*********
// var shapes = ['square', 'rectangle', 'circle', 'triangle'];
//
// // loop through the array and log the values
// shapes.forEach(function(shape) {
//     console.log('Here is a lovely shape: ' + shape + '.');
// });



// **********ADDING ELEMENTS (TO ARRAYS)**********
//UNSHIFT--> Beginning
//PUSH--> End

// var daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
//
// console.log(daysOfTheWeek);
// // ['Monday', 'Tuesday', 'Wednesday', 'Thursday']
//
// // let's add 'Sunday' to the beginning of the week
// daysOfTheWeek.unshift('Sunday');
//
// console.log(daysOfTheWeek);
// // ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']
//
// // let's add 'Friday' and 'Saturday' to the end of the week
// daysOfTheWeek.push('Friday', 'Saturday');
//
// console.log(daysOfTheWeek);
// // ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']



//**********REMOVING ELEMENTS (FROM ARRAYS)**********
//.pop() --> Remove LAST item
//.shift() --> Remove FIRST item

// var todoList = ['Take out the trash', 'Clean the car', 'Pay the bills'];
//
// console.log('My todo list:');
// console.log(todoList);
// // ['Take out the trash', 'Clean the car', 'Pay the bills']
//
// console.log('Completing the last item: ' + todoList[todoList.length - 1]);
//
// // let's remove the last item
// var removedItem = todoList.pop();
//
// // log what we did
// console.log('Task complete: ' + removedItem);
//
// console.log(todoList);
// // ['Take out the trash', 'Clean the car']
//
// console.log('Completing the first item: ' + todoList[0]);
//
// // let's remove the first item
// var doneItem = todoList.shift();
//
// // log what we did
// console.log('Task complete: ' + doneItem);
//
// console.log(todoList);
// // ['Clean the car']

var array = ['John', 'Paul', 'George', 'Ringo', 'Santana'];
// array[array.length - 2];

