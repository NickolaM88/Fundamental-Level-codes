function solve(text, word) {
    while (text.includes(word)) {
        text = text.replace(word, "*".repeat(word.length));
    }
    console.log(text);

    // това е по алтернативно решение за заменяне
    // на всики думи в текс 

    /*let tokens = text.split(word);
    console.log(tokens.join("*".repeat(word.length)));
    */
}

solve("A small sentence with some words", "small")