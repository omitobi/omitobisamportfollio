<template>
    <div class="profile-cover">
      <profile-picture>
      </profile-picture>
    </div>
</template>

<script>
import ProfilePicture from './ProfilePicture'

export default {
  components: {ProfilePicture},
  name: 'ProfileCover'
}
</script>

<style scoped>
.profile-cover {
  width: 100%;
  background: aliceblue;
  border-bottom: 2px solid lightgrey;
  border-radius: 12px 12px 0 0;
  background: url("../assets/wretched_good_people.jpg");
  background-repeat: repeat;
  /*height: 20%;*/
  background-position: left;
  background-size: cover;
  background-origin: content-box;
}
</style>
