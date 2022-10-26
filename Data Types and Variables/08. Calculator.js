function calcualtor(num1,symbol,num2){
    let sum = 0;
    switch(symbol){
        case `+`: sum = num1 + num2;
        console.log(sum.toFixed(2));
        break;
        case `-`: sum = num1 - num2;
        console.log(sum.toFixed(2));
        break;
        case `/`: sum = num1 / num2;
        console.log(sum.toFixed(2));
        break;
        case `*`: sum = num1 * num2;
        console.log(sum.toFixed(2));
        break;
    }
}