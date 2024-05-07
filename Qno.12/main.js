// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var arrayName = ["Mahnoor", "Muskan", "Aliza", "Masooma"];
arrayName.forEach(function (arrayName) { return console.log("Hello ".concat(arrayName, ", would you like to some tea or coffee?")); });
