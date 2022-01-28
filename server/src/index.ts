import Fastify from 'fastify';
import routes from './routes';

const fastify = Fastify({
  logger: true,
});

fastify.register(routes);

// Run server
const PORT = process.env.PORT || 3001;
fastify.listen(PORT, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }

  fastify.log.info(`Server listening on ${address}`);
});
