function submitSolution(input){

    let bitcoinNums = Number(input[0]);
    let yuanNums = Number(input[1]);
    let comision = Number(input[2]);


    let bitcoin = bitcoinNums * 1168;
    let yuans = yuanNums * 1.76 * 0.15;
    let euro = (bitcoin + yuans)/1.95;
    let finalSum = euro - euro * comision/100;
    
    console.log(finalSum.toFixed(2));
}
submitSolution(["20",
"5678",
"2.4"])



