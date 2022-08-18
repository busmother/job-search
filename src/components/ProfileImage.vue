<template>
  <img v-bind:src="imageLink" class="w-8 h-8 object-contain rounded-3xl" />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink:
        "https://townsquare.media/site/442/files/2014/12/Lee-Pace-630x420.jpg?w=980&q=75",
    };
  },
};
</script>
