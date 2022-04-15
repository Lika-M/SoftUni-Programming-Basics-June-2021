function fuelTank(input) {
    let typeFuel = input[0];
    litersFuel = Number(input[1]);

    if (litersFuel >= 25) {

        if(typeFuel==="Diesel"){
            console.log("You have enough diesel.")

        }else if(typeFuel==="Gasoline"){
            console.log("You have enough gasoline.")

        }else if(typeFuel==="Gas"){
            console.log("You have enough gas.")

        }else{
            console.log("Invalid fuel!")
        }
  
    } else {
        if(typeFuel==="Diesel"){
            console.log("Fill your tank with diesel!")

        }else if(typeFuel==="Gasoline"){
            console.log("Fill your tank with gasoline!")

        }else if(typeFuel==="Gas"){
            console.log("Fill your tank with gas!")

        }else{
            console.log("Invalid fuel!")
        
    }
}
}
//"Diesel", "Gasoline" или "Gas", 
    fuelTank(["Gas", "30"])