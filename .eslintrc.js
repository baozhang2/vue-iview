module.exports = {
    root: true,

    parserOptions: {
        sourceType: 'module',
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
        node: true
    },
    extends: [
        "plugin:vue/essential",
        "@vue/standard"
    ],
    plugins: [
        'vue'
    ],
    'rules': {
        'arrow-parens': 0,
        'generator-star-spacing': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        "no-unused-vars": 0,
        "semi-spacing": 0,
        "semi": 0,
        "eqeqeq": 0,
        "quotes": 0,
        "no-spaced-func": 0,
        "func-names": 0,
        "space-after-keywords": 0,
        "no-func-assign": 2,
        "space-before-function-paren": [0, "always"],
        "key-spacing": [0, {
            "no-multiple-empty-lines": [0, { "max": 100 }],
            "no-mixed-spaces-and-tabs": 0
        }],
        "vue/no-parsing-error": [2,{ "x-invalid-end-tag": false }],
        "space-before-blocks": 0,
        "indent": 0,//缩进风格
        "no-tabs": 0
    }
} 