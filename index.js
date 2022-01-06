//Dependencies
const Fs = require("fs")

//Variables
const Self_Args = process.argv.slice(2)

//Main
if(!Self_Args.length){
    console.log("node index.js <input> <output>")
    process.exit()
}

if(!Fs.existsSync(Self_Args[0])){
    console.log("input is invalid.")
    process.exit()
}

if(!Self_Args[1]){
    console.log("output is invalid.")
    process.exit()
}

const input_data = Fs.readFileSync(Self_Args[0], "utf8").replace(/\r/g, "").split("\n")

if(!input_data.length){
    console.log("input data is empty.")
    process.exit()
}

console.log(`Saving the results to ${Self_Args[1]}`)
Fs.writeFileSync(Self_Args[1], JSON.stringify(input_data, null, 2), "utf8")
console.log(`Results successfully saved to ${Self_Args[1]}`)
