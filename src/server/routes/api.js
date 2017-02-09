import koaRouter from 'koa-router';
import fetchPosts from '../controllers/fetchPosts';

const router = koaRouter();
router.prefix('/api');

router.get('/posts', fetchPosts);


export default router;
