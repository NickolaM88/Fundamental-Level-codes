function solve(input) {
    let racers = [];
    let names = input.shift().split(', ');

    for (const line of input) {
        if (line === "end of race") {
            break;
        }
        let racerName = line.match(/[A-Z]+/gi).join("");
        let distanceInDigits = line.match(/\d/g);
        let distance = 0;

        // for (const meter of distanceInDigits) {
        //     distance += +meter;
        // }
        // това отдолу е същото като фор оф-а горе
        distance = distanceInDigits.map(Number).reduce((a, b) => a + b);

        if (names.includes(racerName)) {
            if (racers.hasOwnProperty(racerName)) {
                racers[racerName] += distance;
            } else {
                racers[racerName] = distance;
            }
        }
    }
    let sortedArray = Object.keys(racers).sort((a,b) => racers[b] - racers[a]);
    console.log(`1st place: ${sortedArray[0]}`);
    console.log(`2nd place: ${sortedArray[1]}`);
    console.log(`3rd place: ${sortedArray[2]}`);
}

solve(["George, Peter, Bill, Tom",
    "G4e@55or%6g6!68e!!@ ",
    "R1@!3a$y4456@",
    "B5@i@#123ll",
    "G@e54o$r6ge#",
    "7P%et^#e5346r",
    "T$o553m&amp;6",
    "end of race"])