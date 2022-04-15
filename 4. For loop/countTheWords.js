function countTheWords(input) {

    let message = input[0];
    let length = message.length;

    let spaseCounter = 0;
    let words = 0;

    for (let i = 1; i <= length; i++) {
        if (message[i] === " ") {
            spaseCounter+=1
        }
    }

    words = spaseCounter+1;


    if(words>10){
        console.log(`The message is too long to be send! Has ${words} words.`)
    }else{
        console.log("The message was sent successfully!")
    }
}

countTheWords(["This message has ten words and you can send it!"])