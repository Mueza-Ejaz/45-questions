// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.


let guestList:string[]=["Mahnoor","Masooma","Aliza","Hifa"]

// guestList.forEach(guestList => console.log(`Hi, ${guestList}:  "would you like to dinner with me"?` ));
let newInvitation:number=guestList.length;
console.log(`We are inviting all of you ${newInvitation} guests for dinner.`);