function solve(sentence) {
    let words = sentence.split(` `);
    for (const word of words) {
        if (word.startsWith(`#`) && word.length > 1) {
            let asciiCode = word.charCodeAt(1);
            let isLetter =
                (asciiCode >= 65 && asciiCode <= 90) ||
                (asciiCode >= 97 && asciiCode <= 122);
            if (isLetter) {
                console.log(word.substring(1));
            }
        }
    }
}

solve("The symbol # is known #variously in English-speaking #regions as the #number sign")