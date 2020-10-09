import { createMacro } from 'babel-plugin-macros';

module.exports = createMacro(({ references, babel: { types: t }, state }) => {
  const generateLinkedList = elements => {
    if (!elements.length) return t.arrayExpression([]);

    const [head, ...tail] = elements;

    return t.arrayExpression([
      t.arrowFunctionExpression([], head),
      t.arrowFunctionExpression([], generateLinkedList(tail)),
    ]);
  };

  if (references.thunk) {
    references.thunk.forEach(({ parentPath }) => {
      const value = parentPath.node.arguments[0];
      parentPath.replaceWith(t.arrowFunctionExpression([], value));
    });
  }

  if (references.stream) {
    references.stream.forEach(({ parentPath }) => {
      const value = parentPath.node.arguments[0];
      parentPath.replaceWith(generateLinkedList(value.elements));
    });
  }
});
