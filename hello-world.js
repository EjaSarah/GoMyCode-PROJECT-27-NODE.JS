// program that prints hello world in the console
function helloWorld(){
    console.log('Hello World');
}
helloWorld();

//  A server that runs at port 300

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello Node!!!!</h1>\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// require the system to create a file named "welcome.text"..containing "hello node"

const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File has been saved!');
});


// create a program that reads and 'console.log' data from "hello.txt"

const fs = require('fs');

fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
