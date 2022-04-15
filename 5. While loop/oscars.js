function oscars(input) {

    let i = 0;
    let actorsName = input[i];
    i++;
    let startPoints = Number(input[i]);
    i++;
    let num = Number(input[i]);
    i++;

    let nameOfevaluator = Number(input[i].length);
    let points = Number(input[i]);
    let newPoints = 0;
  
    
    while (i < num*2 + 3) {
        nameOfevaluator = Number(input[i].length);
        i++;
        points = Number(input[i]);
        i++;
        newPoints = nameOfevaluator * points / 2;
        startPoints +=newPoints;
        
        if (startPoints > 1250.5) {
            break;
        }
       
    }
    if(startPoints > 1250.5){
        console.log(`Congratulations, ${actorsName} got a nominee for leading role with ${(startPoints).toFixed(1)}!`);

    } else {
        console.log(`Sorry, ${actorsName} you need ${(1250.5 - startPoints).toFixed(1)} more!`)
    }
}

oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"])
