import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home"
import PartnerEdit from "../views/PartnerEdit"
import PartnerAdd from "../views/PartnerAdd"

Vue.use(VueRouter);

// partners/{id}/edit
// more? details? button to display rest of fields for row
const routes = [
  {
    path: "/",
    name: "all-partners",
    component: Home,
  },
  {
    path: "/partner/new",
    name: "partner-add",
    component: PartnerAdd,
    params: true
  },
  {
    path: "/partner/:id/edit",
    name: "partner-edit",
    component: PartnerEdit,
    params: true
  }
];

const router = new VueRouter({
  routes,
});

export default router;
