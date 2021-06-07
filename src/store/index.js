import { createStore } from 'vuex'
import router from '../router/index'

export default createStore({
  state: {
    includeArchivedLeads: false,
  },
  mutations: {
    TOGGLE_INCLUDE_ARCHIVED_LEADS(state) {
      state.includeArchivedLeads = !state.includeArchivedLeads
    }
  },
  getters: {
    getCurrentCustomer: () => customerId => {
      return {
        name: 'Kevin Kustomr',
        customerId: 200,
        lastLogin: new Date('5-22-2021'),
        email: 'kevink@gmail.com',
        passPhrase: 'I am a customer. Let me in.',
        phone: '941.714.4587',
        streetAddress: '2217 Tamiami Hwy',
        cityAddress: 'Sarasota',
        stateAddress: 'FL',
        zipCode: '30062',
        timeZone: 'eastern',   
      }
    },
    
    getLeadsThisMonth: () => (customerId) =>{
      // TODO: API call here but mocked for now
        return 362;
    },
    
    getLeadsThisYear: () => (customerId) =>{
      // TODO: API call here but mocked for now
        return 2102;
    },
    
    getLifetimeLeads: () => (customerId) =>{
      // TODO: API call here but mocked for now
        return 4651;
    },

  },
  actions: {
    update_customer_info({ commit}, customerInfo) {
      // TODO: TODO: API call
      router.push('/')
    },
    toggle_include_archived_leads({ commit}) {
      commit('TOGGLE_INCLUDE_ARCHIVED_LEADS')
    }
  },
  modules: {
  }
})
