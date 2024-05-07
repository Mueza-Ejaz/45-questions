// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// * Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// * Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// * Print a message to each of the two people still on your list, letting them know they’re still invited.

// * Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


let guestlist:string[]=["Aliza","Mahnoor","Saad","Mehwish"]

console.log(guestlist[0], "can't come");

guestlist.shift()
guestlist.unshift("Mueza")

console.log("Good News ! We have found a bigger table for dinner.");

// Add new guest in start :
guestlist.unshift("Rukhsar")

// Add new guest in last:
guestlist.push("Ali")

// Add new guest in the middle of index of an array:
let middleindex:number =Math.floor(guestlist.length / 2);

guestlist.splice(middleindex,0, "Hifa");

console.log("Updated list of our guest");

guestlist.forEach(onebyone => console.log(`Hello, ${onebyone}: would you like to dinner with us?`));

// Now ,you can invite only two members:
console.log("Unfortunately! The new dinner table won't arrive on time,so i can invite only two guests to dinner with me.");
// Using While loop method for removing guest:

while(guestlist.length > 2){
    let removeGuest=guestlist.pop()
    console.log(`Soory, ${removeGuest}; i can't invite you to dinner`);
}

console.log("Invitations to the last 2 guests:");
guestlist.forEach(twoGuest => console.log(`Lucky ${twoGuest},Congratulation:You are still invited to dinner.`));

// Remove last remaining last two guests:
guestlist.pop();
guestlist.pop();
console.log("Empty list", guestlist);


