module.exports = {
    root: true, //此项是用来告诉eslint找当前配置文件不能往父级查找
    env: {
        node: true //此项指定环境的全局变量，下面的配置指定为node环境
    },
    // 此项是用来配置vue.js风格，就是说写代码的时候要规范的写，如果你使用vs-code我觉得应该可以避免出错
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    //规则配置写在这里
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "indent": [1, 4], //缩进风格
    },
    parserOptions: {
        //此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
        parser: 'babel-eslint'
    }
}
