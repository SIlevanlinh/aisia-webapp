<template>
    <div class="frame">
        <img :src="frame.thumbnailUrl" />
    </div>
</template>

<script>
export default {
    name: 'frame',
    props: {
        frame: {
            type: Object
        }
  }
}
</script>

<style scoped>

</style>


