// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

type data={
 
    coursesName:string,
    totalDays:number,
    courseDuration:string|number,
    onsiteStrenght:number,
    Center:string,
    Location:string,
    City:string,
}

let itCourse: data={

    coursesName: "Typescript and Python",
    totalDays: 7,
    courseDuration: "One year",
    onsiteStrenght: 50000,
    Center: "Governor House",
    Location: "Shahra -i- Faisal",
    City: "Karachi"
}

     console.log(itCourse);