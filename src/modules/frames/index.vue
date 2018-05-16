<template>
  <FrameList :frames="frames"/>
</template>

<script>
import { mapGetters } from 'vuex'
import store from './_store'
import FrameList from './_components/FrameList'

export default {
  name: 'FramesIndex',
  components: {
    FrameList
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

</style>
