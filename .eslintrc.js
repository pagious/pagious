module.exports = {
    root   : true,
    parser : 'babel-eslint',
    env    : {
        browser: true,
        node   : true
    },
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    rules  : {
        indent: "off",
        "no-multi-spaces": "off",
        "brace-style": "off",
        "key-spacing": "off",
        "space-before-function-paren": "off"
    },
    globals: {}
}