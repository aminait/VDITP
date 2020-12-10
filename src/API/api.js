const data = `[
  {
    "id": 66,
    "username": "Hello World1",
    "shouldChangePassword": true,
    "hasAcceptedContract": true,
    "profile": {
      "firstName": "first",
      "lastName": "Business",
      "businessName": "Hello business",
      "phone": "Hello phone",
      "businessWebsite": "Hello web",
      "skypeId": "Hello skype",
      "socialMedia": "Hello social"
    }
  },
  {
    "id": 41,
    "username": "Hello World2",
    "shouldChangePassword": false,
    "hasAcceptedContract": false,
    "profile": {
      "firstName": "second",
      "lastName": "business2",
      "businessName": "Hello business2",
      "phone": "phone2",
      "businessWebsite": "Hello web2",
      "skypeId": "Hello skype2",
      "socialMedia": "Hello social2"
    }
  },
  {
    "id": 11,
    "username": "Hello World3",
    "shouldChangePassword": false,
    "hasAcceptedContract": true,
    "profile": {
      "firstName": "Fourth",
      "lastName": "business3",
      "businessName": "Hello business3",
      "phone": "phone4",
      "businessWebsite": "Hello web2",
      "skypeId": "Hello skype2",
      "socialMedia": "Hello social2"
    }
  },
  {
    "id": 24,
    "username": "Hello World4",
    "shouldChangePassword": false,
    "hasAcceptedContract": false,
    "profile": {
      "firstName": "Fourth",
      "lastName": "business4",
      "businessName": "Hello business4",
      "phone": "phone4",
      "businessWebsite": "Hello web2",
      "skypeId": "Hello skype2",
      "socialMedia": "Hello social2"
    }
  },
  {
    "id": 333,
    "username": "Please work",
    "shouldChangePassword": false,
    "hasAcceptedContract": false,
    "profile": {
      "firstName": "Fifth",
      "lastName": "business5",
      "businessName": "Hello business5",
      "phone": "phone5",
      "businessWebsite": "Hello web2",
      "skypeId": "Hello skype2",
      "socialMedia": "Hello social2"
    }
  }
  ]`



export default class API {
    static searchPartners() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < .90) {
                    resolve({ "status": 200, "data": JSON.parse(data) })
                } else {
                    reject({ "status": 500, "data": null })
                }
            }, Math.random() * 500)
        })
    }
}
