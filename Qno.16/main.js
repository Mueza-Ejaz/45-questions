// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// * Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// * Add one new guest to the beginning of your array.
// * Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guestlist = ["Aliza", "Mahnoor", "Saad", "Mehwish"];
console.log(guestlist[0], "can't come");
guestlist.shift();
guestlist.unshift("Mueza");
console.log("Good News ! We have found a bigger table for dinner.");
// Add new guest in start :
guestlist.unshift("Rukhsar");
// Add new guest in last:
guestlist.push("Ali");
// Add new guest in the middle of index of an array:
var middleindex = Math.floor(guestlist.length / 2);
guestlist.splice(middleindex, 0, "Hifa");
console.log("Updated list of our guest");
guestlist.forEach(function (onebyone) { return console.log("Hello, ".concat(onebyone, ": would you like to dinner with us?")); });
