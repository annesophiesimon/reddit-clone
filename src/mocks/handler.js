import { rest } from 'msw';
import { setupServer } from 'msw/lib/node';

import {
  resultMockSubreddit,
  resultMockSewing,
  resultMockCrossfit,
  resultMockBachata,
  resultMockEmptyPost
} from './result';

const API_ROOT = 'https://www.reddit.com';
export const handlers = [
  rest.get(`${API_ROOT}/subreddits.json`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(resultMockSubreddit), ctx.delay(50));
  }),
  rest.get(`${API_ROOT}/r/sewing.json`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(resultMockSewing), ctx.delay(150));
  }),
  rest.get(`${API_ROOT}/r/crossfit.json`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(resultMockCrossfit), ctx.delay(150));
  }),
  rest.get(`${API_ROOT}/search.json`, (req, res, ctx) => {
    const q = req.url.searchParams.get('q');
    if (q === 'bachata') {
      return res(ctx.status(200), ctx.json(resultMockBachata), ctx.delay(150));
    } else {
      return res(ctx.status(200), ctx.json(resultMockEmptyPost), ctx.delay(150));
    }
  })
];

export const server = setupServer(...handlers);

server.listen();
