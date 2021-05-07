const app = require('./server/server');
console.log('node env', process.env.MY_VAR)
app.listen(3000)