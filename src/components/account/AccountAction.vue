<template>
<section class='account-action' @click="bumpStatus">
  <div class="fake-checkbox" :class="checkboxClass" ></div>
  <div class="action-name">{{ _action }}</div>
</section>
</template>

<script>
// imports here
 
export default {
  name: '',
  description: '',

  components: {},

  emits: [
    'action-selected',
  ],

  props: {
    '_action': {
      type: String,
      required: true,
    }
  },

  data() {
    return {
      status: 0,
    }
  },

  methods: {
    bumpStatus() {
      let status = this.status
      status++
      if (status == 3) status = 0
      this.status = status
      this.$emit('action-selected', {action: this._action, status: this.status})
    }
  },

 computed: {
   checkboxClass() {
     if (this.status == 0) return ''
     if (this.status == 1) return 'available'
     if (this.status == 2) return 'required'
   }
 }
}
</script>

<style scoped>
section.account-action {
  position: relative;
  display: grid;
  grid-template-columns: 20px auto;
  text-align: left;
  margin-bottom: 12px;
}

section.account-action:hover {
  cursor: pointer;
}

.fake-checkbox {
  /* display:inline-block; */
  height: 12px;
  max-width: 12px;
  border: 1px solid silver;
}

.action-name  {
  display: inline-block;
  line-height: 14px;
}

.available {
  background-color: pink;
  border: 1px solid pink;
}

.required {
  background-color: red;
  border: 1px solid red;
}
</style>