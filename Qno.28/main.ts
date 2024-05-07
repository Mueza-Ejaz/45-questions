
// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// * If the person is less than 2 years old, print a message that the person is a baby.

// * If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// * If the person is at least 4 years old but less than 13, print a message that the person is a kid.  

// * If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// * If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// * If the person is age 65 or older, print a message that the person is an elder.

// Variables ages:
let lifeStages:number=80;
// * If the person is less than 2 years old, print a message that the person is a baby.

if(lifeStages < 2){
           console.log("You are a baby");
}

// * If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

if(lifeStages >= 2 && lifeStages < 4){
    console.log("You are a toddler");
}

// * If the person is at least 4 years old but less than 13, Print a message that the person is a kid. 

else if(lifeStages >= 4 && lifeStages < 13){
    console.log("You are a kid");
}

// * If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

 else if(lifeStages >= 13 && lifeStages < 20){
    console.log("You are a teenager ");
}

// * If the person is at least 20 years old but less than 65, print a message that the person is an adult.

else if(lifeStages >= 20 && lifeStages < 65){
    console.log("You are an adult ");
}


// * If the person is age 65 or older, print a message that the person is an elder.

else if(lifeStages >= 65){
    console.log("You are an elder ");
}