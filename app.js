// Import the necessary modules
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Create an instance of the Express application
const app = express();

// Integrate third-party middleware
// Logger Middleware: Morgan to log all incoming requests
app.use(morgan('dev'));

// Body Parser Middleware: to parse JSON bodies
app.use(bodyParser.json());

// Set up basic routes
// Root route to send a simple greeting
app.get('/', (req, res) => {
  res.send('Hello, World!');
  
});

// About route to send a brief description of the server
app.get('/about', (req, res) => {
  res.send('This is a basic Express server with middleware.');
 
});

// Handle non-existent routes
app.use((req, res) => {
  res.status(404).send('Route not found.');
});

// Listen on a specified port
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
