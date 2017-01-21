module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    'no-param-reassign': ["error", { "props": false }],
    'no-shadow': ["error", { "allow": ["state", "request"] }],
    'no-unused-vars': ["error", { "caughtErrors": "none" }],
    'no-unused-vars': ["error", {"args": "none"}],
    'no-console': ["error", { allow: ["warn", "error", "log"]}],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
