function solve(input) {
    let regex = /(?<!\S)[A-Za-z]+([\.\-\_]+[\w]+)*@[A-Za-z]+([\.\-]*[A-Za-z]+)*.(\.[A-Za-z]+)/g;
    let result = input.match(regex);
    for (const line of result) {
        console.log(line);
    }
}

solve("Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.")