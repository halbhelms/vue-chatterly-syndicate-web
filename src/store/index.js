import { createStore } from 'vuex'
import router from '../router/index'

export default createStore({
  state: {
  },
  mutations: {
  },
  getters: {
    getCurrentAgent: () => agentId => {
      // TODO: API call here but mocked for now
      return {
        name: 'Andy Ayjent',
        agentId: 100,
        lastLogin: new Date('05-20-2021'),
        email: 'andy@chatterlylive.com',
        passPhrase: 'some animals are more equal than others',
        phone: '702.569.1258',
        streetAddress: '1104 Las Vegas Blvd',
        cityAddress: 'Las Vegas',
        stateAddress: 'NV',
        zipCode: '89117',
        timeZone: 'western',
        payPalId: '54885644',
        sleep: false,
      }
    },
    
    getChatsThisMonth: () => (agentId) =>{
      // TODO: API call here but mocked for now
        return 200;
    },
    
    getChatsThisYear: () => (agentId) =>{
      // TODO: API call here but mocked for now
        return 102;
    },
    
    getEarningsThisMonth: () => (agentId) =>{
      // TODO: API call here but mocked for now
        return 325.50;
    },
    
    getEarningsThisYear: () => (agentId) =>{
      // TODO: API call here but mocked for now
        return 950.75;
    },
    
    getLifetimeEarnings: () => (agentId) =>{
      // TODO: API call here but mocked for now
        return 2948.50;
    },

  },
  actions: {
    update_agent_info({ commit}, agentInfo) {
      // TODO: TODO: API call
      router.push('/')
    },
  },
  modules: {
  }
})
