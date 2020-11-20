<template>
<div id="searchForm">
    <div class="card card-body bg-light">
        <h3>Search partners by:</h3>
        <br>
        <form ref="filter">
          <div class="form-row">
            <div class="form-group col-md-3">
              <label for="first name">First name: </label><br>
              <input type="text" class="form-control" v-model="firstName" v-on:input="filterFirstName"><br>
            </div>
            <div class="form-group col-md-3">
              <label for="last name">Last name: </label><br>
              <input type="text" class="form-control" v-model="lastName" v-on:input="filterLastName"><br>
            </div>
            <div class="form-group col-md-3">
              <label for="business name">Business Name: </label><br>
              <input type="text" class="form-control" v-model="businessName" v-on:input="filterBusinessName"><br>
            </div>
            <div class="form-group col-md-3">
              <label for="phone">Phone number: </label><br>
              <input type="text" class="form-control" v-model="phone" v-on:input="filterPhone"><br>
            </div>
          </div>
          <label for="contractBool">Has accepted contract? </label><br>
          <input type="radio" v-model="hasAcceptedContract" v-bind:value="true" v-on:change="filterBool">
          <label for="yes">Yes</label>
          <input type="radio" v-model="hasAcceptedContract" v-bind:value="false" v-on:change="filterBool">
          <label for="no">No</label><br>
          <button type="submit" v-on:click="reset" class="btn btn-primary">Reset</button>
        </form>
    </div>
    <div class="break"></div>
    <h3>Search Results:</h3>
    <p v-if="results==''">No match found!</p>
    <div class="card card-body bg-light" v-for="result in results" v-bind:key="result.id">
      <div class="card-block">
        <h4 class="card-header">{{ result.profile.businessName }}</h4>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: {{ result.profile.firstName }} {{ result.profile.lastName }}</li>
          <li class="list-group-item">Business Name: {{ result.profile.businessName }}</li>
          <li class="list-group-item">Phone: {{ result.profile.phone }} </li>
          <li class="list-group-item">Website: {{ result.profile.businessWebsite }} </li>
        </ul>
      </div>
    </div>
</div>
</template>
<script>
import json from '../sampledata.json'

export default{
  name: 'SearchForm',
  data () {
    return {
      test: 'Testing Form',
      partners: json.partners, // there's a better way by using computed property
      firstName: '',
      lastName: '',
      businessName: '',
      phone: '',
      hasAcceptedContract: '',
      results: json.partners
    }
  },
  methods: {
    filterFirstName: function () {
      this.results = this.partners.filter(partner => {
        return partner.profile.firstName.toLowerCase().includes(this.firstName.toLowerCase())
      })
    },
    filterLastName: function () {
      this.results = this.partners.filter(partner => {
        return partner.profile.lastName.toLowerCase().includes(this.lastName.toLowerCase())
      })
    },
    filterBusinessName: function () {
      this.results = this.partners.filter(partner => {
        return partner.profile.businessName.toLowerCase().includes(this.businessName.toLowerCase())
      })
    },
    filterPhone: function () {
      this.results = this.partners.filter(partner => {
        return partner.profile.phone.toLowerCase().includes(this.phone.toLowerCase())
      })
    },
    filterBool: function () {
      this.results = this.partners.filter(partner => {
        return partner.hasAcceptedContract === this.hasAcceptedContract
      })
    },
    reset: function () {
      this.$refs.filter.reset()
    }
  }
}
</script>
<style>
table, th, td {
  border: 1px solid black;
  padding: 5px;
}
table {
  border-spacing: 15px;
}
.break { margin-top: 50px; }
</style>