module.exports = function startLogger(em) {
  em.onAny((e, d) => {
    console.log(e);
    console.log(`Body: ${JSON.stringify(d)}`);
  });
};
