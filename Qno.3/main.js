// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "Mueza";
// Lower Case:
console.log("lowercase:", personName.toLowerCase());
// Upper Case:
console.log("uppercase:", personName.toUpperCase());
// Title Case:
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
