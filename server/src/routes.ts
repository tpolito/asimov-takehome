import type { FastifyInstance } from 'fastify';
import * as data from './data/rna.json';

async function routes(fastify: FastifyInstance) {
  fastify.get('/', async (request, reply) => {
    reply.send({ hello: 'world' });
  });

  fastify.get('/rna', async (request, reply) => {
    reply.send(JSON.stringify(data));
  });
}

export default routes;
