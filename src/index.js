const express = require('express')

const app = express();

app.get('/', (req,res) => {
  res.send("hello world");
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
