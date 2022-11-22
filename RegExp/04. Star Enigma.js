function solve(input) {
    let messages = Number(input.shift());
    let regex = /@([A-Z][a-z]+)[^@\-!:>]*:\d+[^@\-!:>]*!(A|D)![^@\-!:>]*->\d+/;
    let attacked = [];
    let destroyed = [];
    // search for [s, t, a, r]
    for (let index = 0; index < messages; index++) {
        let encryptedMessages = input[index]
        let count = encryptedMessages
        .toLowerCase()
        .split("")
        .filter((char) => char === "s" || char === "t" || char === "a" || char === "r").length;
        
        let decryptedMessages = encryptedMessages
        .split("")
        .map((char) => String.fromCharCode(char.charCodeAt(0) - count))
        .join("");
        
        let regexMatch = decryptedMessages.match(regex);
        if(regexMatch) {
            if(regexMatch[2] === "A"){
                attacked.push(regexMatch[1]);
            } else if(regexMatch[2] === "D"){
                destroyed.push(regexMatch[1]);
            }
        }
    }
    console.log(`Attacked planets: ${attacked.length}`);
    Object.entries(attacked)
    .sort((a, b) => a[1]
    .localeCompare(b[1]))
    .forEach(planet => console.log(`-> ${planet[1]}`));

    console.log(`Destroyed planets: ${destroyed.length}`);
    Object.entries(destroyed)
    .sort((a, b) => a[1]
    .localeCompare(b[1]))
    .forEach(planet => console.log(`-> ${planet[1]}`));
}

solve(["2",
    "STCDoghudd4=63333$D$0A53333",
    "EHfsytsnhf?8555&I&2C9555SR"]);