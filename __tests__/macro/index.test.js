import pluginTester from 'babel-plugin-tester';
import plugin from 'babel-plugin-macros';

pluginTester({
  plugin,
  title: 'laz macros',
  snapshot: true,
  babelOptions: { filename: __filename },
  tests: {
    'Thunk > any expression > wrap in a thunk': `
      import { thunk } from '../../src/macro';

      const lazy1 = thunk(1);
    `,
    'Stream > array literal > transform to stream structure': `
      import { stream } from '../../src/macro';

      const stream1 = stream([1, 2, 3]);
    `,
  },
});
