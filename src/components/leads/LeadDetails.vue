<template>
<section class='lead-details'>
   <!-- Modal Background and Modal -->
  <div id="modal-background">
    <div id="modal">
      <span id="close-btn" @click="closeModal">&times;</span>
      <section class="heading">
        <div class="name">{{ lead.contact }}</div>
        <div class="date-time">12 Jun 2021 9.22 AM</div>
      </section>
      <section class="contact-info">
        <div class="address">
          <div class="street">102 West Broad St</div>
          <div class="city-state-zip">Henderson, NV 89102</div>
        </div>
        <div class="phone-email">
          <div class="phone">702.558.1578</div>
          <div class="email">ewentz22@gmail.com</div>
        </div>
      </section>
      <section class="transcript">
        <LeadTranscriptMessage v-for="transcriptMessage in transcriptMessages" :_transcriptMessage="transcriptMessage" :key="transcriptMessage.message" />
      </section>
    </div>
  </div>
</section>
</template>

<script>
// imports here
import LeadTranscriptMessage from './LeadTranscriptMessage'
export default {
  name: 'LeadDetails',
  description: 'I show the details for a lead within the context of a modal.',

  components: { LeadTranscriptMessage, },

  emits: ['close-modal'],

  props: {},

  data() {
    return {}
  },

  methods: {
    closeModal() {
      this.$emit('close-modal')
    },
  },

 computed: {
   lead() {
     return this.$store.getters.activeLead
   },

   transcriptMessages() {
     return this.$store.getters.transcript
   },
 }
}
</script>

<style scoped>
section.lead-details {
  position: relative;
}

.heading {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90vw;
  font-weight: 600;
}

.contact-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  text-align: left;
}
.name, .date-time {
  font-size: 2rem;
};


.address, .phone-email {
  text-align: left;
}

.transcript {
  margin-top: 20px;
}

/* modal part */
#modal-background {
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

#modal {
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  height: 90vh;
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  font-size: 1.5rem;
  animation-name: animatemodal;
  animation-duration: 0.4s;
}

#close-btn {
  align-self: flex-end;
}

#close-btn:hover {
  cursor: pointer;
  color: #ff0000;
}

/* animation part */
@keyframes animatemodal {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 50%;
    opacity: 1;
  }
}
/* animation part end */

/* modal part end */
</style>