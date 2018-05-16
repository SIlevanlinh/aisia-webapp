<template>
    <div class="links">
        <ul>
            <li v-for="(link, index) in links" v-bind:key="index">{{ link }}</li>
        </ul>
    </div>    
</template>

<script>
export default {
  name: 'Links',
  props: {
    links: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
