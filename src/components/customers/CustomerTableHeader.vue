<template>
<section class='customer-table-header'>
  <div class="name">Company</div>
  <div class="leads-month">Avg Leads/Mo</div>
  <div class="income-lead">Avg Income/Lead</div>
  <div class="income-month">Avg Income/Mo</div>
  <div class="status">Status</div>
</section>
</template>

<script>
// imports here
 
export default {
  name: '',
  description: '',

  components: {},

  props: {},

  data() {
    return {}
  },

  methods: {},

 computed: {}
}
</script>

<style scoped>
section.customer-table-header {
  position: relative;
  width: 90%;
  margin: 12px 5% 0 5%;
  display: grid;
  grid-template-columns: auto 200px 200px 200px 140px;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: left;
  height: 54px;}
</style>