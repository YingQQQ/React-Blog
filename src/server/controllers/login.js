import User from '../models/user';

export default async (ctx, next) => {
  const body = ctx.request.body;
  const _name = body.name;
  const password = body.password;
  const user = await User.findOne({
    name: _name
  })
  .exec();
  if (!user) {
    ctx.body = {
      errors: {
        name: '用户名错误'
      }
    };
    return next();
  }
  const isMatch = user.comparePassword(password, user.password);
  ctx.body = !isMatch ? {
    errors: {
      password: '密码错误'
    }
  } : {
    errors: false
  };
};
