import {
  ExtraFrontendTechnologies,
  FrontendTechnologies,
} from "@/types/frontend_technologies";

export const FRONTEND_TECHNOLOGIES_LABEL = {
  [FrontendTechnologies.html_css_js]: "HTML / CSS / JavaScript (Vanilla)",
  [FrontendTechnologies.react]: "React.js",
  [FrontendTechnologies.next]: "Next.js",
  [FrontendTechnologies.svelte]: "Svelte",
  [FrontendTechnologies.vue]: "Vue.js",
  [FrontendTechnologies.nuxt]: "Nuxt.js",
  [FrontendTechnologies.angular]: "Angular",
};

export const FRONTEND_EXTRA_TECHNOLOGIES_LABEL = {
  [ExtraFrontendTechnologies.tailwindcss]: "Tailwind CSS",
  [ExtraFrontendTechnologies.bootstrap]: "Bootstrap",
  [ExtraFrontendTechnologies.material_ui]: "Material UI",
  [ExtraFrontendTechnologies.shadcn_ui]: "Shadcn UI",
  [ExtraFrontendTechnologies.sass]: "Sass",
  [ExtraFrontendTechnologies.styled_components]: "Styled Components",
};
