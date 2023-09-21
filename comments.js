// Create a web server
// Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
// Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
// Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
// Node.js is used by tens of thousands of companies in production, including Netflix, Uber and others.

// 1. Import the express module
const express = require('express');

// 2. Create an instance of express
const app = express();

// 3. Create a port to listen to
const port = 3000;

// 4. Create a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 5. Listen to the port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// 6. Run the server
// node comments.js
// http://localhost:3000/
// http://localhost:3000/?name=John
// http://localhost:3000/?name=John&age=20
// http://localhost:3000/?name=John&age=20&city=New%20York
// http://localhost:3000/?name=John&age=20&city=New%20York&country=USA
// http://localhost:3000/?name=John&age=20&city=New%20York&country=USA&job=Developer

// 7. Install nodemon
// npm install -g nodemon

// 8. Run the server with nodemon
// nodemon comments.js

// 9. Install express-generator
// npm install express-generator -g

// 10. Create an express app
// express express-app

// 11. Install dependencies
// cd express-app
// npm install

// 12. Run the server
// npm start

// 13. Install nodemon
// npm install -g nodemon

// 14. Run the server with nodemon
// nodemon ./bin/www