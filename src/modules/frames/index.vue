<template>
  <div class="frame-list">
    <h1>Frame List</h1>
    <ul>
      <li v-for="(frame, index) in frames" v-bind:key="index">
        <frame :frame="frame" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from './_store'
import Frame from './_components/Frame'

export default {
  name: 'FrameList',
  components: {
    Frame
  },
  computed: {
    ...mapGetters({
      frames: '$_frames/frames'
    })
  },
  created() {
    const STORE_KEY = '$_frames';
    if (!(STORE_KEY in this.$store._modules.root._children)) {
      this.$store.registerModule(STORE_KEY, store)
    }
  },
  mounted() {
    this.$store.dispatch('$_frames/getFrames')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
  ul {
    list-style-type: none;
    padding: 0;
    background-color: #F4F4F4;
  }
  ul li {
    padding: 20px;
    background: white;
    margin-bottom: 8px;
  } 
</style>
