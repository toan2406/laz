const Stream = {
  take: n => s => {
    if (!s.length || n <= 0) return [];
    const [h, t] = s;
    return [h, () => Stream.take(n - 1)(t())];
  },
  map: f => s => {
    if (!s.length) return [];
    const [h, t] = s;
    return [() => f(h()), () => Stream.map(f)(t())];
  },
  toArray: s => {
    if (!s.length) return [];
    const [h, t] = s;
    return [h(), ...Stream.toArray(t())];
  },
};

module.exports = Stream;
