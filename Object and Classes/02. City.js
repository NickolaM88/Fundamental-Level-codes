function cityInfo(city){
    for(let key of Object.keys(city)){
        console.log(`${key} -> ${city[key]}`);
    }
}

cityInfo({name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"})