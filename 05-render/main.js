// let renderComponent = {
//   render(h) {
//     return h(
//       'div', {
//         'attrs': {
//           class: 'render-card'
//         }
//       },[
//         h('header', {
//           'attrs': {
//             class: 'card-header card-header-title'
//           }
//         }, this.message)
//       ]
//       )
//   },
//   props: ['message']
// }

let renderComponent = {
  render(h) {
    return (
      <div class="render-card">
        <header class="card-header card-header-title">
          {this.message}
        </header>  
      </div>
    )
  },
  props: ['message']
}

new Vue({
  el: '#app',
  data: {
    message: 'greeting'
  },
  components: {
    'render-component': renderComponent
  }
})