<template>
<div class='leads-filter'>
  <div class="show-archived">
    <input @click="toggleArchived" type="checkbox" name="show-archived" id="show-archived" value={true} /> 
    <label for="show-archived">Show archived leads</label>
  </div>
</div>
</template>

<script>
// imports here
 
export default {
  name: 'LeadsFilter',
  description: 'I provide the customer a way of filtering leads.',

  components: {},

  props: {},

  data() {
    return {}
  },

  methods: {
    toggleArchived() {
      this.$store.dispatch('toggle_include_archived_leads')
   }
  },

 computed: {}
}
</script>

<style scoped>
/* * {
  outline: 1px solid pink;
} */

div.leads-filter {
  position: relative;
  height: 30px;
  border-bottom: 1px solid silver;
  margin-top: 12px;
}

label {
  margin-left: 12px;
}
</style>