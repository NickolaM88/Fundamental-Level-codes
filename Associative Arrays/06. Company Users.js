function solve(input) {
    let listOFPrograms = {};

    for (const line of input) {
        let [name, codes] = line.split(` -> `);

        if (listOFPrograms.hasOwnProperty(name) == false) {
            listOFPrograms[name] = new Set();
        }
        listOFPrograms[name].add(codes)
    }
    let sorted = Object.entries(listOFPrograms);
    sorted.sort((a, b) => a[0].localeCompare(b[0]))

    for (const element of sorted) {
        console.log(element[0]);
        for (const number of element[1]) {
            console.log(`-- ${number}`);
        }
    }
}

solve([
    "SoftUni -> AA12345",
    "SoftUni -> BB12345",
    "Microsoft -> CC12345",
    "HP -> BB12345"
])