import pluginOxlint from 'eslint-plugin-oxlint';
import pluginVue from 'eslint-plugin-vue';
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility';
import { globalIgnores } from 'eslint/config';

import {
    configureVueProject,
    defineConfigWithVueTs,
    vueTsConfigs
} from '@vue/eslint-config-typescript';

configureVueProject({ scriptLangs: ['ts', 'tsx'] });

export default defineConfigWithVueTs(
    {
        name: 'app/files-to-lint',
        files: ['**/*.{ts,mts,tsx,vue}'],
    },

    globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

    pluginVue.configs['flat/essential'],
    vueTsConfigs.recommended,
    ...pluginVueA11y.configs['flat/recommended'],
    ...pluginOxlint.configs['flat/recommended'],
);
