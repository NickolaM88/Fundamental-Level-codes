function repeatString (word,times){
    let result = ``;
    for(let i = 0; i < times; i++){
        result += word
    }
    return result;
    
}
console.log(repeatString(`abv`,3))