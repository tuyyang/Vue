// let counterOne = {
//   template: `
//     <button @click="counter++">
//       you click me {{counter}} times
//     </button>
//   `,
//   data() {
//     return {
//       counter: 0
//     }
//   }
// }

// let counterTwo = {
//   template: `
//     <button @click="counter++">
//       you click me {{counter}} times
//     </button>
//   `,
//   data() {
//     return {
//       counter: 0
//     }
//   }
// }

// let counterThree = {
//   template: `
//     <button @click="counter++">
//       you click me {{counter}} times
//     </button>
//   `,
//   data() {
//     return {
//       counter: 0
//     }
//   }
// }

// new Vue({
//   el:'#app',
//   data: {
//     message: 'Greeting'
//   },
//   components: {
//     'counter-one': counterOne,
//     'counter-two': counterTwo,
//     'counter-three': counterThree
//   }
// })

let singleLineTemplate = {
  template: `
    <div>
      <header>{{message}}</header>
    </div>
  `,
  props: ['message']
}

new Vue({
  el: '#app',
  data: {
    message: 'greeting'
  },
  components: {
    'single-line-template': singleLineTemplate
  }
})