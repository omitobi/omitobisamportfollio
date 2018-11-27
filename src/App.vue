<template>
  <div id="app">
    <div class="profile-card">
      <profile-cover>
      </profile-cover>
      <router-view/>
    </div>
  </div>
</template>

<script>
import ProfileCover from './components/ProfileCover'

export default {
  components: {
    ProfileCover},
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1%;
  height: 80%;
}

.profile-card {
  height: 100%;
  border: 1px solid lightgray;
  border-radius: 12px;
  margin: 0 10% 0 10%;
  /*box-shadow: inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05);*/
  -webkit-box-shadow: 5px 5px 10px -5px rgba(0,0,0,0.5);
  -moz-box-shadow: 5px 5px 10px -5px rgba(0,0,0,0.5);
  box-shadow: 5px 5px 10px -5px rgba(0,0,0,0.5);
}
</style>
