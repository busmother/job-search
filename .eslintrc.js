module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "vue/no-multiple-template-root": "off",
        'vue/multi-word-component-names': ['error', {
            'ignores': ['default', 'Hero', 'Headline', 'headline']
          }]
    }
};
