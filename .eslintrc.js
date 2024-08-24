module.exports = {
  parser: '@typescript-eslint/parser', // Define o parser para TypeScript
  parserOptions: {
    ecmaVersion: 2020, // Permite o uso de modernas funcionalidades ECMAScript
    sourceType: 'module', // Permite o uso de imports
    ecmaFeatures: {
      jsx: true, // Habilita JSX para arquivos .tsx
    },
  },
  extends: [
    'eslint:recommended', // Regras recomendadas do ESLint
    'plugin:@typescript-eslint/recommended', // Regras recomendadas para TypeScript
    'plugin:prettier/recommended', // Integra Prettier com o ESLint
    'next/core-web-vitals', // Regras recomendadas para Next.js
  ],
  plugins: ['@typescript-eslint'], // Adiciona o plugin TypeScript ao ESLint
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn', // Exemplo de regra para variáveis não utilizadas
    'prettier/prettier': ['error', { endOfLine: 'auto' }], // Regras para Prettier
    // 'no-undef': 'error', // Marca referências indefinidas como erro
    'no-unexpected-multiline': 'error', // Erro para quebras de linha inesperadas
  },
  settings: {
    react: {
      version: 'detect', // Detecta automaticamente a versão do React
    },
  },
};
