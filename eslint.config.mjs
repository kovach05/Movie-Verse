// import globals from "globals";
// import pluginJs from "@eslint/js";
// import pluginReact from "eslint-plugin-react";
// import pluginCypress from "eslint-plugin-cypress";
//
// export default [
//   {
//     files: ["**/*.{js,mjs,cjs,jsx}"],
//     languageOptions: {
//       globals: globals.browser,
//     },
//   },
//   pluginJs.configs.recommended,
//   {
//     ...pluginReact.configs.flat.recommended,
//     settings: {
//       react: {
//         version: 'detect',
//       },
//     },
//   },
//   {
//     files: ["**/*.cy.{js,jsx,mjs,cjs}"],
//     plugins: {
//       cypress: pluginCypress,
//     },
//     languageOptions: {
//       globals: {
//         ...globals.cypress,
//       },
//     },
//     rules: pluginCypress.configs.recommended.rules,
//   },
// ];
//
