function aquariumCapacity(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);

    let capacity = Number(length * width * height); 
    let capacityInLiters = Number(capacity * 0.001);
    let finalCapacity = Number(capacityInLiters - capacityInLiters * 0.17)

    console.log(finalCapacity)
}

aquariumCapacity(["85", "75", "47", "17"])