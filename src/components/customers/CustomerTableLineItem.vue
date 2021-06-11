<template>
<section class='customer-table-line-item'>
  <div class="name">{{_customer_summary.name}}</div>
  <div class="leads-mo">{{_customer_summary.avgLeadsPerMonth}}</div>
  <div class="income-lead">{{ _customer_summary.avgIncomePerLead }}</div>
  <div class="income-mo">{{ _customer_summary.avgLeadsPerMonth * _customer_summary.avgIncomePerLead }}</div>
  <div class="status">
    <select>
      <option value="active" checked>Active</option>
      <option value="paused">Paused</option>
    </select>
  </div>
</section>
</template>

<script>
// imports here
 
export default {
  name: 'CustomerTableLineItem',
  description: '',

  components: {},

  props: {
    '_customer_summary': {
      type: Object,
      required:true,
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
section.customer-table-line-item {
  position: relative;
  width: 90%;
  margin: 12px 5% 0 5%;
  display: grid;
  grid-template-columns: auto 200px 200px 200px 140px;
  text-align: left;
}
</style>