function year(num){
    let result = 
    (num % 4 === 0 && num % 100 !== 0) || num % 400 === 0 ? "yes" : "no";
    console.log(result);
}