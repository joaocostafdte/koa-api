const deltasController = require("../controllers/delta.controller");

module.exports = (router) => {
  router.get("/deltas", deltasController.findAll);
};
