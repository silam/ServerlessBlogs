const express = require("express")

const app = express()

console.log(app)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server listening on ${PORT}`));
