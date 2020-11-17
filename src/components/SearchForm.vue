<template>
    <div id="searchForm">
        <p> What am I testing?</p><br>
        <p> </p>
        <form>
            <label for="first name">First name: </label><br>
            <input type="text" required v-model="firstName"><br>
            <!-- <p>Message is: {{ firstName }}</p><br> -->

            <label for="last name">Last name: </label><br>
            <input type="text" required v-model="lastName"><br>
            <!-- <p>Message is: {{ lastName }}</p><br> -->

            <label for="business name">Business Name: </label><br>
            <input type="text" required v-model="businessName"><br>
            <!-- <p>Message is: {{ businessName }}</p><br> -->

            <label for="phone">Phone number: </label><br>
            <input type="text" required v-model="phone"><br>
            <!-- <p>Message is: {{ phone }}</p><br> -->

            <label for="contractBool">Has accepted contract? </label><br>
            <input type="radio" v-model="hasAcceptedContract" v-bind:value="true" name="contract">
            <label for="yes">Yes</label>
            <!-- <p>Answer is: {{ hasAcceptedContract }}</p><br> -->
            <input type="radio" v-model="hasAcceptedContract" v-bind:value="false" name="contract">
            <label for="no">No</label><br>
            <!-- <p>Answer is: {{ hasAcceptedContract }}</p><br> -->
            <button v-on:click="searchPartners">Search</button>
            <!--<div>{{result}}</div>-->

        </form>
    </div>

</template>
<script>
// import json from '../sampledata.json'

export default{
  name: 'SearchForm',
  data () {
    return {
      test: 'Testing Form',
      // partners: json.partners,
      firstName: '',
      lastName: '',
      businessName: '',
      phone: '',
      hasAcceptedContract: ''
      // result: []
    }
  },
  mounted: function () {
    // Checking if everything works, delete this right after you see that everything works
    console.log(this.partners)
  },
  methods: {
    searchPartners: function () {
      this.result = ''
    }
  }
}

// const sampleData = {
//   'partners': [
//     {
//       'id': 66,
//       'username': 'Hello World',
//       'shouldChangePassword': true,
//       'hasAcceptedContract': false,
//       'profile': {
//         'firstName': 'Hello World',
//         'lastName': 'Hello World',
//         'businessName': 'Hello World',
//         'phone': 'Hello World',
//         'businessWebsite': 'Hello World',
//         'skypeId': 'Hello World',
//         'socialMedia': 'Hello World'
//       }
//     }
//   ]
// }
</script>
