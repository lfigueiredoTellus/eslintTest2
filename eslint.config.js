import js from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
    eslintPluginPrettierRecommended,
<<<<<<<<<<<<<<  ✨ Codeium Command 🌟  >>>>>>>>>>>>>>>>
    rules: {
      // Desativa a regra de proibio de comentarios do tipo `// @ts-ignore`
      "@typescript-eslint/ban-ts-comment": "off",

      // Desativa a regra de nao usar variaveis antes de serem definidas
      "@typescript-eslint/no-use-before-define": "off",

      // Desativa a regra de nao reassignar um valor para uma variavel
      "no-param-reassign": "off",

      // Desativa a regra de nao usar o console.log
      "no-console": "off",

      // Desativa a regra de nao usar o autofocus em componentes
      "jsx-a11y/no-autofocus": "off",

      // Desativa a regra de nao usar o prop-types
      "react/forbid-prop-types": "off",

      // Desativa a regra de nao usar exports default
      "import/prefer-default-export": "off",

      // Desativa a regra de nao usar exports sem default
      "import/export": "off",

      // Desativa a regra de nao usar nomes de variaveis com underline
      "no-underscore-dangle": "off",

      // Desativa a regra de nao usar variaveis com o mesmo nome de outras variaveis
      "no-shadow": "off",

      // Desativa a regra de nao usar o operador de incremento
      "no-plusplus": "off",

      // Desativa a regra de nao usar comentarios com espacos entre as linhas
      "spaced-comment": "off",

      // Desativa a regra de nao usar o for-in sem uma variavel de controle
      "guard-for-in": "off",

      // Desativa a regra de nao usar o dangerouslySetInnerHTML
      "react/no-danger": "off",

      // Desativa a regra de nao usar o tipo de um componente como um botao
      "react/button-has-type": "off",

      // Desativa a regra de nao usar entidades HTML em componentes
      "react/no-unescaped-entities": "off",

      // Desativa a regra de nao usar o React em um componente
      "react/react-in-jsx-scope": "off",

      // Desativa a regra de nao usar o operador de atribuicao
      "operator-assignment": "off",

      // Desativa a regra de nao usar a desestruturacao de objetos
      "prefer-destructuring": "off",

      // Desativa a regra de nao usar o propriedade children em componentes
      "react/no-children-prop": "off",

      // Desativa a regra de nao usar o return em funcoes
      "consistent-return": "off",

      // Desativa a regra de nao usar o state em um construtor
      "react/state-in-constructor": "off",

      // Desativa a regra de nao usar syntaxes nao suportadas
      "no-restricted-syntax": "off",

      // Desativa a regra de nao usar o continue
      "no-continue": "off",

      // Desativa a regra de nao usar o operador de igualdade
      "eqeqeq": "off",

      // Desativa a regra de nao usar a desestruturacao de objetos
      "react/destructuring-assignment": "off",

      // Desativa a regra de nao usar o operador de acesso a propriedades
      "@typescript-eslint/dot-notation": "off",

      // Desativa a regra de nao usar o operador de bitwise
      "no-bitwise": "off",

      // Desativa a regra de nao usar variaveis com o mesmo nome em diferentes escopos
      "no-redeclare": "off",

      // Desativa a regra de nao usar variaveis com o mesmo nome em diferentes escopos
      "@typescript-eslint/naming-convention": "off",

      // Desativa a regra de nao usar imports de dependencias nao necessarias
      "import/no-extraneous-dependencies": "off",

      // Desativa a regra de nao usar linhas entre membros de uma classe
      "@typescript-eslint/lines-between-class-members": "off",

      // Desativa a regra de nao usar o alert
      "no-alert": "off",

      // Desativa a regra de nao usar JSX em arquivos com extensoes diferentes de .js e .tsx
      "react/jsx-filename-extension": [
        "error",
        { "extensions": [".js", ".tsx"] },
      ],

      // Desativa a regra de nao usar o spread em props
      "react/jsx-props-no-spreading": "off",

      // Desativa a regra de nao usar o index como chave de um array
      "react/no-array-index-key": "off",

      // Desativa a regra de nao usar o default props
      "react/require-default-props": "off",

      // Desativa a regra de nao usar a ordenacao de props
      "react/sort-prop-types": "error",

      // Desativa a regra de nao usar o prop-types
      "react/prop-types": "off",

      // Desativa a regra de nao usar variaveis com o mesmo nome em diferentes escopos
      "@typescript-eslint/no-shadow": "off",

      // Desativa a regra de nao usar hooks com deps vazias
      "react-hooks/exhaustive-deps": "error",

      // Desativa a regra de nao usar imports de dependencias nao necessarias
      "import/no-named-as-default": "off",

      // Desativa a regra de nao usar o Object.assign
      "prefer-object-spread": "off",

      // Desativa a regra de nao usar arrow functions com corpo implicito
      "arrow-body-style": "off",

      // Desativa a regra de nao usar ordenacao de metodos em uma classe
      "react/sort-comp": "off",
    },
<<<<<<<  bef18cd4-30f4-40d4-ac64-02a74025380e  >>>>>>>
  },
);
