import { createMacro } from 'babel-plugin-macros';

module.exports = createMacro(({ references, babel: { types: t } }) => {
  if (references.thunk) {
    references.thunk.forEach(({ parentPath }) => {
      parentPath.replaceWith(t.numericLiteral(999));
    });
  }
});
