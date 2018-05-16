<template>
    <Links :links="links"/>
</template>

<script>
import { mapGetters } from 'vuex'
import store from './_store'
import Links from './_components/Links'

export default {
    name: 'LinksIndex',
    components: {
        Links
    },
    computed: {
        ...mapGetters({
            links: '$_links/links'
        })
    },
    created() {
        const STORE_KEY = '$_links';
        if (!(STORE_KEY in this.$store._modules.root._children)) {
            this.$store.registerModule(STORE_KEY, store)
        }
    }
    // mounted() {
    //     this.$store.dispatch('$_link/someAction')
    // }
}
</script>

