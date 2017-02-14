import koaRouter from 'koa-router';
import fetchPosts from '../controllers/fetchPosts';
import savePosts from '../controllers/savePosts';
import login from '../controllers/login';

const router = koaRouter();
router.prefix('/api');

router.get('/posts', fetchPosts);
router.post('/save', savePosts);
router.post('/login', login);


export default router;
