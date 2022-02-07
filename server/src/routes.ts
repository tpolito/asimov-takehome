import type { FastifyInstance } from 'fastify';
import * as data from './data/rna.json';

interface IDataObj {
  x: number[];
  x0: number[];
  y: number[];
  color: string[];
  labels: string[];
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
      labels: [],
    };

    counts.forEach((d: any) => {
      dataObj.x.push(d.range[0].end);
      dataObj.x0.push(d.range[0].start);
      dataObj.y.push(d.count);

      const { color, label } = getAnnotationInfo(
        annotations[0],
        d.range[0].start
      );

      dataObj.color.push(color);
      dataObj.labels.push(label);
    });
    reply.send(JSON.stringify({ dataObj }));
  });
}

function getAnnotationInfo(
  annotations: any,
  value: number
): { color: string; label: string } {
  let colorList = ['#3D00EF', '#990BAF', '#F1622B', '#AF218C'];
  let color = '';
  let label = '';
  let indx = 0;
  annotations.forEach((anno: any) => {
    let start = anno.range[0].start;
    let end = anno.range[0].end;

    if (value >= start && value <= end) {
      color = colorList[indx % 4];
      label = anno.Gene;

      return { color, label };
    }

    indx++;
  });
  return { color, label };
}

export default routes;
