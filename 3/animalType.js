function animalType(input){

    let type = input[0];
/*1. dog -> mammal
2.	crocodile, tortoise, snake -> reptile
3.	others -> unknown
 */
    switch(type){
        case "dog":
            console.log("mammal");break;
        case "crocodile":
        case "tortoise":
        case "snake":
            console.log("reptile"); break;
        default:
            console.log("unknown"); break;
    }
}

animalType(["cat"])