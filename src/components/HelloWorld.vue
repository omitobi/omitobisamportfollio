<template>
  <div class="hello">
    <h1 class="message">{{ msg }}</h1>
    <ul class="small-text tech-tags">
      <li><a href="#">#PHP</a></li>
      <li><a href="#">#Laravel</a></li>
      <li><a href="#">#VueJS</a></li>
      <li><a href="#">#IBMWatson</a></li>
      <li><a href="#">#AWS</a></li>
      <li><a href="#">#NodeJS</a></li>
    </ul>
    <status>
    </status>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://linkedin.com/in/omitobi"
          target="_blank"
        > <img src="../assets/In-2C-21px-R.png" alt="Omitobi LinkedIn profile" height="15">@omitobi
        </a>
      </li>
      <li>
        <a
          href="https://github.com/omitobi"
          target="_blank"
        > <img src="../assets/GitHub-Mark-64px.png" alt="Omitobi Github profile" width="15" height="15">@omitobi
        </a>
      </li>
      <li>
        <a
          href="https://transprime.org"
          target="_blank"
        >Transprime
        </a>
      </li>
      <li>
        <a
          href="https://omitobisam.wordpress.com"
          target="_blank"
        >
          <img src="../assets/WordPress-logotype-wmark.png" alt="Wordpress Blog" width="15" height="15">Omitobisam
        </a>
      </li>
      <li>
        <a
          href="https://omitobisoft.wordpress.com"
          target="_blank"
        >
          <img src="../assets/WordPress-logotype-wmark.png" alt="Wordpress Blog" width="15" height="15">Omitobisoft
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
  color: darkorchid;
}
.message {
  font-size: calc(100% + 10px);
}
.small-text {
  font-size: 8px;
}
.purple-color {
  color: darkorchid;
}
.tech-tags {
  background: lightgrey;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 12px;
  margin-top: -10px;
}
</style>
