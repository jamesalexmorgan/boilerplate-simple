module.exports = {
  extends: ['airbnb'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  env: { browser: true },
  rules: { 'prettier/prettier': 'error' },
};
