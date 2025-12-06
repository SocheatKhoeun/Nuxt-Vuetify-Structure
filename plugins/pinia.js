import { createPinia } from 'pinia';

export default defineNuxtPlugin(nuxtApp => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia); // Make sure Pinia is used in the app
});
