<template>
  <div class="main-header">
    <nav
      class="nav"
      id="topnav"
      :class="{ topnav: true, responsive: isResponsive }"
    >
      <div class="container-logo">
        <a class="logo" href="/">Liticia.</a>
      </div>

      <div class="container-links">
        <a class="link" href="#about" @click="closeMenu, setActiveLink($event)"
          >À propos</a
        >
        <a
          class="link"
          href="#projects"
          @click="closeMenu, setActiveLink($event)"
          >Projets</a
        >
        <a
          class="link"
          href="#formations"
          @click="closeMenu, setActiveLink($event)"
          >Formations</a
        >
        <a
          class="link"
          href="#contact"
          @click="closeMenu, setActiveLink($event)"
          >Contact</a
        >
        <button class="icon" @click="toggle">
          <img src="../assets/icons/menu.svg" />
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MainHeader",
  components: {},
  data() {
    return {
      isResponsive: false,
      activeLink: null,
    };
  },
  methods: {
    toggle() {
      this.isResponsive = !this.isResponsive;
    },
    closeMenu() {
      this.isResponsive = !this.isResponsive;
    },
    setActiveLink: function (event) {
      // Fermer le menu
      this.closeMenu();
      // Annuler le comportement par défaut du lien
      event.preventDefault();

      // Récupérer l'élément a qui a été cliqué
      var link = event.target;

      // Récupérer la section correspondante à l'élément a
      var sectionId = link.getAttribute("href");
      var section = document.querySelector(sectionId);

      // Définir la classe active sur l'élément a et supprimer la classe active de l'ancien élément a
      if (this.activeLink) {
        this.activeLink.classList.remove("active");
      }
      link.classList.add("active");
      this.activeLink = link;

      // Faire défiler la page vers la section active
      section.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

