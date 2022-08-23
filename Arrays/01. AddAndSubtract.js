function addSub (arr){
    let newArr = [];
    let sumArr = 0;
    let sumNewArr = 0;

for(let i = 0; i < arr.length; i++){
    sumArr += arr[i];
    if(arr[i] % 2 === 0){
        arr[i] += i;
    } else {
        arr[i] -= i;
    }
    sumNewArr += arr[i];
}
console.log(arr);
console.log(sumArr);
console.log(sumNewArr);
}
addSub([5,15,23,56,35])