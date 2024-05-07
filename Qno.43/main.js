//43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_names = ["Ali", "Aliza", "Hamza", "Zain"];
//Making a copy of array through .slice() function:
var copy_magician_names = magicians_names.slice();
//Modify the copied array to include "The great" with their names:
var copy_great_magicians = make_great(copy_magician_names);
//Show both arrays original and copied:
console.log("Original array\n");
show_magicians(magicians_names);
//copied:
console.groupCollapsed("\nCopied Array\n");
show_magicians(copy_great_magicians);
