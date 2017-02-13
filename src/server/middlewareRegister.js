import serve from 'koa-static';
import views from 'koa-views';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import router from './routes';
import PATHS from '../../webpack/path-help';

export default (app) => {
  mongoose.connect('mongodb://localhost/blog');
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('mongodb is working');
  });
  app.use(bodyParser());
  app.use(serve(PATHS.build));
  app.use(views(PATHS.views, {
    extension: 'ejs'
  }));
  app.use(router);
};
