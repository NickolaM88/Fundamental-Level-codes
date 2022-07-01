function vacation(people, type, day) {
    people = Number(people);
    let price = 0;
    let totalPrice = 0;

    switch (day) {
        case "Friday":
            if (type === `Students`) {
                price = 8.45;
                if (people >= 30) {
                    price = price * 0.85;
                    totalPrice = price * people;
                } else {
                    totalPrice = price * people;
                }
            } else if (type === `Business`) {
                if (people >= 100) {
                    people -= 10;
                    price = 10.90;
                    totalPrice = price * people;
                } else {
                    price = 10.90;
                    totalPrice = price * people;
                }
            } else if (type === `Regular`) {
                price = 15;
                if (people >= 10 && people <= 20) {
                    price = price * 0.95;
                    totalPrice = price * people;
                } else {
                    totalPrice = price * people;
                }
            }
            break;
            case `Saturday`:
                if (type === `Students`) {
                    price = 9.80;
                    if (people >= 30) {
                        price = price * 0.85;
                        totalPrice = price * people;
                    } else {
                        totalPrice = price * people;
                    }
                } else if (type === `Business`) {
                    price = 15.60;
                    if (people >= 100) {
                        people -= 10;
                        totalPrice = price * people;
                    } else {
                        totalPrice = price * people;
                    }
                } else if (type === `Regular`) {
                    price = 20;
                    if (people >= 10 && people <= 20) {
                        price = price * 0.95;
                        totalPrice = price * people;
                    } else {
                        totalPrice = price * people;
                    }
                }
                break;
                case `Sunday`:
                    if (type === `Students`) {
                        price = 10.46;
                        if (people >= 30) {
                            price = price * 0.85;
                            totalPrice = price * people;
                        } else {
                            totalPrice = price * people;
                        }
                    } else if (type === `Business`) {
                        price = 16;
                        if (people >= 100) {
                            people -= 10;
                            totalPrice = price * people;
                        } else {
                            totalPrice = price * people;
                        }
                    } else if (type === `Regular`) {
                        price = 22.50;
                        if (people >= 10 && people <= 20) {
                            price = price * 0.95;
                            totalPrice = price * people;
                        } else {
                            totalPrice = price * people;
                        }
                    }
                break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30,`Students`,`Sunday`)
