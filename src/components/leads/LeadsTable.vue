<template>
<section class='leads-table'>
  <LeadsTableLineItem v-for="lead in leads" :key="lead.contact" :_lead="lead" />
</section>
</template>

<script>
// imports here
import LeadsTableLineItem from './LeadsTableLineItem'
export default {
  name: 'LeadsTable',
  description: 'I display the sales leads',

  components: { LeadsTableLineItem, },

  props: {},

  data() {
    return {}
  },

  methods: {

  },

  computed: {
    leads() {
      if (this.$store.state.includeArchivedLeads) {
        return this.$store.getters.getLeads(true)
      } else {
        return this.$store.getters.getLeads(false)
      }
    },
  },

  mounted() {
  }
}
</script>

<style scoped>
section.leads-table {
  position: relative;
}
</style>