import terser from '@rollup/plugin-terser';
import del from 'rollup-plugin-delete';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json' with { type: 'json' };

export default [
  {
    input: 'src/dictionary.js',
    output: [
      {
        name: 'nanoid-dictionary',
        file: './dist/nanoid-dictionary.umd.js',
        format: 'umd'
      },
      {
        name: 'nanoid-dictionary',
        file: './dist/nanoid-dictionary.cjs',
        format: 'cjs',
      },
      { name: 'nanoid-dictionary',
        file: './dist/nanoid-dictionary.esm.js',
        format: 'es'
      },
    ],
    plugins: [
      del({ targets: 'dist/*' }),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
            emitDeclarationOnly: true,
          },
        },
        include: ['src/dictionary.js'],
      }),
      terser(),
    ],
  },
];