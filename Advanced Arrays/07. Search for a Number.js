function numberSearch (array, input){
    let takingNumber = input[0];
    let deletingNumber = input[1];
    let searchingNumber = input[2];

    let myNewArr = array.splice(0, takingNumber);
    myNewArr = myNewArr.splice(deletingNumber);
    let counter = 0;
    for (let index = 0; index < myNewArr.length; index++) {
        if(myNewArr[index] === searchingNumber){
            counter++;
        }
    }
    console.log(`Number ${searchingNumber} occurs ${counter} times.`);
}

numberSearch([5, 2, 3, 4, 1, 6], [5, 2, 3])