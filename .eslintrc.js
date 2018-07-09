// React config 1 Jul 2018
// 21 Jun:
// Added Airbnb-base guide and removed all other rules
// Changed server to default (esprima)
// Added a few custom rules

module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    'extends': [
        'airbnb-base',
    ],
    'parser': 'esprima',
    'parserOptions': {
        'ecmaVersion': 9,
        'sourceType': 'script',
        'ecmaFeatures': {
            'impliedStrict': true,
            'jsx': false,
        },
    },
    'rules': {
    // QoL
    'no-unused-expressions': 'off',
    'no-undef': 'off',
    'no-console': 'off',
    'no-plus': {
        'allowForLoopAfterthoughts': true
    }
    // Permanent preferences
  }
}