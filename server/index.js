const express = require("express");
const app = express();

// Passport Config
require("./services/passport");

// Environment Variables
const PORT = process.env.PORT;

app.use("/auth", require("./routes/api/auth"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
