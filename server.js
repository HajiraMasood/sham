
import { broadcastDevReady } from "@remix-run/node";
import * as build from "./build/index.js";

import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
    if (process.env.NODE_ENV === "development") {
        broadcastDevReady(build);
      }
 
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()