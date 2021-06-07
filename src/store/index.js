import { createStore } from 'vuex'
import router from '../router/index'

export default createStore({
  state: {
    includeArchivedLeads: false,
    leads: [
      {
        status: 'active',
        date: '12 Jun 2021',
        contact: 'Ellen Wentz',
        phone: '702.558.1578',
        location: 'Henderson, NV',
        qualification: {
          desired: 6,
          desiredRequested: 6,
          desiredResponses: 4,
          required: 4,
          requiredRequested: 4,
          requiredResponses: 4
        },
        transcript: [
          {
            origin: 'agent',
            message: 'Intro/Name Request'
          },
          {
            origin: 'contact',
            message: 'Ellen Wentz',
          },
          {
            origin: 'agent',
            message: 'How can I help you today?'
          },
          {
            origin: 'contact',
            message: 'My water heater is leaking.'
          },
          {
            origin: 'agent',
            message: "Oh no! Well, let's get you some help with that."
          },
          {
            origin: 'agent',
            message: 'Location Request'
          },
          {
            origin: 'contact',
            message: '207 W. Broad, Henderson, NV 89102'
          },
          {
            origin: 'contact',
            message: 'How soon can someone get out here?'
          },
          {
            origin: 'agent',
            message: 'Urgency Response'
          },
          {
            origin: 'agent',
            message: 'Phone Request'
          },
          {
            origin: 'contact',
            message: '702.558.1578'
          },
          {
            origin: 'agent',
            message: "Someone should be calling you shortly. Is there anything else I can do for you?"
          },
          {
            origin: 'system',
            message: 'Chat Terminated'
          }
        ]
      },
      {
        status: 'active',
        date: '12 Jun 2021',
        contact: 'Davis Thomas',
        phone: '702.217.5936',
        location: 'Summerlin, NV',
        qualification: {
          desired: 6,
          desiredRequested: 6,
          desiredResponses: 3,
          required: 4,
          requiredRequested: 4,
          requiredResponses: 2
        },
      },
      {
        status: 'archived',
        date: '18 Jun 2021',
        contact: 'Andrea Barnes',
        phone: '702.593.4177',
        location: 'Las Vegas, NV',
        qualification: {
          desired: 6,
          desiredRequested: 6,
          desiredResponses: 5,
          required: 4,
          requiredRequested: 4,
          requiredResponses: 3
        },
      },
    ],
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

    getLeads: state => includeArchived => {
      if (includeArchived) {
        console.log(state.leads)
        return state.leads
      } else {
        return state.leads.filter( lead => {
          console.log(state.leads)
          return lead.status == 'active'
        })
      }
    }

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
