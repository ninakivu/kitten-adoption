const
  express = require('express'),
  app = express()

app.listen(3000, (err) => {
  console.log(err || "Server running on 3000.")
})