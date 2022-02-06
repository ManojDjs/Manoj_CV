<template>
    <div class="text-center" style="height:100px">
       <v-typical
    class="blink"
    :steps="['I am a, Python Programmer', 500, 'I am a, Web Developer !', 500, 'I am a, Fullstack Devloper ! 👋', 500]"
    :loop="Infinity"
    :wrapper="'h3'"
  ></v-typical>
    </div>
</template>

<script >
import VTypical from 'vue-typical';

export default {
  components: {
    VTypical,
  },
};
</script>