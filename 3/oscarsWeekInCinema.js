function oscarsWeekInCinema(input) {

    let name = input[0];
    let type = input[1];
    let ticketNum = Number(input[2]);

    let priseTikets = 0;
    //"normal", "luxury" или "ultra luxury
    switch (name) {
        case "A Star Is Born":
            switch (type) {
                case "normal": priseTikets = ticketNum * 7.50; break
                case "luxury": priseTikets = ticketNum * 10.50; break
                case "ultra luxury":priseTikets = ticketNum * 13.50; break
            } break
        case "Bohemian Rhapsody":
            switch (type) {
                case "normal": priseTikets = ticketNum * 7.35; break
                case "luxury": priseTikets = ticketNum * 9.45; break
                case "ultra luxury":priseTikets = ticketNum * 12.75; break
            } break;
        case "Green Book":
            switch (type) {
                case "normal": priseTikets = ticketNum * 8.15; break
                case "luxury": priseTikets = ticketNum * 10.25; break
                case "ultra luxury":priseTikets = ticketNum * 13.25; break
            } break;
        case "The Favourite":
            switch (type) {
                case "normal": priseTikets = ticketNum * 8.75; break
                case "luxury": priseTikets = ticketNum * 11.55; break
                case "ultra luxury":priseTikets = ticketNum * 13.95; break
            } break;
    }
    console.log(`${name} -> ${(priseTikets).toFixed(2)} lv.`)
}
oscarsWeekInCinema(["Green Book",
"normal",
"63"])

