function catsLife(input) {

    let catsBreed = input[0];
    let sex = input[1];
    let months = 0;
    let isNotCat = false;

    switch (catsBreed) {
        case "British Shorthair":
            switch (sex) {
                case "m": months = 12 * 13 / 6; break;
                case "f": months = 12 * 14 / 6; break;
            } break;
        case "Siamese":
            switch (sex) {
                case "m": months = 12 * 15 / 6; break;
                case "f": months = 12 * 16 / 6; break;
            } break;
        case "Persian":
            switch (sex) {
                case "m": months = 12 * 14 / 6; break;
                case "f": months = 12 * 15 / 6; break;
            } break;
        case "Ragdoll":
            switch (sex) {
                case "m": months = 12 * 16 / 6; break;
                case "f": months = 12 * 17 / 6; break;
            } break;
        case "American Shorthair":
            switch (sex) {
                case "m": months = 12 * 12 / 6; break;
                case "f": months = 12 * 13 / 6; break;
            } break;
        case "Siberian":
            switch (sex) {
                case "m": months = 12 * 11 / 6; break;
                case "f": months = 12 * 12 / 6; break;
            } break;
        default: isNotCat = true;
            break;
    }
    if (isNotCat) {
        console.log(`${catsBreed} is invalid cat!`);
    } else {
        console.log(`${months} cat months`);
    }

}
catsLife(["Siamese", "f"])