function speedInfo(input){
    let score = Number(input[0]);

    if(score<=10){
        console.log("slow");
    }else if(score<=50){
        console.log("average");
    }else if(score<=150){
        console.log("fast");
    }else if(score<=1000){
        console.log("ultra fast");
    }else{
        console.log("extremely fast");
    }
}
speedInfo(["160"])