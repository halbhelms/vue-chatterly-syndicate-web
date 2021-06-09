<template>
store activeLeadId{{ $store.state.activeLeadId }}
<LeadDetails v-if="showModal" @close-modal="closeModal"/>
<section class='home' v-else>
  <section class="leads-brief">
    <section class="this-month brief">
      <div class="brief-label">Leads this month</div>
      <div class="brief-data">{{ leadsThisMonth }}</div>
    </section>
    <section class="this-year brief">
      <div class="brief-label">Leads this year</div>
      <div class="brief-data">{{ leadsThisYear }}</div>
    </section>
    <section class="lifetime brief">
      <div class="brief-label">Leads lifetime</div>
      <div class="brief-data">{{ lifetimeLeads }}</div>
    </section>
  </section>
  <LeadsFilter />
  <LeadsTableHeader />
  <LeadsTable @open-modal="openModal"/>
</section>
</template>

<script>
// imports here
import LeadsFilter from '../components/leads/LeadsFilter'
import LeadsTableHeader from '../components/leads/LeadsTableHeader'
import LeadsTable from '../components/leads/LeadsTable'
import LeadDetails from '../components/leads/LeadDetails'
 
export default {
  name: 'Home',
  description: 'I am the HOME PAGE for this app.',

  components: { LeadsFilter, LeadsTableHeader, LeadsTable, LeadDetails, },

  props: {},

  data() {
    return {
      customerId: 200,
      showModal: false,
    }
  },

  methods: {
    openModal() {
      console.log('openModal in Home')
      this.showModal = true;
    },

    closeModal() {
      this.showModal = false
    },
  },

 computed: {
   leadsThisMonth() {
     return this.$store.getters.getLeadsThisMonth(this.customerId)
   },
   leadsThisYear() {
     return this.$store.getters.getLeadsThisYear(this.customerId)
   },
   lifetimeLeads() {
     return this.$store.getters.getLifetimeLeads(this.customerId)
   },
   transcript() {

   }
 }
}
</script>

<style scoped>
/* * {
  outline: 1px solid green;
} */

section.home {
  position: relative;
  margin-top: 24px;
}

section.leads-brief {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 30px;
  border-bottom: 1px solid silver;
}

.brief {
  display: grid;
  grid-template-columns: 70% 30%;
}

.brief-label {
  text-align: right;
  margin-right: 12px;
}

.brief-data {
  text-align: left;
  margin-left: 12px;
}


</style>
