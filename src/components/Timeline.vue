<template>
  <div class="timeline">
    <div class="timeline-block" v-for="event in events" :key="event">
      <div class="marker"></div>
      <div class="timeline-content">
        <h3>{{ event.years }}</h3>
        <p>{{ event.name }}</p>
        <span>{{ event.school }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheTimeline",
  data() {
    return {
      events: [
        {
          name: "Mastère Développement Web Tech Lead",
          years: "2023 - 2025",
          school: "Digital Campus Bordeaux",
        },
        {
          name: "Bachelor Développement Web",
          years: "2022 - 2023",
          school: "Digital Campus Bordeaux",
        },
        {
          name: "Formation Développeur Web et Web Mobile ",
          years: "2021 - 2022",
          school: "Digital Campus Bordeaux",
        },
        {
          name: "L1 - L2 Informatique",
          years: "2019 - 2021",
          school: "Université de Bordeaux",
        },
      ],
    };
  },
};
</script>

<style>
</style>
