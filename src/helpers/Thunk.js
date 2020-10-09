const Thunk = {
  lift: f => t => () => f(t()),
  eval: t => t(),
};

module.exports = Thunk;
