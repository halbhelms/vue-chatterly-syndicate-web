import { createStore } from 'vuex'
import router from '../router/index'

export default createStore({
  state: {
    currentUser: {
      name: 'Sam Syndikatt',
    },
    customers: [
      {
        customerId: 1000,
        name: 'Northeast Plumbing',
        contact: 'Alice Chambers',
        avgIncomePerLead: 9.75,
        avgLeadsPerMonth: 234,
        status: 'active'
      },
      {
        customerId: 2000,
        name: 'Bee HVAC',
        contact: 'Ed Walters',
        avgIncomePerLead: 12.62,
        avgLeadsPerMonth: 467,
        status: 'active'
      },
      {
        customerId: 3000,
        name: 'Basmar Crimini & Sons',
        contact: 'Basmar Crimini',
        avgIncomePerLead: 16.52,
        avgLeadsPerMonth: 628,
        status: 'active'
      },
    ],

    availableActions: [
      'Intro',
      'Phone',
      'Email',
      'Residence Type',
      'Address',
      
    ]
  },
  mutations: {},

  getters: {},

  actions: {},

  modules: {
  }
})
