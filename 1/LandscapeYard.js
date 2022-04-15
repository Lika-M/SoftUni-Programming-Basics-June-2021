function landscapeYard(input) {

    let area = Number(input[0]);
    let price = area * 7.61;
    let discount = price * 0.18;
    let finalPrice = price - discount



    console.log(`The final price is: ${finalPrice} lv. The discount is: ${discount} lv.`);


}

landscapeYard([550])