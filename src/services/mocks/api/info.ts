import {
  DefaultBodyType,
  PathParams,
  ResponseComposition,
  RestContext,
  RestRequest,
} from 'msw';

export const getInfo = (
  req: RestRequest<never, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  const statusCode = 200;
  const data = { name: 'NextJS' };

  return res(ctx.status(statusCode), ctx.json(data));
};
