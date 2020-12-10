<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <b-icon icon="list"></b-icon> All Partners
      </router-link>
      |
      <router-link :to="{ name: 'partner-add' }">
        <b-icon icon="plus-circle"></b-icon> Add Partner
      </router-link>
    </div>
    <!-- <search-partners @is-searching="displayResults"></search-partners> -->

    <!-- <div class="stack-small" v-if="!isSubmitted">
      <search-partners-results></search-partners-results>
    </div> -->
    <router-view />
  </div>
</template>

<script>
// import SearchPartnersResults from './components/SearchPartnersResults'
// import API from "./API/api";
// import EditPartner from "./components/EditPartner"
// import AddPartner from "./components/AddPartner"
// import SearchPartners from './components/SearchPartners';
// import SearchPartnersResults from './components/SearchPartnersResults.vue';

export default {
  name: "App",
  data() {
    return {
      // isSubmitted: false
    };
  },
  mounted() {
    this.$store.dispatch("loadPartners");
  },
  // methods: {
  //   displayResults(isSubmitted){
  //     this.isSubmitted = isSubmitted
  //   }
  // }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #2c3e50;
}
.break {
  margin-bottom: 50px;
}
input[type="radio"] {
  margin: 0px 10px;
}
</style>
