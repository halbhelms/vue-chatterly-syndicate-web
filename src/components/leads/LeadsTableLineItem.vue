<template>
<section class='leads-table-line-item'>
  <div class="date">{{ _lead.date }}</div>
  <div class="contact" @click="drilldown(_lead.id)">{{ _lead.contact }}</div>
  <div class="location">{{ _lead.location }}</div>
  <div class="phone">{{ _lead.phone }}</div>
  <div class="qualification">{{ _lead.qualification.requiredResponses / _lead.qualification.requiredRequested * 100 }}%</div>
  <button class="archive" @click="archiveLead(_lead.id)">Archive</button>
</section>
</template>

<script>
// imports here
 
export default {
  name: 'LeadsTableLineItem',
  description: '',

  components: {},

  props: {
    _lead: {
      type: Object,
      required: true,
    }
  },

  data() {
    return {}
  },

  methods: {
    archiveLead(leadId) {
      this.$store.dispatch('archive_lead', leadId)
    },

    drilldown(leadId) {
      console.log('leadId', leadId)
      this.$store.dispatch('set_active_lead_id', leadId)
      this.$emit('show-details', leadId)
    }
  },

 computed: {}
}
</script>

<style scoped>
section.leads-table-line-item {
  position: relative;
  display: grid;
  grid-template-columns: 120px 1fr 1fr 160px 160px 140px;
  margin: 12px 40px 0 40px;
  text-align: left;
}

.contact:hover {
  cursor: pointer;
}
</style>