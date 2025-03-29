import koa from 'koa';
import koaRouter from '@koa/router';
import koaBodyParser from '@koa/bodyparser';
import koaMulter from '@koa/multer';

const app = new koa();
const router = new koaRouter();
app.use(koaBodyParser());
app.use(koaMulter().any());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000, () => {
  console.log('server is running on port 3000');
});

router.post('/upload', (ctx, next) => {
  ctx.body = {
    code: 200,
    message: 'success',
    data: ctx.request.files,
  };
});
