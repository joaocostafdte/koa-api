const Koa = require("koa");
const json = require("koa-json");
const KoaRouter = require("koa-router");
const bodyParser = require("koa-bodyparser");
const KoaCors = require("koa2-cors");
const startLogger = require("./util/logging");
const emitter = require("./util/emitter");

const app = new Koa();
const router = new KoaRouter();

startLogger(emitter);

app.use(json());

app.use(bodyParser());

app.use(KoaCors());

app.use(router.routes()).use(router.allowedMethods());

require("./routes/deltas.routes")(router);

app.listen(3001, () => console.log("Server running on port 3001"));
