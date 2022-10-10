function solve(input) {
    let words = input.shift().split(` `)
    let result = {};

    // добавяме на всяка нова дума от words стойност 0
    for (let word of words) {
        result[word] = 0
    }

    for (let word of input) {
        // ако има съвпадение добавяме 1брой
        if (result.hasOwnProperty(word)) {
            result[word]++;
        }
    }

    // превръщаме обекта в масив
    let sorted = Object.entries(result);
    sorted.sort((a, b) => b[1] - a[1])

    for (const word of sorted) {
        console.log(`${word[0]} - ${word[1]}`);
    }
}

solve([
    "this sentence",
    "In", "this", "sentence", "you", "have",
    "to", "count", "the", "occurances", "of",
    "the", "words", "this", "and"
]);