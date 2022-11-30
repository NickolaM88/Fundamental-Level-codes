function solve(text) {
    let uniqe = "";
    for (let index = 0; index < text.length; index++) {
        let currChar = text.charAt(index);
        let nextChar = text.charAt(index + 1);
        if(currChar !== nextChar){
            uniqe += currChar;
        }
    }
    console.log(uniqe);
}

solve("aaaaabbbbbcdddeeeedssaa")