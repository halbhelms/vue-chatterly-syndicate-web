<template>
<section class='home'>
  
</section>
</template>

<script>
// imports here

 
export default {
  name: 'Home',
  description: 'I am the HOME PAGE for this app.',

  components: { },

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


</style>
