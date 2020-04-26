module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: [
        'plugin:vue/recommended'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        parser: 'babel-eslint'
    },
    plugins: [
        'vue'
    ],
    rules: {
        'vue/html-indent': ['error', 4],
        'vue/multiline-html-element-content-newline': [
            'error',
            {
                ignoreWhenEmpty: true,
                allowEmptyLines: true
            }
        ],
        'semi': ['error', 'never', {
            'beforeStatementContinuationChars': 'never'
        }],
        'vue/no-v-html': 'off'
    }
}
