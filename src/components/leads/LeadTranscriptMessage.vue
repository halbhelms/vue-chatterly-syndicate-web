<template>
<section class='lead-transcript-message'>
  <div :class="_transcriptMessage.origin">{{ _transcriptMessage.origin }}</div>
  <div :class="_transcriptMessage.origin">{{ _transcriptMessage.message }}</div>
</section>
</template>

<script>
// imports here
 
export default {
  name: 'LeadTranscriptMessage',
  description: 'I am a single message from a lead transcript.',

  components: {},

  props: {
    '_transcriptMessage': {
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
section.lead-transcript-message {
  position: relative;
  display: grid;
  grid-template-columns: 140px auto;
  text-align: left;
}

.agent, .contact, .system {
  text-transform:capitalize;
}

.agent {
  font-style: italic;
}

.contact {
  font-weight: 600;
}

.system {
  text-transform:uppercase;
  color: red;
  font-weight: bold;

}
</style>