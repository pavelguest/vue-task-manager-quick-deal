<template>
  <div class="footer-component">
    <div class="footer-component__wrapper">
      <a
        href="https://github.com/pavelguest"
        target="_blank"
        class="footer-component__github-logo"
      />
      <p class="footer-component__name">
        Pavel Puchynski
      </p>
      <p class="footer-component__year">
        2023
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FooterComponent'
}
</script>

<style lang="scss">
  .footer-component {
    height: $footer-height;
    padding: 10px 0;
    font-size: $font-size-large;
    color: white;
    background-color: $color-purple;

    &__wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: $content-width;
      margin: 0 auto;
    }

    &__github-logo {
      width: 35px;
      height: 35px;
      background: $github-logo-url;
      background-position: center;
      background-size: 100% 100%;
      cursor: pointer;
      transition: all 0.5s;

      &:hover {
        transform: scale(1.1);
        transition: all 0.5s;
      }
    }
  }

</style>
