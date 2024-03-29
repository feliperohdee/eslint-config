module.exports = {
    'env': {
        'browser': true,
        'es2017': true,
        'mocha': true,
        'jest': true,
        'node': true,
        'webextensions': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 2022,
        'ecmaFeatures': {
            'jsx': true
        }
    },
    'rules': {
        'no-console': 0,
        'array-callback-return': 'warn',
        'comma-dangle': ['warn', 'never'],
        'dot-location': ['warn', 'property'],
        'eqeqeq': ['warn', 'allow-null'],
        'new-parens': 'warn',
        'no-array-constructor': 'warn',
        'no-buffer-constructor': 'warn',
        'no-caller': 'warn',
        'no-cond-assign': ['warn', 'except-parens'],
        'no-const-assign': 'warn',
        'no-control-regex': 'warn',
        'no-delete-var': 'warn',
        'no-dupe-args': 'warn',
        'no-dupe-class-members': 'warn',
        'no-dupe-keys': 'warn',
        'no-duplicate-case': 'warn',
        'no-empty-character-class': 'warn',
        'no-empty-pattern': 'warn',
        'no-eval': 'warn',
        'no-ex-assign': 'warn',
        'no-extend-native': 'warn',
        'no-extra-bind': 'warn',
        'no-extra-label': 'warn',
        'no-fallthrough': 'warn',
        'no-func-assign': 'warn',
        'no-implied-eval': 'warn',
        'no-invalid-regexp': 'warn',
        'no-iterator': 'warn',
        'no-label-var': 'warn',
        'no-labels': ['warn', {
            'allowLoop': true,
            'allowSwitch': false
        }],
        'no-lone-blocks': 'warn',
        'no-loop-func': 'warn',
        'no-mixed-operators': [
            'warn', {
                'groups': [
                    ['&', '|', '^', '~', '<<', '>>', '>>>'],
                    ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                    ['&&', '||'],
                    ['in', 'instanceof']
                ],
                'allowSamePrecedence': false
            }
        ],
        'no-multi-str': 'warn',
        'no-multiple-empty-lines': ['warn', {
            'max': 1
        }],
        'no-native-reassign': 'warn',
        'no-negated-in-lhs': 'warn',
        'no-new-func': 'warn',
        'no-new-object': 'warn',
        'no-new-symbol': 'warn',
        'no-new-wrappers': 'warn',
        'no-obj-calls': 'warn',
        'no-octal': 'warn',
        'no-octal-escape': 'warn',
        'no-redeclare': 'warn',
        'no-regex-spaces': 'warn',
        'no-restricted-syntax': ['warn', 'WithStatement'],
        'no-script-url': 'warn',
        'no-self-assign': 'warn',
        'no-self-compare': 'warn',
        'no-sequences': 'warn',
        'no-shadow-restricted-names': 'warn',
        'no-sparse-arrays': 'warn',
        'no-this-before-super': 'warn',
        'no-throw-literal': 'warn',
        'no-undef': 'warn',
        'no-restricted-globals': 'error',
        'no-unexpected-multiline': 'warn',
        'no-unreachable': 'warn',
        'no-unused-expressions': 0,
        'no-unused-labels': 'warn',
        'no-unused-vars': [
            'warn', {
                'args': 'none',
                'ignoreRestSiblings': true
            }
        ],
        'no-use-before-define': [
            'warn', {
                'functions': false,
                'classes': false,
                'variables': false
            }
        ],
        'no-useless-computed-key': 'warn',
        'no-useless-concat': 'warn',
        'no-useless-constructor': 'warn',
        'no-useless-escape': 0,
        'no-useless-rename': [
            'warn', {
                'ignoreDestructuring': false,
                'ignoreImport': false,
                'ignoreExport': false
            }
        ],
        'no-with': 'warn',
        'no-whitespace-before-property': 'warn',
        'require-yield': 'warn',
        'semi': 'warn',
        'rest-spread-spacing': ['warn', 'never'],
        'strict': ['warn', 'never'],
        'unicode-bom': ['warn', 'never'],
        'use-isnan': 'warn',
        'valid-typeof': 'warn',
        'getter-return': 'warn',
        'quotes': ['warn', 'single', {
            'allowTemplateLiterals': true
        }]
    }
};