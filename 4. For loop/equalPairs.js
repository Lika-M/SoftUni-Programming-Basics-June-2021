function equalPairs(input) {

    let a = 0
    let b = 0
    let sum1 = 0
    let sum2 = 0
    let topDiff = 0
    let difference = 0

    for (let i = 1; i < input.length; i += 2) {

        a = Number(input[i])
        b = Number(input[i + 1])

        sum1 = a + b

        if (sum2 !== 0) {
            difference = Math.abs(sum1 - sum2)
            if (difference > topDiff) {
                topDiff = difference
            }
        }

        sum2 = sum1
    }

    if (topDiff !== 0) {
        console.log(`No, maxdiff=${topDiff}`)
    } else {
        console.log(`Yes, value=${sum2}`)
    }
}

equalPairs(["2", "-1", "2", "0", "-1"])
// ,

// 
//     , "4", "-1"



// 2
// -1
// 2
// 0
// -1
