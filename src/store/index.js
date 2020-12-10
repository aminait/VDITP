import Vue from "vue";
import Vuex from "vuex";
import partnersModule from "./partners"


Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        partners: partnersModule
    }

})
