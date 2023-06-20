<script>
import { RouterLink, RouterView } from 'vue-router'
import { objects_find } from './middleware/routes/object_catalogue';

export default {

  data() {
    return {
      navClass: '',
    }
  },
  async created() {
    window.addEventListener("scroll", this.myEventHandler);

  },
  destroyed() {
    window.removeEventListener("scroll", this.myEventHandler);
  },
  methods: {
    myEventHandler(e) {
      if (window.pageYOffset > 0) this.navClass = 'position-fixed w-100';
      else this.navClass = '';
    }
  }
}

</script>

<template>
  <nav class="navbar navbar-expand-lg px-2 bg-primary" style="z-index: 20;">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar"
      aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse px-2" id="mainNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/">Smještaj</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/rezervacije">Rezervacije</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/kupci">Kupci</a>
        </li>
      </ul>
    </div>
  </nav>
  <RouterView />
</template>

<style></style>

