function train(input) {
    let passengers = input.shift().split(" ").map(Number);
    let maxCapacity = Number(input.shift());

    for (let command of input) {
        let currentCommand = command.split(" ")
        if (currentCommand[0] === "Add") {
            passengers.push(Number(currentCommand[1]));
        } else {
            for (let index = 0; index < passengers.length; index++) {
                if (passengers[index] + Number(currentCommand[0]) <= maxCapacity) {
                    passengers[index] += Number(currentCommand[0]);
                    break;
                }
            }
        }
    }
    console.log(passengers.join(" "));
}

train(["32 54 21 12 4 0 23",
    "75",
    "Add 10",
    "Add 0",
    "30",
    "10",
    "75"])