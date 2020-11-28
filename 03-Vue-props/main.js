Vue.component('tweet-content', {
  template: `
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{tweet.name}}</strong>
          <small>{{tweet.handle}}</small>
          <br>
          {{tweet.tweet}}
        </p>
      </div>
      <div class="level-left">
        <a href="#" class="level-item">
          <span class="icon is-small">
            <i class="fas fa-heart"></i>
          </span>
          <span class="likes">
            {{tweet.likes}}
          </span>
        </a>
      </div>
    </div>
  `,
  props: ['tweet']
})

Vue.component('tweet-component', {
  template: `
    <div class="tweet">
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image">
              <img :src="tweet.img">
            </figure>
          </div>
          <tweet-content :tweet="tweet"></tweet-content>
        </article>
      </div>
      <div class="control">
        <input type="text" class="input" placeholder="Tweet your reply...">
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
    </div>
  `,
  props: ['tweet']
})

new Vue({
  el: '#app',
  data: {
    tweets
  }
})