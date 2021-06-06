<template>
<section class='home'>
  <div class="data">
    <div class="data-point">
      <div class="data-point-title">Chats this month</div>
      <div class="data-point-datum">{{ chatsThisMonth }}</div>
    </div>
    <div class="data-point">
      <div class="data-point-title">Chats this year</div>
      <div class="data-point-datum">{{ chatsThisYear }}</div>
    </div>
    <div class="data-point">
      <div class="data-point-title">Earnings this month</div>
      <div class="data-point-datum">${{ earningsThisMonth }}</div>
    </div>
    <div class="data-point">
      <div class="data-point-title">Earnings this year</div>
      <div class="data-point-datum">${{ earningsThisYear }}</div>
    </div>
    <div class="data-point">
      <div class="data-point-title">Lifetime earnings</div>
      <div class="data-point-datum">${{ lifetimeEarnings }}</div>
    </div>
  </div>
  <div class="chart">Chart</div>
</section>
</template>

<script>
// imports here
 
export default {
  name: 'Home',
  description: 'I am the HOME PAGE for this app.',

  components: {},

  props: {},

  data() {
    return {
      agentId: 100,
    }
  },

  methods: {},

 computed: {
   chatsThisMonth() {
     return this.$store.getters.getChatsThisMonth(this.agentId)
   },
   chatsThisYear() {
     return this.$store.getters.getChatsThisYear(this.agentId)
   },
   earningsThisMonth() {
     return this.$store.getters.getEarningsThisMonth(this.agentId)
   },
   earningsThisYear() {
     return this.$store.getters.getEarningsThisYear(this.agentId)
   },
   lifetimeEarnings() {
     return this.$store.getters.getLifetimeEarnings(this.agentId)
   },
 }
}
</script>

<style scoped>
section.home {
  position: relative;
  display: grid;
  grid-template-columns: 40% 60%;
  margin-top: 24px;
}

.data-point {
  display: grid;
  grid-template-columns: 2fr 1fr;
}

.data-point-title {
  text-align: right;
  padding-right: 12px;
}

.data-point-datum {
  text-align: left;
  padding-left: 12px;
}


</style>
