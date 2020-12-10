import API from "../API/api.js";

export default {
    state: {
        partners: []
    },
    mutations: {
        SET_PARTNERS(state, partners){
            state.partners = partners
        },
        //when page refreshes, change is gone. recommended to use api post method 
        ADD_PARTNER (state, partner){
            let partners = state.partners.concat(partner) //or push(partner)
            state.partners = partners
        },
        EDIT_PARTNER(state, partner){
            state.partners.forEach(p => {
                if (p.id == partner.id) {
                    p = partner
                }
            })
        },
        DELETE_PARTNER(state, partnerId){
            let partners = state.partners.filter(v => v.id != partnerId)
            state.partners = partners
        }
    },
    actions: {
        // use as async/await
        async loadPartners({commit}){
            let res = await API.searchPartners()
            commit('SET_PARTNERS', res.data)
        },
        addPartner({commit}, partner){
            // call api post method to addedPartner then return addedPartner at the end
            commit('ADD_PARTNER', partner)
        },
        editPartner({commit}, partner){
            // corresponds to put request with a response of new partner
            commit('EDIT_PARTNER', partner)
        },
        deletePartner({commit}, partner){
            commit('DELETE_PARTNER', partner.id)
            // delete partner from server, use response status as condition and commmit inside if statement
            // status 200||204
        }
    },
    getters: {
        getPartner: state => id => {
            return state.partners.find(p => p.id == id)
        }
    }
}