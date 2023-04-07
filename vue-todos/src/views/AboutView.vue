<template>
  <div class="about">
    <h1>Vue Todos</h1>
    <p>
      Vue Todos is a CRUD Todo tracking application created for a Vue 3 Crash
      Course by John Komarnicki.
    </p>
    <p>
      Track your daily task's using this todo tracker with abilities to save,
      complete, edit & delete todos.
    </p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    display: flex;
    margin: 15px;
  }
  p {
    display: flex;
    margin: 15px;
  }
}
</style>
