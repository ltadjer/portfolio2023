<template>
  <div id="cardProject">
    <div class="container-img">
      <img :src="project.src" :alt="project.title" />
    </div>
    <div class="container-content">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <span
        class="container-language"
        v-for="language in project.languages"
        :key="language"
      >
        {{ language }}
      </span>
      <div class="container-links">
        <div class="container-link" v-if="project.github">
          <a :href="project.github.link" target="_blank">
            <img :src="project.github.icon" :alt="project.github.alt" />
          </a>
        </div>
        <div class="container-link" v-if="project.website">
          <a :href="project.website.link" target="_blank">
            <img :src="project.website.icon" :alt="project.website.alt" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProject",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

