import { defineCustomElement } from "vue";

import ResourceLibrary from "./components/ResourceLibrary.vue";

function defineVueComponent(name: string, comp: Parameters<typeof defineCustomElement>[0]) {
  const el = defineCustomElement(comp);

  customElements.define(name, el);
}

defineVueComponent("poc-resource-library", ResourceLibrary);
