function sumPrimeNonPrime(input) {

    let i = 0;
    let income = input[i];
    let primeSum = 0;
    let nonPrimeSum = 0;

    while (income !== "stop") {
        let num = Number(income);

        if (num < 0) {
            console.log("Number is negative.");
            i++;
            income = input[i];
            continue;
        }

        if (num === 1) {
            primeSum += num;
            i++;
            income = input[i];
            continue;
        }

        let isPrime = true;
        for (i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
            }
        }

        if (isPrime === true) {
            primeSum += num;
        } else {
            nonPrimeSum += num;
        }

        i++;
        income = input[i];
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);

}

sumPrimeNonPrime(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])



