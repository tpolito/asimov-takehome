import type { FastifyInstance } from 'fastify';
import * as data from './data/rna.json';

interface IDataObj {
  x: number[];
  x0: number[];
  y: number[];
  color: string[];
}

async function routes(fastify: FastifyInstance) {
  fastify.get('/', async (request, reply) => {
    reply.send({ hello: 'world' });
  });

  fastify.get('/rna', async (request, reply) => {
    let { counts, annotations } = data;

    let dataObj: IDataObj = {
      x: [],
      x0: [],
      y: [],
      color: [],
    };

    counts.forEach((d: any) => {
      dataObj.x.push(d.range[0].end);
      dataObj.x0.push(d.range[0].start);
      dataObj.y.push(d.count);
      dataObj.color.push(annotateColor(d.range[0].start));
    });
    reply.send(JSON.stringify({ dataObj, annotations }));
  });
}

function annotateColor(value: number): string {
  if (value >= 201 && value <= 1845) {
    return '#3D00EF';
  } else if (value >= 2246 && value <= 3419) {
    return '#990BAF';
  } else if (value >= 3820 && value <= 3419) {
    return '#AF218C';
  } else {
    return '#F1622B';
  }
}

export default routes;
