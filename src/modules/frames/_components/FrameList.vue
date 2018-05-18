<template>
  <div class="frame-list">
    <h1>Frames <span class="badge badge-secondary">{{ frames.length }}</span></h1>
    <FrameListElement v-for="(frame, index) in frames" v-bind:key="index" :frame="frame" v-on:click.native="updateCurrentFrame(frame)">
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
    },
    methods: {
        updateCurrentFrame(frame) {
            this.$store.dispatch('$_frames/updateCurrentFrame', frame)         
        }
    }
}
</script>

<style scoped>

</style>


