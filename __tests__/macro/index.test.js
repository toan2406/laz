import pluginTester from 'babel-plugin-tester';
import plugin from 'babel-plugin-macros';

pluginTester({
  plugin,
  snapshot: true,
  babelOptions: { filename: __filename },
  tests: [
    `
      import { thunk } from '../../src/macro';

      thunk(1);
    `,
  ],
});
