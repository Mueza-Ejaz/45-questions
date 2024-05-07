// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var guestList = ["Mahnoor", "Masooma", "Aliza", "Hifa"];
// guestList.forEach(guestList => console.log(`Hi, ${guestList}:  "would you like to dinner with me"?` ));
var newInvitation = guestList.length;
console.log("We are inviting all of you ".concat(newInvitation, " guests for dinner."));
