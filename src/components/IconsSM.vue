<template>
  <div id="icons-container">
    <div class="icon-container" v-for="ico in icons" :key="ico.alt">
      <a :href="ico.link" target="_blank">
        <img class="icon" :src="ico.icon" :alt="ico.alt"/>
      </a>
    </div>
    <div class="vertical-line"></div>
  </div>
</template>

<script>
export default {
  name: "IconsSm",
  data() {
    return {
      icons: [
        {
          alt: "Lien Github",
          icon: require("@/assets/icons/linkedin.svg"),
          link: "https://www.linkedin.com/in/liticia-tadjer",
        },
        {
          alt: "Lien Linkedin",
          icon: require("@/assets/icons/github.svg"),
          link: "https://github.com/ltadjer",
        },
        {
          alt: "Lien Email",
          icon: require("@/assets/icons/mail.svg"),
          link: "mailto:tadjerliticia@gmail.com",
        },
      ],
    };
  },
};
</script>



