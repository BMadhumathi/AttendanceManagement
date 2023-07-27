const express = require('express');
const cors = require('cors');
const app = express();

// Allow all origins (*). You can restrict it to specific origins in production.
app.use(cors());

// Your other middleware and routes here...

// Start the server
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
