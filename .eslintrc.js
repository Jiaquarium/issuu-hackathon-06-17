module.exports = {
    extends: 'airbnb',
    env: {
        'browser': true,
        'es6': true,
    },
    parser: 'babel-eslint',
    root: true,
    parserOptions: {
        'ecmaVersion': 6,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true,
            'experimentalObjectRestSpread': true,
        },
    },
    plugins: [ 'babel', 'flowtype' ],
    settings: {
        'import/ignore': ['.(scss|css)$', 'node_modules'],
    },
    rules: {
        'arrow-parens': ['error', 'as-needed'],
        'arrow-body-style': ['error', 'as-needed'],
        'comma-dangle': ['error', 'always-multiline'],
        'consistent-return': 'error',
        'func-names': 'off',
        'import/named': 'error',
        'import/no-named-as-default-member': 'off',
        'import/prefer-default-export': 'off',
        'import/no-amd': 'error',
        'import/no-commonjs': 'error',
        'import/no-duplicates': 'error',
        'import/extensions': ['error', 'always', { 'js': 'never' }],
        "import/no-extraneous-dependencies": ["error", {
            "devDependencies": [
                "**/*.test.js",
                "**/fixtures/*.js",
                "webpack.config.*.js",
                "src/index.js",
                "devServer.js"
            ]
        }],
        'no-duplicate-imports': 'off',
        'import/order': ['error', {
            'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        }],
        'indent': ['error', 4, {'SwitchCase': 1}],
        'linebreak-style': ['error', 'unix'],
        'max-len': ['error', 200, 4, {'ignoreComments': true, 'ignoreUrls': true}],
        'no-cond-assign': ['error', 'always'],
        'no-multi-str': 'off',
        'no-underscore-dangle': 'off',
        'no-param-reassign': 'error',
        'no-return-assign': 'error',
        'no-unneeded-ternary': 'error',
        'no-unused-vars': ['error', {'vars': 'all', 'args': 'none'}],
        'prefer-arrow-callback': 'error',
        'prefer-rest-params': 'error',
        'prefer-template': 'error',
        'quotes': ['error', 'single'],
        'react/jsx-closing-bracket-location': 'error',
        'react/jsx-curly-spacing': ['error', 'never'],
        'react/jsx-first-prop-new-line': 'error',
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-uses-react': 'warn',
        'react/jsx-uses-vars': 'warn',
        'react/jsx-filename-extension': 'off',
        'react/no-did-mount-set-state': 'error',
        'react/no-set-state': 'off',
        'react/prefer-es6-class': 'off',
        'react/prefer-stateless-function': 'error',
        'react/sort-prop-types': 'error',
        'react/forbid-prop-types': 'off',
        'semi': ['error', 'always'],
        'space-before-function-paren': ['error', 'never'],
        'space-before-function-paren': ['error', 'never'],
        'space-in-parens': ['error', 'never'],
        'space-in-parens': ['error', 'never'],

        'jsx-a11y/label-has-for': 'off',
        // We should enable these:
        'jsx-a11y/img-has-alt': 'off',
        'arrow-body-style': 'off',
        'no-use-before-define': 'off',
        'flowtype/define-flow-type': 'warn',

        // 'flowtype/type-id-match': [
        //     'error',
        //     '^([A-Z][a-z0-9]+)+Type$'
        // ],
    }
}
