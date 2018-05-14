<template>
  <div class="frame">
    <ul id="example-1">
      <li v-for="(photo, index) in photos" v-bind:key="index">
        <img :src="photo.thumbnailUrl" />
      </li>
    </ul>
  </div>
</template>

<script>
import {HTTP} from '../http-common';

export default {
  data() {
    return {
      photos: [],
      errors: []
    }
  },

  created() {
    HTTP.get('photos')
    .then(response => {
      this.photos = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 

</style>
