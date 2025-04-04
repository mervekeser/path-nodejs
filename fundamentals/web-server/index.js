const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res
      .writeHead(200, { "Content-Type": "text/html" })
      .write("<h2>Welcome to Homepage</h2>");
  } else if (url === "/about") {
    res
      .writeHead(200, { "Content-Type": "text/html" })
      .write("<h2>Welcome to About</h2>");
  } else if (url === "/contact") {
    res
      .writeHead(200, { "Content-Type": "text/html" })
      .write("<h2>Welcome to Contact</h2>");
  } else {
    res
      .writeHead(404, { "Content-Type": "text/html" })
      .write("<h2>404 Page not found</h2>");
  }
  res.end();
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
