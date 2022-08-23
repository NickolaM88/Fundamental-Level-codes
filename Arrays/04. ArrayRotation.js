function arrRotation (arr, rotation){
    for(let i = 0; i < rotation; i++){
        let currNum = arr.shift();
        arr.push(currNum);
    }
    console.log(arr.join(` `));
}

arrRotation([51,47,32,61,21] , 2)