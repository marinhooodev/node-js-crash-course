import http from "http";
import path from "path"
import url from 'url'


const PORT = process.env.PORT;

// Get current path
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname();




const server = http.createServer((req, res) => {
    try {
        // Check if GET request

        if (req.method !== "GET") {
            throw new Error("Method not allowed");
        }

        if (req.url === "/") {
            res.writeHead(200, { "content-type": "text/html" });
            res.end('<h1 style="font-family: monospace;">Home Page</h1>');
            return;
        }

        if (req.url === "/about") {
            res.writeHead(200, { "content-type": "text/html" });
            res.end('<h1 style="font-family: monospace;">About</h1>');
            return;
        }

        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>Not Found</h1>");

    } catch (error) {
        res.writeHead(500, { "content-type": "text/plain" });
        res.end('Server Error');
    }

    if (req.url === "/") {
    } else if (req.url === "/about") {
    } else {
    }
});

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
