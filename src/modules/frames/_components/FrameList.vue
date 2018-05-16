<template>
  <div class="frame-list">
    <h1>Frame List</h1>
    <FrameListElement v-for="(frame, index) in frames" v-bind:key="index" :frame="frame">
    </FrameListElement>
  </div>
</template>

<script>
import FrameListElement from './FrameListElement';

export default {
    name: 'FrameList',
    components: {
        FrameListElement
    },
    props: {
        frames: {
            type: Array
        }
  }
}
</script>

<style scoped>

</style>


