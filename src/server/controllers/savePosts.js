import Posts from '../models/posts';

export default async (ctx) => {
  const body = ctx.request.body;
  const _post = new Posts(body);
  await _post.save();
  ctx.status = 200;
};
