function solve(input) {
    let map = new Map();
    //проверяваме и сетваме всяка нова дума на 0
    for (let word of input) {
        if (!map.has(word)) {
            map.set(word, 0);
        }
        //открием ли съвпадение на думите , добавяме +1 брой
        map.set(word, map.get(word) + 1);
    }
    let sorted = Array.from(map);
    sorted.sort((a, b) => b[1] - a[1]);
    for (let [word, words] of sorted) {
        console.log(`${word} -> ${words} times`);
    }
}

solve(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"]);