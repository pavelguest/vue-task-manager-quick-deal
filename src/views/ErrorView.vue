<template>
  <div class="error404-page">
    <RouterLinkComponent :to="routeMainPage"> Home </RouterLinkComponent>
    <h2>Error404</h2>
  </div>
</template>

<script>
import { urlNames } from "@/utils/constants";
import { RouterLinkComponent } from "@/components/basicComponents";

export default {
  name: "Error404Page",
  components: { RouterLinkComponent },

  data: () => ({
    routeMainPage: { name: urlNames.MAIN_PAGE },
  }),
};
</script>

<style lang="scss">
.error404-page {
  height: 100vh;
  color: $color-black;
  background-color: $color-white;
}

</style>
