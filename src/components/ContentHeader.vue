<template>
    <div>
        <b-container class="anomaly-objects">
            <b-row class="content-header">
                <b-col>
                    <h1>Dashboard</h1>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'navbar',
        components: {}
    }
</script>

<style scoped>
.content-header {
    background: #ffffff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 3px;
}

.content-header:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
</style>

