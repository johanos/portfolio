// ********************
//	Johan's Portfolio
//	Copyright © 2022
// ********************

module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true
    },
    plugins: ['prettier', 'react', 'jsdoc', 'header'],
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:prettier/recommended',
        'plugin:jsdoc/recommended'
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        'header/header': [
            'error',
            'line',
            [
                ` ${'*'.repeat(20)}`,
                "\tJohan's Portfolio",
                {
                    pattern: ['\tCopyright © \\d{4}'],
                    template: [`\tCopyright © ${new Date().getFullYear()}`]
                },
                ` ${'*'.repeat(20)}`
            ],
            2
        ],
        'react/prefer-stateless-function': ['off'],
        'jsx-a11y/click-events-have-key-events': ['off'],
        'jsx-a11y/no-static-element-interactions': ['off'],
        'prettier/prettier': [
            'error',
            {
                'endOfLine': 'auto'
            }
        ]
    }
};
