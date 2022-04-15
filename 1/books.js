function books(input){

    let pagesNum = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysNum = Number(input[2]);

    let result = pagesNum / pagesPerHour / daysNum;

    console.log(result);

}
books(["212", "20", "2"]);