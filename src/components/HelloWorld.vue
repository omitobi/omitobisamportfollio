<template>
  <div class="hello">
    <h1 class="message">{{ msg }}</h1>
    <status>
    </status>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://linkedin.com/in/omitobi"
          target="_blank"
        > <img src="../assets/In-2C-21px-R.png" alt="Omitobi LinkedIn profile" height="15">
          @omitobi
        </a>
      </li>
      <li>
        <a
          href="https://github.com/omitobi"
          target="_blank"
        > <img src="../assets/GitHub-Mark-64px.png" alt="Omitobi Github profile" width="15" height="15">
          @omitobi
        </a>
      </li>
      <li>
        <a
          href="https://omitobisam.wordpress.com"
          target="_blank"
        >
          Omitobisam Blog
        </a>
      </li>
      <li>
        <a
          href="https://omitobisoft.wordpress.com"
          target="_blank"
        >
          Omitobisoft Blog
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/omitobi"
          target="_blank"
        >
          <img src="../assets/Twitter_Social_Icon_Circle_Color.png" height="15" width="15"/>@omitobi
        </a>
      </li>
      <br><br>
      <li>
        <stack-flair>
        </stack-flair>
      </li>
    </ul>

  </div>
</template>

<script>
import StackFlair from './StackFlair'
import Status from './Status'

export default {
  components: {
    Status,
    StackFlair},
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Oluwatobi Samuel Omisakin'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.message {
  font-size: calc(100% + 10px);
}
</style>
