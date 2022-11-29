function solve(words, sentence) {
    words = words.split(`, `);
    for (let word of words) {
        sentence = sentence.replace("*".repeat(word.length), word)
    }
    console.log(sentence);
}

solve("learning, great",
    "softuni is ***** place for ******** new programming languages")