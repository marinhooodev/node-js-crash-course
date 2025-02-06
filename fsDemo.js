// import fs from "fs"
import fs from "fs/promises";

// readFile() - callback

// fs.readFile('./text.txt', 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data)
// })

// readFileSync - Synchronous version
// const data = fs.readFileSync('./text.txt', "utf-8");
// console.log(data)

// readFile() - Promise .then()

// fs.readFile('./text.txt', 'utf-8')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

const readFile = async () => {
    try {
        const data = await fs.readFile("./text.txt", "utf-8");
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

// writeFile()
const writeFile = async () => {
    try {
        await fs.writeFile("./text.txt", "Hello World");
        console.log("File written to... ");
    } catch (error) {
        console.error(error);
    }
};

//appendFile()

const appendFile = async () => {
    try {
        await fs.appendFile('./text.txt', "\nThis is the appended text")
        console.log('File appended to...')
    } catch (error) {
        console.log(error);
    }
}

await writeFile();
await appendFile();
readFile();
