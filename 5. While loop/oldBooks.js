function oldBook(input) {

    let favoritBook = input[0];

    let i = 1;
    let book = input[i];
    let counter = 0;

    while (book !== favoritBook) {
        counter++;
        i++;
        book = input[i];

        if(book === "No More Books"){
            break;
        }
    }

    if(book === favoritBook){
        console.log(`You checked ${counter} books and found it.`);
    } else{
        console.log("The book you search is not here!");
        console.log(`You checked ${counter} books.`)
    }
}

oldBook(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])
	