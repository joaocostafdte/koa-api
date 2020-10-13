const DeltasController = require("../controllers/delta.controller");

module.exports = (router) => {
  router.get("/deltas", DeltasController().findAll);
};
