import router from './api';
import reactRender from './reactRender';

export default async (ctx, next) => {
  if (ctx.path.match(/^\/api/)) {
    return await router.routes()(ctx, next);
  }
  await reactRender(ctx, next);
};
