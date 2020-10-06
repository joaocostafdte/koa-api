const deltasutil = require("../utils/create.deltas");

//Db mockado
let deltas = deltasutil.createDeltaList(9);

async function findAll(ctx) {
  try {
    ctx.body = { deltas };
    updateDeltas();
  } catch (err) {
    ctx.response.status = 500;
    ctx.body = { message: "Problema ao recuperar todos os deltas" };
  }
}

function updateDeltas() {
  deltas = deltasutil.updateDeltaList(deltas);
}

module.exports = {
  findAll,
};
