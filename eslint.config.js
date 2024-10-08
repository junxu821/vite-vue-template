import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue, { rules } from 'eslint-plugin-vue';
import eslintConfigPrettier from 'eslint-config-prettier';
export default [
    { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
    {
        languageOptions: {
            globals: globals.browser,
            ecmaVersion: 12, // 使用最新的 ECMAScript 语法
            sourceType: 'module', // 代码是 ECMAScript 模块
            parserOptions: { parser: tseslint.parser }, // 使用 TypeScript 解析器,
            node: true
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs['flat/essential'],
    eslintConfigPrettier,
    { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },
    {
        rules: {
            'prettier/prettier': 'error'
        }
    },
    {
        ignores: [
            '**/dist',
            './src/main.ts',
            '.vscode',
            '.idea',
            '*.sh',
            '**/node_modules',
            '*.md',
            '*.woff',
            '*.woff',
            '*.ttf',
            'yarn.lock',
            'package-lock.json',
            '/public',
            '/docs',
            '**/output',
            '.husky',
            '.local',
            '/bin',
            'Dockerfile'
        ]
    },
    {
        extends: ['plugin:prettier/recommended']
    }
];
