function tradeCommissions(input) {

    let town = input[0];
    let sales = Number(input[1]);

    let commissionAmount = 0;

    if (town == "Sofia") {
        if (sales >= 0 && sales <= 500) {
            commissionAmount = (sales*5/100).toFixed(2);
        } else if(sales>=500 && sales<=1000){
            commissionAmount = (sales*7/100).toFixed(2);
        }else if( sales >=1000 && sales<=10000){
            commissionAmount = (sales*8/100).toFixed(2);
        }else if(sales>10000){
            commissionAmount = (sales*12/100).toFixed(2);
        }else{
            commissionAmount = "error";
        }
    } else if (town == "Plovdiv") {
        if (sales >= 0 && sales <= 500) {
            commissionAmount = (sales*5.5/100).toFixed(2);
        } else if(sales>=500 && sales<=1000){
            commissionAmount = (sales*8/100).toFixed(2);
        }else if( sales >=1000 && sales<=10000){
            commissionAmount = (sales*12/100).toFixed(2);
        }else if(sales>10000){
            commissionAmount = (sales*14.5/100).toFixed(2);
        }else{
            commissionAmount = "error"; 
        }
    } else if (town == "Varna") {
        if (sales >= 0 && sales <= 500) {
            commissionAmount = (sales*4.5/100).toFixed(2);
        } else if(sales>=500 && sales<=1000){
            commissionAmount = (sales*7.5/100).toFixed(2);
        }else if( sales >=1000 && sales<=10000){
            commissionAmount = (sales*10/100).toFixed(2);
        }else if(sales>10000){
            commissionAmount = (sales*13/100).toFixed(2);
        }else{
            commissionAmount = "error";
        }
    } else {
    commissionAmount = "error"

    }
    console.log(commissionAmount);
}

tradeCommissions(["Kaspichan",
"-50"])



