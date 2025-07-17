export const FrontendTechnologies = {
  html_css_js: "html-css-js",
  react: "react",
  next: "next",
  svelte: "svelte",
  vue: "vue",
  angular: "angular",
} as const;

export const ExtraFrontendTechnologies = {
  tailwindcss: "tailwindcss",
  bootstrap: "bootstrap",
  material_ui: "material-ui",
  shadcn_ui: "shadcn-ui",
  sass: "sass",
  styled_components: "styled-components",
  zustand: "zustand",
  react_query: "react-query",
  redux: "redux",
} as const;

export type FrontendTechnologies =
  (typeof FrontendTechnologies)[keyof typeof FrontendTechnologies];

export type ExtraFrontendTechnologies =
  (typeof ExtraFrontendTechnologies)[keyof typeof ExtraFrontendTechnologies];
