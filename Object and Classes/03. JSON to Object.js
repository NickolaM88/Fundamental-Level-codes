function jsonToObject(objectAsString) {
    let object = JSON.parse(objectAsString);

    for (let key of Object.keys(object)) {
        console.log(`${key}: ${object[key]}`);
    }
}

jsonToObject(`{"name": "George", "age": 40, "town": "Sofia"}`);