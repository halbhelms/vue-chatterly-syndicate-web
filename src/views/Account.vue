<template>
<section class='account'>
  <section class="form-element">
    <label for="email">Email</label>
    <input type="text" id="email" name="email" v-model="email">
  </section>
  <section class="form-element">
    <label for="passPhrase">Pass phrase</label>
    <input type="text" id="passPhrase" name="passPhrase" v-model="passPhrase">
  </section>
  <section class="form-element">
    <label for="phone">Phone</label>
    <input type="text" id="phone" name="phone" v-model="phone">
  </section>
  <section class="form-element">
    <label for="streetAddress">Street</label>
    <input type="text" id="streetAddress" name="streetAddress" v-model="streetAddress">
  </section>
  <section class="form-element">
    <label for="cityAddress">City</label>
    <input type="text" id="cityAddress" name="cityAddress" v-model="cityAddress">
  </section>
  <section class="form-element">
    <label for="stateAddress">State</label>
    <input type="text" id="stateAddress" name="stateAddress" v-model="stateAddress">
  </section>
  <section class="form-element">
    <label for="zipCode">Zip code</label>
    <input type="text" id="zipCode" name="zipCode" v-model="zipCode">
  </section>
  <section class="form-element">
    <label for="timeZone">Time zone</label>
    <select id="timeZone" name="timeZone" v-model="timeZone">
      <option value="eastern">Eastern</option>
      <option value="central">Central</option>
      <option value="mountain">Mountain</option>
      <option value="western">Western</option>
    </select>
  </section>
  <section class="form-element">
    <label for="payPalId">PayPal ID</label>
    <input type="text" id="payPalId" name="payPalId" v-model="payPalId">
  </section>
  <section class="form-checkbox">
    <div class="spacer"></div>
    <section class="sleep-checkbox">
      <input type="checkbox" id="sleep" value={{true}} v-model="sleep">
      <label for="sleep">Sleep</label>
    </section>
  </section>
  <button class="submit" @click.once="processForm">Save</button>
</section>
</template>

<script>
// imports here
 
export default {
  name: 'Account',
  description: 'I am a PAGE that provides account info and actions',

  components: {},

  props: {},

  data() {
    return {
      agentId: 100,
      email: null,
      passPhrase: null,
      phone: null,
      streetAddress: null,
      cityAddress:null,
      stateAddress: null,
      zipCode: null,
      timeZone: null,
      payPalId: null,
      sleep: false,
    }
  },

  methods: {
    processForm() {
      const agentInfo = {
        email: this.email,
        passPhrase: this.passPhrase,
        phone: this.phone,
        streetAddress: this.streetAddress,
        cityAddress: this.cityAddress,
        stateAddress: this.stateAddress,
        zipCode: this.zipCode,
        timeZone: this.timeZone,
        payPalId: this.payPalId,
        sleep: this.sleep,
      }
      this.$store.dispatch('update_customer_info', customerInfo)
    },
  },

 computed: {},

 mounted() {
   const customerInfo = this.$store.getters.getCurrentCustomer(200)
   this.email = customerInfo.email
   this.passPhrase = customerInfo.passPhrase
   this.phone = customerInfo.phone
   this.streetAddress = customerInfo.streetAddress
   this.cityAddress = customerInfo.cityAddress
   this.stateAddress = customerInfo.stateAddress
   this.zipCode = customerInfo.zipCode
   this.timeZone = customerInfo.timeZone
   this.payPalId = customerInfo.payPalId
   this.sleep = customerInfo.sleep
 }
}
</script>

<style scoped>
section.account {
  position: relative;
  text-align: center;
}

.form-element {
  margin-top: 12px;
  display: grid;
  grid-template-columns: 100px 200px;
  margin-left: 25%;
  margin-bottom: 0;
}

.form-checkbox {
  margin-top: 12px;
  display: grid;
  grid-template-columns: 100px 120px;
  margin-left: 25%;
  margin-bottom: 0;
}

.sleep-checkbox {
  text-align: left;
}

input, select {
  border: 1px solid grey;
}

input[type=checkbox] {
  margin-right: 8px;
}

label {
  text-align: right;
  margin-right: 12px;
}

button {
  position: absolute;
  left: calc(25% + 90px);
  margin-top: 12px;
  border-radius: 25px;
  height: 40px;
  width: 220px;
  font-size: 1.5rem;
  border: 1px solid navy;
}
</style>