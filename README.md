# Goal & Overview
Kidzie's Admin portal project is missing a page to manage partners.  
End goal is to develop this page using a tech stack similar to Kidzie's Admin portal (Vue, BootstrapVue, Axios, Vuex, Vue Router). 
 

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
### Clone repository then run the following commands:
```
npm install
```
```
npm run serve
```
