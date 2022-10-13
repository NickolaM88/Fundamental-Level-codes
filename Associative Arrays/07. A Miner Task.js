function solve(input) {
    let result = new Map();
    for (let index = 0; index < input.length; index += 2) {
        let material = input[index];
        let quantity = input[index + 1];
        quantity = Number(quantity);

        if (result.has(material)) {
            let existing = result.get(material);
            console.log(existing);
            result.set(material, quantity + existing);
        } else {
            result.set(material, quantity)
        }
    }
    for (const [material, quantity] of result) {
        console.log(`${material} -> ${quantity}`);
    }
}

solve([
    "Gold",
    "155",
    "Silver",
    "10",
    "Copper",
    "17",
    "Gold",
    "15"
])