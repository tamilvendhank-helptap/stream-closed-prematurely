import fs from 'fs';

import Fastify from 'fastify';

const fastify = Fastify({
  logger: true
})

// Declare a route
fastify.get('/', async function handler (request, reply) {
  const stream = fs.createReadStream('./sample.txt', 'utf8')
  reply.header('Content-Type', 'application/octet-stream')
  reply.send(stream);
})

// Run the server!
try {
  await fastify.listen({ port: 3456 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}