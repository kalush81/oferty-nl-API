const app = require("./server/server")
const config = require("./server/config/config")
const logger = require("./server/util/logger")

require("mongoose")
  .connect(config.db.uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    logger.log("connected to db")
  })
  .catch((err) => {
    logger.log('problem while connecting with db ', err)
  });

app.listen(config.port, () => {
  logger.log(`server is listening on port: ${config.port}`)
})