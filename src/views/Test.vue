<template>
  <div class="home">
    <Links :links="links" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Links from '@/components/Links.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'test',
  components: {
    Links
  },
  computed: {
      ...mapGetters({
          links: 'links/links'
      })
  }
}
</script>
