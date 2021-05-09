const app = require("./server/server");
const config = require("./server/config/config");

const logger  = require('./server/util/logger');

app.listen(config.port, () => {
    logger.log(`server is listening on port: ${config.port}`)
});


