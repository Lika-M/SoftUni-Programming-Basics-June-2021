function challengeTheWedding(input){
    let m = Number(input[0]);
    let f = Number(input[1]);
    let tables = Number(input[2]);
    let result = '';
    let count = 0
    let isEnding = false;

    for(i = 1; i <= m; i++){
        for(j = 1; j <=f; j++){
            count++;
            result += `(${i} <-> ${j}) `;
            if(count >= tables){
                isEnding = true;
                break;
            }
        }
        if(isEnding){
            break;
        }
    }
    console.log(result)
}
challengeTheWedding(["2", "2", "6"])