<template>
<section class='account'>
  <section class="account-info-form">
    <h1>Account Info</h1>
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
    <button class="submit" @click.once="processForm">Save</button>
  </section>
  <section class="available-actions">
    <div>
      <h1>Actions</h1>
      Token cost: {{ tokenCost }}
    </div>
    <div class="actions">
      <div class="action-element" v-for="(action, i) in $store.state.availableActions" :key="i">
        <AccountAction :_action="action" @action-selected="registerActionSelection"/>
      </div>
    </div>
  </section>
</section>
</template>

<script>
// imports here
import AccountAction from '../components/account/AccountAction'
 
export default {
  name: 'Account',
  description: 'I am a PAGE that provides account info and actions',

  components: { AccountAction, },

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
      actionSelections: {}
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
      }
      this.$store.dispatch('update_customer_info', customerInfo)
    },

    registerActionSelection(obj) {
      console.log('obj', obj)
      this.actionSelections[obj.action] = obj.status
      if (this.actionSelections[obj.action] == 0) {
        delete this.actionSelections[obj.action]
      }
    }
  },

 computed: {
   tokenCost() {
     let cost = 0
     for (const action in this.actionSelections) {
       cost += this.actionSelections[action]
     }
     return cost
   },
 },

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
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.available-actions h1 {
  position: relative;
  text-align: left;
  margin-left: 12px;
  margin-bottom: 12px;
}

h1 {
  font-size: 1.5rem;
  font-weight: 600;
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
  left: calc(17% + 90px);
  margin-top: 12px;
  border-radius: 25px;
  height: 40px;
  width: 120px;
  font-size: 1.5rem;
  border: 1px solid navy;
}
</style>