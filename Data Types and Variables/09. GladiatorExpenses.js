function gladiator(lostFigths,helmetPrice,swordPrice,shieldPrice,armorPrice) {

    let totalExpenses = 0;

    for (let currentFigth = 1; currentFigth <= lostFigths; currentFigth++) {
        if(currentFigth % 2 === 0){
            totalExpenses += helmetPrice;
        }

        if(currentFigth % 3 === 0){
            totalExpenses += swordPrice;
        }

        if(currentFigth % 6 === 0){
            totalExpenses += shieldPrice;
        }
        
        if(currentFigth % 12 === 0){
            totalExpenses += armorPrice;
        }
    }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}
gladiator(7,2,3,4,5)