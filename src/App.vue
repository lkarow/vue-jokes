<template>
  <h1 class="headline">Make me laugh!</h1>
  <JokeButton :joke="joke" />
  <JokeView :joke="joke" :isLoading="isLoading" />
  <AcknowledgmentView />
</template>

<script>
import JokeButton from './components/JokeButton.vue';
import JokeView from './components/JokeView.vue';
import AcknowledgmentView from './components/AcknowledgmentView.vue';

import axios from 'axios';

export default {
  name: 'App',
  components: {
    JokeButton,
    JokeView,
    AcknowledgmentView,
  },
  data() {
    return {
      url: 'https://official-joke-api.appspot.com/jokes/random',
      joke: {},
      isLoading: false,
    };
  },
  methods: {
    async fetchJoke() {
      this.isLoading = true;
      try {
        let response = await axios.get(this.url);
        this.joke = response.data;
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },
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
