const app = require('./server/server');
const config = require('./server/config/config')
console.log('node env', process.env.MY_VAR)
app.listen(config.port, () => {
    console.log(`server is listening on port: ${config.port}`)
})