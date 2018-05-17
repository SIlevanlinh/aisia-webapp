<template>
    <div class="frame">
        <h1>Specific Frame</h1>
        <h3>{{ frame.title }} </h3>
        <img :src="frame.url" />
    </div>
</template>

<script>
export default {
    name: 'Frame',
    props: {
        frame: {
            type: Object
        }
    }
}
</script>

<style scoped>

</style>


