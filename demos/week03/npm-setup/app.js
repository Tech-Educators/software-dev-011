//the old-fashioned way of importing data
// const cowsay = require("cowsay"); //commonjs

//the new flashy way of importing data
//For ES6 to work, we need to specify the type of app that we are running in the package.json
import cowsay from "cowsay"; //ES6

console.log(
  cowsay.say({
    text: "I am a mooooooooodule",
    e: "0o",
    t: "U",
  })
);

//REMEMBER to create a .gitignore file to ignore your node modules
//add the name of the folder or files thst you want to ignore
