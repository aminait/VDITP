<template>
  <div>
    <h3>Edit Partner Details</h3>
    <b-container>
        <!-- <h4>{{partner}}</h4> 
        <p>{{partner.profile}}</p> 
        <li><strong>ID:</strong> {{partner.id}}</li>
        <li><strong>Username:</strong> {{partner.username}}</li>
        <li><strong>First Name:</strong> {{partner.profile.firstName}}</li>
        <li><strong>Last Name:</strong> {{partner.profile.lastName}}</li>
        <li><strong>Skype ID:</strong> {{partner.profile.skypeId}}</li>
        <li><strong>Social Media:</strong> {{partner.profile.socialMedia}}</li> -->
      <input-form :partner="partner"></input-form>
      <b-button variant="primary" @click="editPartner"> Save</b-button>
    </b-container>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import InputForm from "../components/InputForm";

export default {
  components: {
    InputForm,
  },
  computed: {
    ...mapGetters(["getPartner"]),
    partner() {
      return this.getPartner(this.$route.params.id);
    },
  },
  methods: {
    editPartner() {
      this.$store.dispatch("editPartner", this.partner);
      this.$router.push({ name: "all-partners" });
    },
  },
};
</script>