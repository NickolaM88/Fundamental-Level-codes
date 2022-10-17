function rigthPLace(str,char,result){
    let word = str.replace(`_`,char)
    let final = word === result ? `Matched` : `Not Matched`;
    console.log(final);
}