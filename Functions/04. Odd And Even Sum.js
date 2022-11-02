function oddAndEvenSum (num){
    let numAsText = num.toString();
    let oddSum = 0;
    let evenSum = 0;
    for(let i = 0; i < numAsText.length; i++){
        let currentNum = Number(numAsText[i]);
        if(currentNum % 2 === 0){
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435)