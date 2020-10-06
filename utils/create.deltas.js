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

function createDeltaList(num) {
  const deltas = [];
  for (let i = 0; i < num; i++) {
    deltas.push(generateDelta());
  }
  return deltas;
}

function updateDeltaList(deltas) {
  return deltas.map((delta) => {
    return Object.assign(delta, { status: getRandomFromList(status, 0, 3) });
  });
}

function getRandomFromList(list, min, max) {
  return list[getRandomNumber(min, max)];
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
  return getRandomFromList(names, 0, 9);
}

function randomizeDeltaStatus() {
  return getRandomFromList(status, 0, 3);
}

function randomizeDeltaSector() {
  return `P${getRandomNumber(1, 100)}`;
}

function randomizeDeltaName() {
  return `d${getRandomNumber(1, 50)}`;
}

function getRandomNumber(min, max) {
  return Math.floor((max - min) * Math.random() + min);
}

module.exports = {
  createDeltaList,
  updateDeltaList,
};
