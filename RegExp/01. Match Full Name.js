function solve(input) {
    let text = input[0];
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let validNames = [];
    while ((validName = pattern.exec(input)) !== null) {
        validNames.push(validName[0]);
    }
    console.log(validNames.join(` `));
}

solve(["ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan	Ivanov"])