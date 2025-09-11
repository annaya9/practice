import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import path from 'path';
import * as playwright from '@playwright/test';

export default tseslint.config(
  {
    ...eslint.configs.recommended,
    parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: path.resolve(),
    },
  },

 
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,

 
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.mjs'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  
  {
    ...playwright.configs['flat/recommended'],
    files: ['tests/**'], 
    rules: {
      ...playwright.configs['flat/recommended'].rules,
      
    },
  }
);

  