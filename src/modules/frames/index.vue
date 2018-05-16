<template>
  <div class="frame-list">
    <ul id="example-1">
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
  .left, .right {
    padding: 30px;
  }

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

  .right {
    grid-area: right;
    background-color: #E9E9E9;
  }

  input {
    border: none;
    padding: 20px;
    width: calc(100% - 40px);
    box-shadow: 0 5px 5px lightgrey;
    margin-bottom: 50px;
    outline: none;
  }

  .rm {
    float: right;
    text-transform: uppercase;
    font-size: .8em;
    background: #f9d0e3;
    border: none;
    padding: 5px;
    color: #ff0076;
    cursor:pointer;
  }

  button {
      padding: 10px;
      margin-top: 30px;
      width: 100%;
      background: none;
      border: 1px solid lightgray;
      outline: 0;
      cursor: pointer;
  } 
</style>
