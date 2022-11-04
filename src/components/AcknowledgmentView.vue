<template>
  <div class="acknowledgment">
    <a
      class="link"
      href="https://github.com/15Dkatz/official_joke_api"
      target="_blank"
    >
      Thanks to the Joke API
    </a>
  </div>
</template>

<script>
export default {
  name: 'AcknowledgmentView',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.acknowledgment {
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  background-color: rgb(255, 140, 0);
}

.link {
  color: #fff;
}
</style>
