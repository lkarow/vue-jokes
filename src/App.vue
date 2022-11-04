<template>
  <h1 class="headline">Make me laugh!</h1>
  <JokeView />
  <AcknowledgmentView />
</template>

<script>
import JokeView from './components/JokeView.vue';
import AcknowledgmentView from './components/AcknowledgmentView.vue';

export default {
  name: 'App',
  components: {
    JokeView,
    AcknowledgmentView,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  height: 100%;
  min-height: 100vh;
}

.headline {
  margin: 20px;
  font-size: 4em;
}
</style>
