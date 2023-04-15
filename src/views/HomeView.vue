<template>
  <div class="home">
    <section
      class="section"
      id="hero"
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <div class="content-hero">
        <h1>Liticia TADJER</h1>
        <span class="italic">Développeuse web junior</span>
        <span class="alternance"
          >En recherche d'<strong>alternance </strong>
        </span>
        <MyButton
          buttonLink="https://ibb.co/bvTk7PD"
          buttonText="Télécharger CV"
          :buttonIcon="iconDownload"
        />
      </div>
      <img src="../assets/img/avatar-portfolio.svg" alt="" />
    </section>
    <section
      class="section"
      id="about"
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <div class="container-h1">
        <h1 class="h1-section">À propos de moi</h1>
        <div class="line"></div>
      </div>
      <div class="container-about">
        <div class="container-img">
          <img src="../assets/img/photo-cv.jpg" alt="¨Photo de profil" />
        </div>
        <div class="container-content">
          <p>
            Depuis toujours, l'Informatique m'a passionnée. C'est la raison pour
            laquelle j'ai choisi de suivre une
            <span>Licence en Informatique</span> à l'Université de Bordeaux à la
            suite de mon baccalauréat.
          </p>
          <p>
            Cependant, il y a plus d'un an, j'ai décidé de me spécialiser dans
            le domaine du <span>Développement Web</span>. C'est ainsi que j'ai
            intégré Digital Campus pour suivre un
            <span>Bachelor en Développement Web</span>, tout en étant
            <span>alternante chez L'Atelier des Dames</span> en tant que
            développeuse web.
          </p>
          <p>
            Aujourd'hui, mon objectif est de poursuivre mon apprentissage à
            travers une <span>alternance</span> dans le cadre d'un
            <span>mastère Développement Web</span>.
          </p>
          <p>
            Si vous avez une opportunité à me proposer, je serais ravie de
            rejoindre votre entreprise.
          </p>
        </div>
      </div>
      <div class="container-skills">
        <div class="skills-content">
          <marquee behavior="alternate"
            ><span v-for="(skill, index) in skills" :key="index">
              {{ skill }}</span
            ></marquee
          >
        </div>
      </div>
    </section>
    <section class="section" id="projects">
      <div class="container-h1" data-aos="fade-right" data-aos-duration="1500">
        <h1 class="h1-section">Quelques projets</h1>
        <div class="line"></div>
      </div>
      <div class="projects">
        <card-project
          :project="project1"
          data-aos="fade-right"
          data-aos-duration="1500"
        />
        <card-project
          :project="project2"
          data-aos="fade-right"
          data-aos-duration="1500"
        />
        <card-project
          :project="project3"
          data-aos="fade-right"
          data-aos-duration="1500"
        />
      </div>
    </section>
    <section
      class="section"
      id="formations"
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <div class="container-h1">
        <h1 class="h1-section">Formations</h1>
        <div class="line"></div>
      </div>
      <div class="formations">
        <the-timeline />
      </div>
    </section>
    <section
      class="section center text-center"
      id="contact"
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <h1 class="h1-section">Contact</h1>
      <p>
        N’hésitez pas à me contacter si vous avez une opportunité à me proposer
        ou pour juste un échange, je me ferais un plaisir de vous répondre
        rapidement.
      </p>
      <my-button
        buttonLink="mailto:tadjerliticia@gmail.com"
        buttonText="Laisser un message"
        target="_blank"
        :buttonIcon="iconSend"
      ></my-button>
    </section>
  </div>
</template>

<script>
import AOS from "aos"
import "aos/dist/aos.css"

import CardProject from "../components/CardProject.vue"
import MyButton from "../components/MyButton.vue"
import TheTimeline from "../components/Timeline.vue"
export default {
  name: "HomeView",
  components: {
    CardProject,
    MyButton,
    TheTimeline,
  },
  data() {
    return {
      iconDownload: require("@/assets/icons/download.svg"),
      iconSend: require("@/assets/icons/send.svg"),
      skills: [
        "CSS",
        "SCSS",
        "HTML",
        "PHP",
        "Javascript",
        "GitHub",
        "Shopify",
        "Liquid",
        "Wordpress",
        "Strapi",
        "Node JS",
        "Express JS",
        "Pug",
        "Vue JS",
        "Symfony",
        "Twig",
        "Suite Adobe"
      ],
      project1: {
        src: require("@/assets/projects/add.png"),
        slug: "projet-1",
        title: "L'Atelier des Dames",
        description:
          "Actuellement en alternance chez l'Atelier des Dames, j'ai pu effectué une migration d'un Woocommerce vers Shopify et je continue à gérer le site en fonction du besoin.",
        languages: ["Shopify", "Liquid", "CSS"],
        website: {
          icon: require("@/assets/icons/external-link.svg"),
          link: "https://latelierdesdames.fr/",
          alt: "L'Atelier des Dames",
        },
      },
      project2: {
        src: require("@/assets/projects/bordeauxfood.png"),
        slug: "projet-2",
        title: "Bordeaux Food",
        description:
          "Dans le cadre des Grands Projets de Digital Campus, j'ai participé à la refonte du site Bordeaux Food, un site de podcasts de découvertes culinéaires.",
        languages: ["WordPress", "Thème personnalisé", "PHP", "CSS"],
        website: {
          icon: require("@/assets/icons/external-link.svg"),
          link: "https://bordeauxfood.fr/",
          alt: "Lien site web",
        },
      },
      project3: {
        src: require("@/assets/projects/adlink.png"),
        slug: "projet-2",
        title: "Adlink.bio",
        description:
          "Projet scolaire de groupe qui consiste à développer une platefrome CMS permettant aux utilisateurs de créer des landing page en fonction de ces besoins.",
        languages: ["Symfony", "PHP", "SCSS"],
        github: {
          icon: require("@/assets/icons/github-p.svg"),
          link: "https://github.com/ltadjer/adlink.bio",
          alt: "Lien Github",
        },
      },
    };
  },
  mounted() {
    AOS.init();
  },
};
</script>
