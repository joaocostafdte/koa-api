//Db mockado
const deltas = [
    { name: "d01", driver: 'Felipe', sector: 'Oficina', status: 'maintenance'},
    { name: "d02", driver: 'Carlos' ,sector: 'P727', status: 'available'},
    { name: "d03", driver: 'Jorge', sector: 'P212', status: 'unavailable' },
    { name: "d04", driver: 'Carlos', sector: 'P111', status: 'inUse' }
]

async function findAll(ctx) {
    try {
        ctx.body = {deltas};
    } catch (err){
        ctx.response.status = 500;
        ctx.body = {message: 'Problema ao recuperar todos os deltas'};
    }
}

module.exports ={
    findAll
}