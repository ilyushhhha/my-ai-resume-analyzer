const express = require('express'); // Import Express
const app = express(); // Create an Express application
const PORT = process.env.PORT || 3000; // Set the port

// Define a basic route
app.get('/', (req, res) => {
    res.send('Hello from the backend!'); // Response for the root route
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // Log the server URL
});
