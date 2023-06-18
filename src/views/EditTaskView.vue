<template>
  <div class="edit-task">
    <h2 class="edit-task__title">Edit Task</h2>
    <form @submit.prevent="saveTask">
      <div>
        <label>Title:</label>
        <input type="text" v-model="task.title" />
      </div>
      <div class="submit-buttons">
        <button type="submit">Save</button>
        <router-link to="/tasks">Cancel</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: {},
    };
  },
  created() {
    const taskId = this.$route.params.taskId;
    const tasks = this.$store.state.tasks;
    this.task = tasks.find((task) => task.id === taskId);
  },
  methods: {
    saveTask() {
      this.$store.dispatch("updateTask", this.task);
      this.$router.push("/tasks");
    },
  },
};
</script>

<style lang="scss">
.edit-task {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: $content-width;
  height: 100%;
  margin: 0 auto;

  .edit-task__title {
    align-self: center;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: $font-size-large;
    color: $color-purple;
  }

  form {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: column;
      width: 300px;
      margin-bottom: 1rem;

      label {
        margin-bottom: 0.5rem;
        font-size: $font-size-base;
        color: $color-black-font;
      }

      input,
      textarea,
      select {
        padding: 0.5rem;
        font-size: $font-size-base;
        color: $color-black-font;
        background-color: $color-white;
        border: 1px solid $color-grey;
      }
    }

    button[type="submit"] {
      padding: 0.5rem 1rem;
      font-size: $font-size-small;
      color: $color-white;
      background-color: $color-purple;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: darken($color-purple, 10%);
      }
    }

    a {
      margin-top: 1rem;
      font-size: $font-size-base;
      color: $color-purple;
    }
  }
}
.submit-buttons {
  display: flex;
  align-self: center;
  margin-top: 20px;
}

</style>
