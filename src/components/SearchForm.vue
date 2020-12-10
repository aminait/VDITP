<template>
  <div>
    <p>{{partners}}</p>
    <h4>Search By:</h4>
    <div class="card card-body bg-light break">
      <b-form inline>
        <b-form-group>
          <b-form-input
            class="mb-2 mr-sm-2 mb-sm-0"
            v-model="partnerQuery.profile.firstName"
            type="search"
            placeholder="First name"
          ></b-form-input>
        </b-form-group>

        <b-form-group>
          <b-form-input
            class="mb-2 mr-sm-2 mb-sm-0"
            v-model="partnerQuery.profile.lastName"
            type="search"
            placeholder="Last name"
          ></b-form-input>
        </b-form-group>

        <b-form-group>
          <b-form-input
            class="mb-2 mr-sm-2 mb-sm-0"
            v-model="partnerQuery.profile.businessName"
            type="search"
            placeholder="Business name"
          ></b-form-input>
        </b-form-group>

        <b-form-group>
          <b-form-input
            class="mb-2 mr-sm-2 mb-sm-0"
            v-model="partnerQuery.profile.phone"
            type="search"
            placeholder="Phone number"
          ></b-form-input>
        </b-form-group>

        <b-form-group>
          <b-form-select
            class="mb-2 mr-sm-2 mb-sm-0"
            size="sm"
            v-model="partnerQuery.hasAcceptedContract"
            type="search"
            :options="hasAcceptedContractOptions"
          ></b-form-select>
        </b-form-group>

        <b-container>
          <b-button
            class="mb-2 mt-4 mr-sm-2 mb-sm-0"
            variant="primary"
            v-on:click="filterPartner(partners, partnerQuery)"
            >Submit</b-button
          >

          <b-button
            class="mb-2 mt-4 mr-sm-2 mb-sm-0"
            variant="danger"
            @click="onReset"
            >Reset</b-button
          >
          {{partners}}
        </b-container>
      </b-form>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default{
    data() {
        return {
            partnerQuery: {
                username: "",
                shouldChangePassword: "",
                hasAcceptedContract: null,
                profile: {
                    firstName: "",
                    lastName: "",
                    businessName: "",
                    phone: "",
                    businessWebsite: "",
                    skypeId: "",
                    socialmedia: "",
                }
            },
            hasAcceptedContractOptions: [
                { value: null, text: "Has accepted contract?", disabled: true },
                { value: "true", text: "Yes" },
                { value: "false", text: "No" },
            ]
        }        
    },
    mounted() {
       console.log("partners: " + this.partners)
    },
    computed: {
    ...mapState({
      partners: (state) => state.partners.partners,
    }),
    },
    methods: {
        onReset() {
            // Reset our form values
            this.firstName = "";
            this.lastName = "";
            this.businessName = "";
            this.phone = "";
            this.hasAcceptedContract = null;
    },
        filterPartner(arrList, searchParams) {
          console.log("Inside filter method")
          console.log("These are my searchParams: "+JSON.stringify(searchParams) )
          return arrList.filter(function(obj) {
              return Object.values(obj).includes(searchParams);
  });
      },
}}
</script>