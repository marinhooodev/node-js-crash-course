import url from "url"

const urlString = "https://www.google.com/search?q=hello+world"

// URL Object

const urlObj = new URL(urlString)

console.log(urlObj.pathname)

// format 
console.log(url.format(urlObj))

// import.meta.url - actual file url
console.log(import.meta.url)

// fileURLToPath()
console.log(url.fileURLToPath(import.meta.url))

console.log(urlObj.search);

const params = new URLSearchParams(urlObj.search)
params.append("limit", "5")
params.delete("limit")
console.log(params)
console.log(params.get("q"))