<template>
  <button class="joke-button" @click="fetchJoke" :disabled="isLoading">
    {{ !joke.setup ? 'Tell a joke' : 'Tell another one' }}
  </button>
</template>

<script>
export default {
  name: 'JokeButton',
  props: ['joke', 'isLoading'],
  methods: {
    fetchJoke() {
      this.$parent.fetchJoke();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.joke-button {
  margin: 20px auto;
  padding: 20px;
  background-color: rgb(255, 140, 0);
  border: none;
  border-radius: 0.4em;
  color: #fff;
  font-size: 2em;
}

.joke-button:hover {
  filter: brightness(110%);
}

.joke-button:active {
  transform: scale(0.95);
}

.joke-button:disabled {
  opacity: 40%;
}

.invisible {
  display: none;
}
</style>
