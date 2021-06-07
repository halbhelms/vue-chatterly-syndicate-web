<template>
<section class='leads-table-line-item'>
  <div class="date">{{ _lead.date }}</div>
  <div class="contact">{{ _lead.contact }}</div>
  <div class="location">{{ _lead.location }}</div>
  <div class="phone">{{ _lead.phone }}</div>
  <div class="qualification"></div>
  <button class="archive">Archive</button>
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

  methods: {},

 computed: {}
}
</script>

<style scoped>
section.leads-table-line-item {
  position: relative;
  display: grid;
  grid-template-columns: 120px auto 160px 160px 140px;
  margin: 12px 40px 0 40px;
  text-align: left;
}
</style>