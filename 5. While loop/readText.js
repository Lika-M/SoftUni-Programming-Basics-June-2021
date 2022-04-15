function readText(input) {

    // let i = 0;
    // let text = input[i];

    // while (true){
    //     if(text === "Stop"){
    //         break
    //     }

    //     console.log(text);
    //     i++;
    //     text = input[i];
    // }
    
    let i = 0;
    while (true) {
        let text = input[i];
        i++;

        if (text === "Stop") {
            break;
        }
        console.log(text);

    }

}

readText(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"])
