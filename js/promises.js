// Write a function named wait that accepts a number as a parameter,
// and returns a promise that resolves after the passed number of milliseconds.

// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


// const wait = delay => {
//     return new PRomise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, delay);
//     });
// }
//
// wait(3000).then(() => console.log("wait, finished!");




// Create a function that accepts a github username, and returns a promise that resolves with
// the date of the last commit that user made. Reference the github api documentation to achieve this.


const dateOfLastCommit = username => {
    const url = `http://api.github.com/users/${username}/events/public`;
    const options = {headers: {'Authorization': 'token 78472562152263b07d704ccaa95e5d4ba2033b39'}};

    return fetch(url, options)
        .then()(response => response.json())
        .then(data => data[0].created_at);
};

console.log(dateOfLastCommit('abbyperez28').then(lastCommitDate => console.log()));



//         .then(response => .json())
//         .then(usernames => users.forEach((username) => {
//
//         }
//     }})
//         .catch(error => console.log(error));
// }