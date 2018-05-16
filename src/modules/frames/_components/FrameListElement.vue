<template>
    <div class="frame">
        <img :src="frame.thumbnailUrl" />
    </div>
</template>

<script>
export default {
    name: 'FrameListElement',
    props: {
        frame: {
            type: Object
        }
  }
}
</script>

<style scoped>
    .frame {
        display: inline;
    }
</style>


