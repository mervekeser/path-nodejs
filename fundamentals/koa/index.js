const Koa = require("koa");
const Router = require("@koa/router");

const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
  ctx.body = "<h1>Welcome to Homepage</h1>";
});

router.get("/about", (ctx) => {
  ctx.body = "<h1>Welcome to About Page</h1>";
});

router.get("/contact", (ctx) => {
  ctx.body = "<h1>Welcome to Contact Page</h1>";
});

app.use(router.routes()).use(router.allowedMethods());

app.use(async (ctx) => {
  ctx.status = 404;
  ctx.body = "<h1>404 Page not found</h1>";
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
