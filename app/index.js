require('dotenv').config()
import Hapi from 'hapi'
import glob from 'glob'
import path from 'path'

const server = new Hapi.Server({
  port: process.env.PORT || 4000,
  host: '0.0.0.0',
  routes: {
    cors: {
      origin: ['*']
    }
  }
})

server.route(glob.sync(path.join(__dirname, '../**/routes/*.js')).map(require))

const bootstrap = async () => {
  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

bootstrap()