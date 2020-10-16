const DeltasService = require("../services/deltas.service")();
const emitter = require("../util/emitter");

module.exports = function DeltaController() {
  let deltas = DeltasService.createDeltaList(9);

  function updateDeltas() {
    deltas = DeltasService.updateDeltaList(deltas);
  }

  return {
    async findAll(ctx) {
      try {
        ctx.body = deltas;
        updateDeltas();
        emitter.emit("[INFO] : findAll()", { deltas });
      } catch (err) {
        ctx.response.status = 500;
        ctx.body = { message: "Problema ao recuperar todos os deltas" };
        emitter.emit("[ERROR] : findAll()", { error: err.message });
      }
    },
  };
};
