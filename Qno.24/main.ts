// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// * Tests for equality and inequality with strings

// * Tests using the lower case function

// * Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// * Tests using "and" and "or" operators

// * Test whether an item is in a array

// * Test whether an item is not in a array

// VARIABLES:
let capitalName="MASOOMA";
let girlName:string="Masooma";


// * Tests for equality and inequality with strings:

// Inequality with strings:
console.log(" Is variable name is not equal to masooma?");
console.log(girlName != "masooma" );

// Equality with strings:
console.log(" \nIs variable name is equal to masooma?");
console.log(girlName == "masooma" );



// * Tests using the lower case function:

// Inequality with strings:
console.log("\nIs MASOOMA is equal to masooma after converting in lowercase?")
console.log(capitalName.toLowerCase() == "masooma");

// Equality with strings:
console.log("\nIs MASOOMA is not equal to masooma after converting in lowercase?")
console.log(capitalName.toLowerCase() != "masooma");


// * Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:
let five=5;
let twenty=20;
// * Numerical tests involving equality and inequality:

// Equal to or not equal to:
console.log("\nIs twenty is equal to 20?");
console.log(twenty == 20);

console.log("\nIs twenty is not equal to 20?");
console.log(twenty != 20);

// Greater and less than:
console.log("\nIs twenty is greater than 5?");
console.log(twenty > 5);

console.log("\nIs twenty is less than 5?");
console.log(twenty < 5);

// Greater or less than equal to:
console.log("\nIs twenty is greater than or equal to 20?");
console.log(twenty >= 20);

console.log("\nIs twenty is less than or equal to 5?");
console.log(twenty <= 5);

// * Tests using "and" and "or" operators:

// And Operator:&&
console.log("\nIs twenty is greater than 5 and twenty is not equal to 5? ")
console.log(twenty >5 && twenty != 5);

console.log("\nIs twenty is  not greater than 5 and twenty is  equal to 5? ")
console.log(twenty !>5 && twenty == 5);

// Or Operator ||:
console.log("\nIs twenty is greater than 10 or twenty is  equal to 5? ")
console.log(twenty > 10 || twenty == 5);

console.log("\nIs twenty is not less than 10 or twenty is   equal to 5? ")
console.log(twenty !< 10 || twenty == 5);

// * Test whether an item is in a array:

let teamMembers:string[]=["Sarfraz","Babar","Ali"]

console.log("\nIs sarfraz includes in my teamMembers array? ");
console.log(teamMembers.includes("Sarfraz"));

// * Test whether an item is not in a array:

console.log("\nIs sarfraz  is not includes in my teamMembers array? ");
console.log(!teamMembers.includes("Sarfraz"));


















