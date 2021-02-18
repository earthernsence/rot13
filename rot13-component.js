"use strict";

let app = Vue.createApp({});

app.component("rot13", {
  data() {
    return {
      input: "",
      output: rot13info.output
    }
  },
  methods: {
    rot13thatbitch() {
      this.output = rot13(this.input)
    }
  },
  computed: {
    enterLabel() {
      return `Press enter (or click the button!) to either encode/decode`
    },
    buttonLabel() {
      return `encode/decode`
    }
  },
  template: `
  <div style="text-align:center">
      <textarea 
      v-model="input"
      id="input" 
      name="input"
      autofocus
      @change="rot13thatbitch"
      @keyup="rot13thatbitch"
      ></textarea>
    <br>
      <div id="arrow">&#11015;</div>
      <br>
      <div>Funky magic happens!</div>
      <br>
      <div id="arrow">&#11015;</div>
    <br>
    <textarea
      v-model="this.output"
      id="output" 
      name="output"
      readonly
      ></textarea>
  </div> 
  `
})

app.mount('#vue')

// We goin to flavortown USA
// hi i'm guy fieri and we're rolling out
// looking for america's greatest
// diners, drive-ins, and dives.