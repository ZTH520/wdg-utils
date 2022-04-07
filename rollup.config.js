export default {
  input: './src/index.js',
  output: [
    {
      format: 'cjs',
      file: 'dist/wdg-utils.cjs.js',
      name: 'wdg-utils',
    },
    {
      format: 'esm',
      file: 'dist/wdg-utils.esm.js',
      name: 'wdg-utils',
    },
    {
      format: 'umd',
      file: 'dist/wdg-utils.umd.js',
      name: 'wdg-utils',
      minifyInternalExports: true,
    },
  ],
};
