const Koa = require('koa');
const app = module.exports = new Koa();

app.use(async function(ctx) {
  ctx.body = 'Hello Phoenix, this is your first Koa project, good luck!';
});

if (!module.parent) app.listen(3000);
