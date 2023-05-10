import { rest } from 'msw';
import { getInfo } from '@/services/mocks/api/info';
import { API_PATH } from '@/constants/api';

export const handlers = [
  rest.get(API_PATH.INFO, (req, res, ctx) => {
    return getInfo(req, res, ctx);
  }),
];
