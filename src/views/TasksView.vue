<template>
  <div class="tasks">
    <h2 class="tasks-title">Tasks</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <div>
          <span>{{ task.title }}</span>
          <span>{{ task.description }}</span>
          <span>{{ task.date }}</span>
        </div>
        <div class="task__button">
          <router-link :to="'/edit-task/' + task.id">Edit</router-link>
          <button @click="removeTask(task)">Remove</button>
        </div>
      </li>
    </ul>
    <router-link to="/add-task">Add Task</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
  methods: {
    removeTask(task) {
      this.$store.dispatch("removeTask", task);
    },
  },
};
</script>

<style lang="scss">
.tasks {
  display: flex;
  flex-direction: column;
  max-width: $content-width;
  height: 100%;
  margin: 0 auto;

  .tasks-title {
    align-self: center;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: $font-size-large;
    color: $color-purple;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      padding: 1rem;
      font-size: $font-size-base;
      color: $color-black-font;
      background-color: $color-white;
      box-shadow: $box-shadow-basic;

      div:first-child {
        flex: 1;
      }

      div:last-child {
        display: flex;
      }

      button {
        padding: 0.5rem 1rem;
        font-size: $font-size-small;
        color: $color-white;
        background-color: $color-red;
        border: none;
        cursor: pointer;

        &:hover {
          background-color: darken($color-red, 10%);
        }
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

.task__button {
  display: flex;
  column-gap: 20px;
}

</style>
