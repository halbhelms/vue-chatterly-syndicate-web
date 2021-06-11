<template>
<section class='home'>
  <CustomerTableHeader />
  <CustomerTableLineItem v-for="customerSummary in $store.state.customers" :key="customerSummary.customerId" :_customer_summary="customerSummary" />
</section>
<button class='new-customer'>Add Customer</button>
</template>

<script>
// imports here
import CustomerTableHeader from '../components/customers/CustomerTableHeader'
import CustomerTableLineItem from '../components/customers/CustomerTableLineItem'
 
export default {
  name: 'Home',
  description: 'I am the HOME PAGE for this app.',

  components: { CustomerTableHeader, CustomerTableLineItem, },

  props: {},

  data() {
    return {

    }
  },

  methods: { },

 computed: {

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

.new-customer {
  position: absolute;
  top: 120px;
  right: 20px;
}


</style>
