function equalSum(arr) {
    let isEqualSum = false;

    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let j = i - 1; j >= 0; j--) {
            leftSum += arr[j];
        }

        for (let k = i + 1; k < arr.length; k++) {
            rightSum += arr[k];
        }
        if (leftSum === rightSum) {
            console.log(i);
            isEqualSum = true;
        }
    }
    if(!isEqualSum){
        console.log(`no`);
    }
}

equalSum([1,2,3,3])