// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName:string="Mueza";

// Lower Case:
console.log("lowercase:",personName.toLowerCase());

// Upper Case:
console.log("uppercase:",personName.toUpperCase());

// Title Case:
console.log("titlecase:",personName.replace(/\bw/g,c => c.toUpperCase()));