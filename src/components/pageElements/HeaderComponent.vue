<template>
  <div class="header-component">
    <div class="header-component__wrapper">
      <RouterLinkComponent class="header-component__title" :to="routeMainPage">
        Home
      </RouterLinkComponent>
      <RouterLinkComponent class="header-component__title" :to="routeTasksPage">
        Tasks
      </RouterLinkComponent>
    </div>
  </div>
</template>

<script>
import { RouterLinkComponent } from "../basicComponents";
import { urlNames } from "@/utils/constants";

export default {
  name: "HeaderComponent",
  components: { RouterLinkComponent },

  data: () => ({
    routeMainPage: { name: urlNames.MAIN_PAGE },
    routeTasksPage: { name: urlNames.TASKS },
  }),
};
</script>

<style lang="scss">
.header-component {
  height: $header-height;
  background-color: $color-purple;

  &__title {
    font-size: $font-size-large;
  }

  &__wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    max-width: $content-width;
    height: 100%;
    margin: 0 auto;
    column-gap: 20px;
  }

  &__nav {
    position: relative;
    display: flex;
    align-items: center;
    column-gap: 15px;
  }
}

</style>
