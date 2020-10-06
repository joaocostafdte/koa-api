const Koa = require("koa");
const json = require("koa-json");
const KoaRouter = require("koa-router");
const bodyParser = require("koa-bodyparser");
const KoaCors = require("koa2-cors");
const KoaLogger = require("koa-logger");

const app = new Koa();
const router = new KoaRouter();

app.use(json());

app.use(bodyParser());

app.use(KoaCors());

app.use(KoaLogger());

app.use(router.routes()).use(router.allowedMethods());

require("./routes/deltas.routes")(router);

app.listen(3000, () => console.log("Server up on port 3000"));
