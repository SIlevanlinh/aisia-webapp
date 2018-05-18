<template>
  <div class="frames jumbotron" >
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <Frame class="frame-item" :frame="defaultFrame"/>
        </div>
        <div class="col-sm">
          <FrameList class="frame-list" :frames="frames"/>
        </div>
      </div>
    </div>   
  </div>  
</template>

<script>
import { mapGetters } from "vuex";
import store from "./_store";
import FrameList from "./_components/FrameList";
import Frame from "./_components/Frame";

export default {
  name: "FramesIndex",
  components: {
    FrameList,
    Frame
  },
  computed: {
    ...mapGetters({
      frames: "$_frames/frames",
      defaultFrame: "$_frames/currentFrame"
    })
  },
  created() {
    const STORE_KEY = "$_frames";
    if (!(STORE_KEY in this.$store._modules.root._children)) {
      this.$store.registerModule(STORE_KEY, store);
    }
  },
  mounted() {
    this.$store.dispatch("$_frames/getFrames");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.frame-item {
  float: left;
}

.frame-list {
  float: right;
}
</style>
