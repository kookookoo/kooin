const Router = require('koa-router');

const auth = new Router();

auth.get('/', (ctx) => {
    ctx.body = "라우터 겟!";
});


module.exports = auth;