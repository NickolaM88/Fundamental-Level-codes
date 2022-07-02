function print(startNum,endNum){

    let sum = 0;
    let squence = ``;

    for(let index = startNum; index <= endNum; index++){
        sum += index;
        squence += index + ` `;
    }
    console.log(squence);
    console.log(`Sum: ${sum}`);
}