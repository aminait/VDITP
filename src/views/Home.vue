<template>
  <div class="home">
    <search-form></search-form>
    <h3 class="break">All Partners:</h3>
    <b-container>
      <b-table
        show-empty
        small
        stacked="md"
        :items="partners"
        :fields="fields"
        :tbody-tr-class="rowClass"
      >
        <template #cell(firstName)="row">
          {{ row.value.firstName }}
        </template>

        <template #cell(lastName)="row">
          {{ row.value.lastName }}
        </template>

        <template #cell(businessName)="row">
          {{ row.value.businessName }}
        </template>

        <template #cell(phone)="row">
          {{ row.value.phone }}
        </template>

        <template #cell(actions)="row">
          <!-- EDIT BUTTON --> 
          <router-link
            :to="{ name: 'partner-edit', params: { id: row.item.id } }"
          >
            <b-button size="sm" class="mr-1" variant="secondary"
              ><b-icon icon="pencil-square"></b-icon> Edit</b-button
            >
          </router-link>

          <!-- DELETE BUTTON -->
          <b-button
            size="sm"
            @click="deletePartner(row.item)"
            class="mr-1"
            variant="danger"
          >
            Delete
          </b-button>
        </template>
      </b-table>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SearchForm from "../components/SearchForm";

export default {
  name: "Home",
  components: { SearchForm },
  data() {
    return {
      newPartner: null,
      showAlert: false,
      hasAcceptedContractOptions: [
        { value: null, text: "Has accepted contract?", disabled: true },
        { value: "true", text: "Yes" },
        { value: "false", text: "No" },
      ],
      //partners: [],//this.$store.state.partners,
      fields: [
        { key: "profile.firstName", label: "First name" },
        { key: "profile.lastName", label: "Last name" },
        { key: "profile.businessName", label: "Business name" },
        { key: "profile.phone", label: "Phone number" },
        "hasAcceptedContract",
        { key: "actions", label: "Actions" },
      ],
    };
  },
  mounted() {
    this.$store.dispatch("loadPartners");
  },
  computed: {
    ...mapState({
      partners: (state) => state.partners.partners,
    }),
    // partners() {
    //   return this.$store.state.partners;
    // },
  },
  methods: {
    rowClass(item) {
      if (!item.hasAcceptedContract) return "table-warning";
    },
    deletePartner(partner) {
      if (confirm("Do you really want to delete this partner?")) {
        this.$store.dispatch("deletePartner", partner);
      }
    },
  },
};
</script>
