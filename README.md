# Task 1 


### Compiles and hot-reloads for development
```
npm run serve
```


## Program Goal (Breif)
Kidzie's Admin portal project is missing a page to manage partners.  
End goal is to develop this page using a tech stack similar to Kidzie's Admin portal (Vue, BootstrapVue, Axios, Vuex, Vue Router).  

## Week 1 Goal
We need a simple Vue application. We need a form the allows us to search and filter partners.  
The fields needed to filter partners are:
1. "firstName" String
1. "lastName" String
1. "businessName" String
1. "phone" String
1. "hasAcceptedContract" Boolean

GraphQL Data Schema: 
```gql
type Partner {
    id: Int
    username: String
    shouldChangePassword: Boolean
    hasAcceptedContract: Boolean
    profile: PartnerProfile
}

type PartnerProfile {
    firstName: String
    lastName: String
    businessName: String
    phone: String
    businessWebsite: String
    skypeId: String
    socialMedia: String
}
```

For sample data, check the file sampledata.json

## Details
1. We want the form layed out with the mentioned fields
1. We want the data variables bound to the inputs accordingly
1. We want when the search is started to use the sample data (will be changed later on to use API)
1. We want the searched partners listed along with their features (the most prominent features)
