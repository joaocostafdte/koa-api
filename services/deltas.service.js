module.exports = function DeltasService() {

  const names = [
    "João",
    "Paulo",
    "Pedro",
    "Artur",
    "Gustavo",
    "Emanoel",
    "Thiago",
    "Eduardo",
    "Victor",
    "Gabriel",
    "Alisson",
  ];
  
  const status = ["maintenance", "available", "unavailable", "inUse"];

  function getRandomFromList(list, max) {
    return list[getRandomNumber(max)];
  }

  function generateDelta() {
    return {
      name: randomizeDeltaName(),
      driver: randomizeDeltaDriver(),
      sector: randomizeDeltaSector(),
      status: randomizeDeltaStatus(),
    };
  }

  function randomizeDeltaDriver() {
    return getRandomFromList(names, 10);
  }

  function randomizeDeltaStatus() {
    return getRandomFromList(status, 3);
  }

  function randomizeDeltaSector() {
    return `P${getRandomNumber(100)}`;
  }

  function randomizeDeltaName() {
    return `D${getRandomNumber(50)}`;
  }

  function getRandomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  return {
    createDeltaList(num) {
      const deltas = [];
      for (let i = 0; i < num; i++) {
        deltas.push(generateDelta());
      }
      return deltas;
    },
    updateDeltaList(deltas) {
      return deltas.map((delta) =>  Object.assign(delta, { status: getRandomFromList(status, 3) }));
    }
  }   
}
