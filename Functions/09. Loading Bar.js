function loadingBar(num) {
    let bar = ``;
    if (num === 10) {
        bar += `%.........`;
        console.log(`${num}% [${bar}]`);
        console.log(`Still loading...`);
    } else if (num === 20) {
        bar += `%%........`
        console.log(`${num}% [${bar}]`);
        console.log(`Still loading...`);
    } else if (num === 30) {
        bar += `%%%.......`
        console.log(`${num}% [${bar}]`);
        console.log(`Still loading...`);
    } else if (num === 40) {
        bar += `%%%%......`
        console.log(`${num}% [${bar}]`);
        console.log(`Still loading...`);
    } else if (num === 50) {
        bar += `%%%%%.....`
        console.log(`${num}% [${bar}]`);
        console.log(`Still loading...`);
    } else if (num === 60) {
        bar += `%%%%%%....`
        console.log(`${num}% [${bar}]`);
        console.log(`Still loading...`);
    } else if (num === 70) {
        bar += `%%%%%%%...`
        console.log(`${num}% [${bar}]`);
        console.log(`Still loading...`);
    } else if (num === 80) {
        bar += `%%%%%%%%..`
        console.log(`${num}% [${bar}]`);
        console.log(`Still loading...`);
    } else if (num === 90) {
        bar += `%%%%%%%%%.`
        console.log(`${num}% [${bar}]`);
        console.log(`Still loading...`);
    } else if (num === 100) {
        bar += `%%%%%%%%%%`
        console.log(`${num}% Complete!`);
        console.log(`[${bar}]`);
    }
}

loadingBar(100)