// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// * If the alien is green, print a message that the player earned 5 points.
// * If the alien is yellow, print a message that the player earned 10 points.
// * If the alien is red, print a message that the player earned 15 points.
// * Write three versions of this program, making sure each message is printed for the appropriate color alien.
// VERSION 1:
var alienColor1 = "Green";
if (alienColor1 === "Green") {
    console.log("Version 1: Player earned 5 points.");
}
else if (alienColor1 === "Yellow") {
    console.log("Version 1: Player earned 10 points.");
}
else if (alienColor1 === "Red") {
    console.log("Version 1: Player earned 15 points.");
}
// VERSION 2:
var alienColor2 = "Yellow";
if (alienColor2 === "Yellow") {
    console.log("Version 2: Player earned 10 points.");
}
else if (alienColor2 === "Green") {
    console.log("Version 2: Player earned 5 points.");
}
else if (alienColor2 === "Red") {
    console.log("Version 2: Player earned 15 points.");
}
// VERSION 3:
var alienColor3 = "Red";
if (alienColor3 === "Red") {
    console.log("Version 3: Player earned 15 points.");
}
else if (alienColor3 === "Green") {
    console.log("Version 3: Player earned 5 points.");
}
else if (alienColor3 === "Yellow") {
    console.log("Version 3: Player earned 10 points.");
}
