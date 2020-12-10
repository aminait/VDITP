<template>
  <div>
    <b-container>
      <div class="card card-body bg-light">
        <form ref="form">
          <div class="form-row">
            <b-form-group
              label="Username"
              invalid-feedback="Username is required"
              class="col-md-3"
            >
              <b-form-input v-model="partner.username" required></b-form-input>
            </b-form-group>

            <b-form-group
              label="First name"
              invalid-feedback="First Name is required"
              class="col-md-3"
            >
              <b-form-input
                v-model="partner.profile.firstName"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="Last name"
              invalid-feedback="Last Name is required"
              class="col-md-3"
            >
              <b-form-input
                v-model="partner.profile.lastName"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Business name"
              invalid-feedback="Business Name is required"
              class="col-md-3"
            >
              <b-form-input
                v-model="partner.profile.businessName"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="form-row">
            <b-form-group
              label="Phone"
              invalid-feedback="Phone is required"
              class="col-md-3"
            >
              <b-form-input
                v-model="partner.profile.phone"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group label="Business Website" class="col-md-3">
              <b-form-input
                v-model="partner.profile.businessWebsite"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="SkypeID"
              invalid-feedback="SkypeID is required"
              class="col-md-3"
            >
              <b-form-input v-model="partner.profile.skypeId"></b-form-input>
            </b-form-group>

            <b-form-group label="Social media" class="col-md-3">
              <b-form-input
                v-model="partner.profile.socialMedia"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="form-row">
            <b-form-group label="Should change password?" class="col-md-3">
              <b-form-select
                v-model="partner.shouldChangePassword"
                :options="shouldChangePasswordOptions"
              ></b-form-select>
            </b-form-group>

            <b-form-group label="Has Accepted Contract?" class="col-md-3">
              <b-form-select
                v-model="partner.hasAcceptedContract"
                :options="hasAcceptedContractOptions"
              ></b-form-select>
            </b-form-group>
          </div>
        </form>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    partner: {
      type: Object,
    },
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
  },
};
</script>