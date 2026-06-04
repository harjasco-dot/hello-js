const express = require('express')
const app = express()
const port = 3000

app.use(express.json() )
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} ${new Date()}`);
  next();
})

app.get('/search/', (req, res) => {
  const id = req.query.id;
  console.log(id);
  res.send(id);
})
app.get("/", (req, res) => {
  res.send("Hello World!");
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})