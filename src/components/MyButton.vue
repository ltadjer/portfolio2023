<template>
  <div id="button">
    <div class="container-btn">
      <a :href="buttonLink" target="_blank">
        {{ buttonText }} 
        <img :src="buttonIcon" alt="buttonIcon"/> 
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    buttonLink: {
      type: String,
      required: true,
    },
    buttonIcon: {
      type: String,
      required: true,
      default: "download.svg"
    },
  },
};
</script>


