<template>
    <div class="frame">
        <span class="title">Frame <span class="badge badge-secondary">#{{ frame.id }}</span> {{ frame.title.capitalize() }} </span>
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

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
</script>

<style scoped>
    .title {
        font-size: 20px;
    }
</style>


