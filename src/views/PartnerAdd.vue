<template>
  <div>
    <h3>Inside Adding Partner</h3>
    <input-form :partner="newPartner"></input-form>
    <!-- <router-link :to="{name: 'all-partners'}"> -->
    <b-button variant="primary" @click="addPartner">
      <b-icon icon="plus-circle"></b-icon> Create</b-button>
    <!-- </router-link> -->
    <!-- <p>{{newPartner.profile.firstName}}</p> -->
  </div>
</template>
<script>
import InputForm from "../components/InputForm";

export default {
  components: { InputForm },
  data() {
    return {
      newPartner: {
        id: Math.ceil(Math.random() * 1000),
        username: "",
        shouldChangePassword: null,
        hasAcceptedContract: null,
        profile: {
          firstName: "",
          lastName: "",
          businessName: "",
          phone: "",
          businessWebsite: "",
          skypeId: "",
          socialMedia: "",
        },
      },
    };
  },
  //   computed: {
  //     partners() {
  //       return this.$store.state.partners;
  //     },
  //   },
  methods: {
    async addPartner() {
      this.$store.dispatch("addPartner", this.newPartner);
      this.$router.push({ name: "all-partners" });
    },
  },
};
</script>