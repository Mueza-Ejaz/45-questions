// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var usernames = ["Ali", "Shazaman", "Naeem", "Shahzad", "Mussawir", "Admin"];
usernames = [];
if (usernames.length === 0) {
    console.log("Your array is empty,we need to find some users!");
}
else {
    usernames.forEach(function (adminName) {
        if (adminName === "Admin") {
            console.log("Hello ".concat(adminName, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(adminName, ", thank you for logging in again. "));
        }
    });
}
