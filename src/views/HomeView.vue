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
            Depuis toujours, l'informatique est ma passion. C'est pourquoi j'ai choisi de suivre une <span>Licence en Informatique</span> à l'Université de Bordeaux juste après l'obtention de mon baccalauréat.
          </p>
          <p>
            Cependant, il y a un peu plus d'un an, j'ai décidé de me spécialiser dans le domaine du <span>Développement Web</span>. J'ai intégré Digital Campus pour poursuivre un <span>Bachelor dans ce domaine</span>, tout en étant en alternance chez L'Atelier des Dames en tant que développeuse.
          </p>
          <p>
            Actuellement, je suis en <span>première année de mastère Tech Lead</span> chez Archi-lid, tout en occupant le poste d'alternante en tant que développeuse full stack. Mon objectif principal est de continuer à enrichir mes compétences et à acquérir de nouvelles connaissances, notamment à travers cette expérience en alternance.
          </p>

            <p>Si vous avez une opportunité correspondant à mon profil, je serais ravie de rejoindre votre entreprise.</p>
        </div>
      </div>
      <div class="container-skills">
        <div class="skills-content">
          <marquee behavior="alternate" scrolldelay="20"
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
          v-for="(project, index) in projects"
          :key="index"
          :project="project"
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
import iconDownload from "@/assets/icons/download.svg"
import iconSend from "@/assets/icons/send.svg"

export default {
  name: "HomeView",
  components: {
    CardProject,
    MyButton,
    TheTimeline,
  },
  data() {
    return {
      iconDownload: iconDownload,
      iconSend: iconSend,
      skills: [
        "CSS",
        "Tailwind CSS",
        "PHP",
        "JS",
        "TS",
        "GitHub",
        "Node JS",
        "Express JS",
        "Nest JS",
        "Vue JS",
        "Ionic",
        "Symfony",
        "Shopify",
        "Wordpress",
        "Strapi",
        "Suite Adobe"
      ],
      projects: [
        {
          src: require("@/assets/projects/archi-lid.jpeg"),
          title: "Archi-lid",
          description:
            "Actuellement en alternance chez Archi-lid, je participe à l'intégration de fonctionnalités sur une application mobile de gestion de suivi de chantier, mais également dans la plateforme web pour améliorer l'expérience utilisateur.",
          languages: ["Vue JS", "Ionic", "Symfony", "JQuery"],
        },
        {
          src: require("@/assets/projects/add.png"),
          title: "L'Atelier des Dames",
          description:
            "Au cours d'une alternance chez l'Atelier des Dames, j'ai pu effectué une migration d'un Woocommerce vers Shopify et je continue à gérer le site en fonction du besoin.",
          languages: ["Shopify", "Liquid", "CSS"],
          website: {
            icon: require("@/assets/icons/external-link.svg"),
            link: "https://latelierdesdames.fr/",
            alt: "L'Atelier des Dames",
          },
        },
        {
          src: require("@/assets/projects/bordeauxfood.png"),
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
        {
          src: require("@/assets/projects/adlink.png"),
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
        {
          src: require("@/assets/projects/portfolio.png"),
          title: "Portfolio",
          description:
            "Dans le cadre de ma recherche d'alternance pour mon mastère, j'ai réalisé mon portfolio pour mettre en avant mes compétences et projets. ",
          languages: ["VueJS", "JAVASCRIPT", "CSS"],
          website: {
            icon: require("@/assets/icons/external-link.svg"),
            link: "https://liticia.fr/",
            alt: "Lien portfolio",
          },
          github: {
            icon: require("@/assets/icons/github-p.svg"),
            link: "https://github.com/ltadjer/portfolio2023",
            alt: "Lien Github",
          },
        },
      ]
    };
  },
  mounted() {
    AOS.init();
  },
};
</script>
