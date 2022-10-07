function adressBook(input) {
    let result = {};
    for (const line of input) {
        let [name, adress] = line.split(`:`);
        result[name] = adress;
    }
    // sorting 
    let sortedKeys = Object.keys(result);
    sortedKeys.sort((a, b) => a.localeCompare(b));
    //printing
    for (const name of sortedKeys) {
        console.log(`${name} -> ${result[name]}`);
    }
}

adressBook(["Tim:Doe Crossing",
    "Bill:Nelson Place",
    "Peter:Carlyle Ave",
    "Bill:Ornery Rd"])