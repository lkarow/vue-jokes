<template>
  <div class="joke-container">
    <button class="joke-button" @click="fetchJoke">
      {{ !joke.setup ? 'Tell a joke' : 'Tell another one' }}
    </button>
    <div class="joke">
      <div class="joke-setup invisible"></div>
      <div class="joke-punchline invisible"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'JokeView',
  data() {
    return {
      url: 'https://official-joke-api.appspot.com/jokes/random',
      joke: {},
    };
  },
  methods: {
    async fetchJoke() {
      try {
        let response = await axios.get(this.url);
        this.joke = response.data;
        this.typeWriter();
      } catch (error) {
        console.log(error);
      }
    },
    typeWriter(text, element) {
      if (!text) return;
      let typeWriterIndex = 0;
      const timer = setInterval(() => {
        if (typeWriterIndex < text.length) {
          document.querySelector(`.${element}`).innerHTML +=
            text.charAt(typeWriterIndex);
          typeWriterIndex++;
        } else {
          clearInterval(timer);
        }
      }, 70);
    },
    deleteTypeWrittenJoke() {
      document.querySelector('.joke-setup').innerHTML = '';
      document.querySelector('.joke-punchline').innerHTML = '';
    },
  },
  watch: {
    joke(newJoke, oldJoke) {
      if (!oldJoke.setup) {
        document.querySelector('.joke-setup').classList.remove('invisible');
      }

      if (newJoke) {
        document.querySelector('.joke-punchline').classList.add('invisible');
        this.deleteTypeWrittenJoke();
        this.typeWriter(this.joke.setup, 'joke-setup');
        setTimeout(() => {
          document
            .querySelector('.joke-punchline')
            .classList.remove('invisible');
          this.typeWriter(this.joke.punchline, 'joke-punchline');
        }, newJoke.setup.length * 70);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.joke-container {
  flex-grow: 1;
  margin: 20px;
}

.joke {
  display: flex;
  flex-flow: column;
  margin: 25px auto;
  max-width: 1200px;
  font-size: 1.5em;
}

.joke-setup,
.joke-punchline {
  position: relative;
  width: 40%;
  margin: 20px;
  padding: 20px;
  border: 1px solid rgb(255, 140, 0);
  border-radius: 6px;
  background: rgb(255, 140, 0);
  border-radius: 0.4em;
  color: #fff;
}

.joke-setup:after,
.joke-punchline::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 0;
  height: 0;
  border: 1.406em solid transparent;
  border-top: 0;
  margin-top: -0.703em;
}

.joke-setup {
  align-self: flex-start;
}

.joke-punchline {
  align-self: flex-end;
}

.joke-setup:after {
  left: 0;
  border-left: 0;
  border-right-color: rgb(255, 140, 0);
  margin-left: -1.406em;
}

.joke-punchline:after {
  right: 0;
  border-right: 0;
  border-left-color: rgb(255, 140, 0);
  margin-right: -1.406em;
}

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

.invisible {
  display: none;
}
</style>
