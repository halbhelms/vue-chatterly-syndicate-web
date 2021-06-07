<template>
<section class='leads-table-header'>
  <h2 class="date">Date</h2>
  <h2 class="contact">Contact</h2>
  <h2 class="phone">Phone</h2>
  <h2 class="qualification">Qualification</h2>
  <h2 class="archive">Archive Lead</h2>
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
section.leads-table-header {
  position: relative;
  display: grid;
  grid-template-columns: 120px auto 160px 160px 140px;
  margin: 12px 40px 0 40px;
  text-align: left;
}

h2 {
  font-size: 1.2rem;
  font-weight: 600;
}
</style>