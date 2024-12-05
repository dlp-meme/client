import pluginVitest from '@vitest/eslint-plugin';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import eslintPluginNoRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import pluginVue from 'eslint-plugin-vue';

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
    plugins: { eslintPluginNoRelativeImportPaths },
    rules: {
      'eslintPluginNoRelativeImportPaths/no-relative-import-paths': [
        'error',
        { rootDir: 'src', prefix: '@' },
      ],
      'no-return-await': 'error',
      'no-async-promise-executor': 'error',
      'array-callback-return': 'error',
      'no-await-in-loop': 'error',
      'no-class-assign': 'error',
      'no-cond-assign': ['error', 'always'],
      'no-constructor-return': 'error',
      'no-plusplus': 'error',
      'prettier/prettier': 'error',
    },
  },

  {
    name: 'app/files-to-ignore',
    ignores: [
      '**/dist/**',
      '**/dist-ssr/**',
      '**/coverage/**',
      '**/src-tauri/**',
      '**/nightwatch.d.ts',
    ],
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },
  skipFormatting,
];
