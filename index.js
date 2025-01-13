// const {generateRandomNumber, celsiusToFarenheit} = require("./utils")

// console.log(`Random number: ${generateRandomNumber()}`)


// console.log(`Converted result is: ${celsiusToFarenheit(0)}`)


import { getPosts, getPostsLength } from "./postController.js";

console.log(getPosts())
console.log(`Posts length is: ${getPostsLength()}`)