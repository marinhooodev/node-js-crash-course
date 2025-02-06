import path, { basename } from "path"
import url from "url"

const filePath = './dir1/dir2/text.txt'

// basename()
console.log(path.basename(filePath))

// dirname()
console.log(path.dirname(filePath))

// extname() 
console.log(path.extname(filePath))

// parse() 
console.log(path.parse(filePath))

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log("Filename: %s, Dirname: %s", __filename, __dirname)

// join() - This function fixes slashes (/) or backslashes () in the actual directory name, because Windows, Linux, and other operating systems use different types of paths, such as 'Users\gabriel' and 'users/gabriel'.

const filePath2 = path.join(__dirname, "maro1", "maro2", "text.txt") 
console.log(filePath2)

// resolve()
const filePath3 = path.join(__dirname, "maro1", "maro2", "text.txt") 
console.log(filePath3)