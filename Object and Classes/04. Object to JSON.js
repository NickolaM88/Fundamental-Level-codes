function objectToJson (name, lastName, hairColor) {
    let object = {
        name,
        lastName,
        hairColor
    };

    let result = JSON.stringify(object);

  console.log(result);
}

objectToJson(`George`,`Jones`,`Brown`)