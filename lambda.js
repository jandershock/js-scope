const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 8)

    const namer = function () {
        const suffix = " the Llama"
        const name = possibleNames[randomizer]
        return name + suffix;
    }

    return namer;
}

for (let i=0; i<10; i++){
    let nameMaker = llamaNamer()
    console.log(nameMaker())
}












// const llamaNamer = function () {
//     const namer = function () {
//         const suffix = " the Llama"
//         const name = possibleNames[randomizer]
//         return name + suffix;
//     }

//     const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
//     const randomizer = Math.floor(Math.random() * 8)

//     return namer;
// }

// for (let i=0; i<10; i++){
//     let nameMaker = llamaNamer()
//     console.log(nameMaker())
// }