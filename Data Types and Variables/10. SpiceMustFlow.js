function spice(StartingYield) {

    let spices = 0;
    let dayCounter = 0;

    while(StartingYield >= 100){
        dayCounter++;
        spices += StartingYield - 26;
        StartingYield -= 10;
    }
    console.log(dayCounter);
    if(dayCounter != 0){
        console.log(spices - 26);
    }else {
        console.log(spices);
    }
}