import koaRouter from 'koa-router';
import fetchPosts from '../controllers/fetchPosts';
import login from '../controllers/login';

const router = koaRouter();
router.prefix('/api');

router.get('/posts', fetchPosts);
router.post('/login', login);


export default router;
