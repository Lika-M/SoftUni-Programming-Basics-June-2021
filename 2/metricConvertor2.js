function metricConverter2(input) {

    let num = Number(input[0]);
    let inputMetric = input[1];
    let outputMetric = input[2];
    let result = 0;

    if (inputMetric === "mm") {
        num = num / 1000;
    } else if (inputMetric === "cm") {
        num = num / 100;
    } else {
        num = num;
    }

    if (outputMetric === "mm") {
        result = num * 1000;
    } else if (outputMetric === "cm") {
        result = num * 100;
    } else {
        result = num;
    }
    console.log(result.toFixed(3));

}

metricConverter2(["12","mm","m"])
