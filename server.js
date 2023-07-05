const http = require("http");
const port = 3000;

const routes = {
  "/": "Node Course",
  "/books": "book page",
  "/authors": "authors list",
  "/publish_company": "publish company",
  "/about": "Project Info",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(routes[req.url]);
});

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
