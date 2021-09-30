const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our home page");
  } else if (req.url === "/about") {
    res.end("here is our short history");
  } else {
    res.end(`
    <h1>404 Page Not Found</h1>
    <p>we can't found the page you're looking for</p>
    <a href="/">Back to home</a>`);
  }
});

server.listen(5000);
