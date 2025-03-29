import koa from 'koa';
import koaBodyParser from '@koa/bodyparser';
import koaMulter from '@koa/multer';
import router from './router';

const app = new koa();
app.use(koaBodyParser());
app.use(
  koaMulter({
    dest: './server/uploads',
    fileFilter: (req, file, cb) => {
      // 设置文件名编码
      file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8');
      cb(null, true);
    },
  }).any()
);
app.use(router.routes());
app.use(router.allowedMethods());

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
// 添加热更新处理
// 热更新之后，关闭上一个服务，之后启动新服务
// @ts-ignore
if (import.meta.hot) {
  // @ts-ignore
  import.meta.hot.on('vite:beforeFullReload', () => {
    server.close();
  });
}
