input => input.sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n')


console.log(["alpha",
    "beta",
    "gamma"]);