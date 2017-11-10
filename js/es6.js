// /*
//  * Complete the TODO items below
//  */
// const users = [
//   {
//     name: 'zach',
//     email: 'zach@codeup.com',
//     languages: ['javascript', 'bash']
//   },
//   {
//     name: 'ryan',
//     email: 'ryan@codeup.com',
//     languages: ['clojure', 'javascript']
//   },
//   {
//     name: 'luis',
//     email: 'luis@codeup.com',
//     languages: ['java', 'scala', 'php']
//   },
//   {
//     name: 'fernando',
//     email: 'fernando@codeup.com',
//     languages: ['java', 'php', 'sql']
//   },
//   {
//     name: 'justin',
//     email: 'justin@codeup.com',
//     languages: ['html', 'css', 'javascript', 'php']
//   }
// ];
//
//
// // TODO: fill in your name and email and add some programming languages you know
// // to the languages array
// // TODO: replace the `var` keyword with `const`, then try to reassign a variable
// // declared as `const`
//
// // var name = 'abby';
// // var email = 'abbyperez28@gmail.com';
// // var languages = ["html", "css", "javascript"];
//
// const name = "abby";
// const email = "abbyperez28@gmail.com";
// const languages = ["html", "css", "javascript"];
//
// // console.log(users);
//
// // TODO: rewrite the object literal using object property shorthand
// // users.push({
// //   name: name,
// //   email: email,
// //   languages: languages
// // });
//
// users.push({
//      name,
//      email,
//      languages
// });
//
// // console.log(users);
//
// // TODO: replace `var` with `let` in the following variable declarations
// // var emails = [];
// // var names = [];
//
// let emails = [];
// let names = [];
//
// // TODO: rewrite the following using arrow functions
// // users.forEach(function(user) {
// //   return emails.push(user.email);
// // });
//
// users.forEach(user => {
//     return emails.push(user.email);
// });
//
// // users.forEach(function(user) {
// //   return names.push(user.name);
// // });
//
// users.forEach((user) => {
//     return names.push(user.name);
// });
//
// // const users = (user) => "email" + "name";
//
// // TODO: replace `var` with `let` in the following declaration
// // var developers = [];
// // users.forEach(function(user) {
//
// let developers = [];
// users.forEach(function({name, email, languages}) {
//
//
//   // TODO: rewrite the code below to use object destructuring assignment
//   //       note that you can also use destructuring assignment in the function
//   //       parameter definition
//   const name = user.name;
//   const email = user.email;
//   const languages = user.languages;
//
//   developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
//
//   // TODO: rewrite the assignment below to use template strings
//   developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
// });
//
// developers.push(`$(name)'s email is $(email). $(name) knows $(languages.join(", ")}.`);
//
//
// // TODO: Use `let` for the following variable
// // var list = '<ul>';
//
// let list = '<ul>';
//
// // TODO: rewrite the following loop to use a for..of loop
// // developers.forEach(function (developer) {
// for(let developer of developers) {
//
//
//   // TODO: rewrite the assignment below to use template strings
//   list += '<li>' + developer + '</li>';
// };
// list += '</ul>';
//
// document.body.innerHTML = list;



//FILTER, MAP, REDUCE

// 1. Use .filter to create an array of user objects where each user object has at least 3 languages
// in the languages array.

// 2. Use .map to create an array of strings where each element is a user's email address

// 3. Use .reduce to transform the array into an object where the object's keys are ids and the values
// are objects that represent each user

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

//FILTER
let result = users.filter(function(user){
    return user.languages.length >= 3;
});

console.log(result);


// //MAP
let arrayOfEmails = users.map(({email}) => email);

console.log(arrayOfEmails);


//REDUCE
const usersObject = users.reduce((object, user) => {
    object[user.id] = user;
    return object;
}, {});

console.log(usersObject);

// {
//     1: {id: 1, name: "Jane"},
//     2: {id: 2, name: "Bob"}
// }