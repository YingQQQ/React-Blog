import Posts from '../models/posts';


export default async (ctx) => {
  const postsData = await Posts.find({})
    .sort('meta.updateAt')
    .exec();
  ctx.body = {
    posts: postsData
  };
};
