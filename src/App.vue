<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import { layoutNames } from "@/utils/constants";
import { ErrorLayout, MainLayout } from "@/layouts";

export default {
  data: () => ({
    layouts: {
      ErrorLayout,
      MainLayout,
    },
  }),

  computed: {
    layout() {
      const layoutName = this.$route.meta.layout || layoutNames.MAIN_LAYOUT;

      return this.layouts[layoutName];
    },
  },
};
</script>

<style lang="scss">
@import "./assets/styles/common/index";

#app {
  font-size: $font-size-large;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
