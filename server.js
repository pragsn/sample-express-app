const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello There! i am prajnabbhjfyugy')
})


app.get('/hey', (req, res) => {
  res.send('sure!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})