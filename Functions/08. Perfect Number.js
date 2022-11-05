function perfectNumber(perfect) {
    let sum = 0
    for(let num = 1; num < perfect; num++){
        if(perfect % num === 0){
            sum += num
        }
    }
    if(sum == perfect){
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

perfectNumber(1236498)