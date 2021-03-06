// 1. Write a function, deactivateMembers()
// to take in the following array of objects as an input:
    var members = [
        {
            joined: 2009,
            name: "John",
            activeMember: true
        },
        {
            joined: 2011,
            name: "Sally",
            activeMember: true
        },
        {
            joined: 2013,
            name: "John",
            activeMember: true
        },
    ];
// The function should return an output of the same array of objects with all activeMember properties set to false
// and contain an additional property of dateDeactivated set to 2017.

function deactivateMembers(members) {
    members.forEach(function (member) {
        member.activeMember = false;
        member.dateDeactived = 2017;
        console.log(member);
    })

}

deactivateMembers(members);


// ---- EXERCISE 2
//
//
// 1. Define an object, "canOfSoda", using dot syntax to add and assign the following properties:
//     - a property of isEmpty assigned a boolean value of false
// - a property of isOpen assigned a boolean value of false
// - a method of open() which sets the isOpen to true if the property is false when the method is initially called
// - a method of pourOut() which sets the isEmpty to true if the isEmpty property is false and the isOpen is true
// 2. Define the above object again using object literal syntax.
//     BONUS
// 3. Create an array call cansOfSoda containing of 3 canOfSoda objects with the same properties and values as described above.
//     The objects should be named, canOfSoda1, canOfSoda2, canOfSoda3.
// 4. Iterate over the cansOfSoda array and open() and pourOut() each canOfSoda object
// 5. Console log the cansOfSoda array to check if the methods worked correctly.
