<template>
  <div class="add-task">
    <h2 class="add-task__title">Add Task</h2>
    <form @submit.prevent="addTask">
      <label>
        Title:
        <input type="text" v-model="title" required />
      </label>
      <button type="submit">Add</button>
    </form>
    <router-link to="/tasks">Back to Tasks</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    addTask() {
      const task = {
        id: Math.random().toString(36).substr(2, 9),
        title: this.title,
      };
      this.$store.dispatch("addTask", task);
      this.title = "";
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
.add-task {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: $content-width;
  height: 100%;
  margin: 0 auto;

  .add-task__title {
    align-self: center;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: $font-size-large;
    color: $color-purple;
  }

  form {
    display: flex;
    align-items: center;

    label {
      margin-right: 1rem;
      font-size: $font-size-base;
      color: $color-black-font;
    }

    input[type="text"] {
      flex-grow: 1;
      padding: 0.5rem;
      font-size: $font-size-base;
      color: $color-black-font;
      border: 1px solid $color-black-light;
      border-radius: 4px;
    }

    button[type="submit"] {
      padding: 0.5rem 1rem;
      font-size: $font-size-small;
      color: $color-white;
      background-color: $color-blue;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: darken($color-blue, 10%);
      }
    }
  }

  a {
    display: inline-block;
    margin-top: 1rem;
    font-size: $font-size-base;
    color: $color-purple;
  }
}

</style>
