<template>
  <div class="test">
    <b-container>
        <NavbarBg />
        <Navbar />
        <b-container class="main-content">
            <ContentHeader class=""/>
            <b-container class="anomaly-objects content">
                <b-row>
                    <b-col>
                        <b-card title="Card Title"
                                img-src="https://picsum.photos/600/300/?image=25"
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="max-width: 20rem;"
                                class="mb-2">
                            <p class="card-text">
                            Some quick example
                            </p>
                        </b-card>
                    </b-col>
                    <b-col>
                        <b-card title="Card Title"
                                img-src="https://picsum.photos/600/300/?image=25"
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="max-width: 20rem;"
                                class="mb-2">
                            <p class="card-text">
                            Some quick example
                            </p>
                        </b-card>
                    </b-col>
                    <b-col>
                        <b-card title="Card Title"
                                img-src="https://picsum.photos/600/300/?image=25"
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="max-width: 20rem;"
                                class="mb-2">
                            <p class="card-text">
                            Some quick example
                            </p>
                        </b-card>
                    </b-col>
                    <b-col>
                        <b-card title="Card Title"
                                img-src="https://picsum.photos/600/300/?image=25"
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="max-width: 20rem;"
                                class="mb-2">
                            <p class="card-text">
                            Some quick example
                            </p>
                        </b-card>
                    </b-col>
                    <b-col>
                        <b-card title="Card Title"
                                img-src="https://picsum.photos/600/300/?image=25"
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="max-width: 20rem;"
                                class="mb-2">
                            <p class="card-text">
                            Some quick example
                            </p>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </b-container>
    </b-container>   
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import ContentHeader from '@/components/ContentHeader.vue'
import NavbarBg from '@/components/NavbarBg.vue'

export default {
  name: 'test',
  components: {
    Navbar,
    ContentHeader,
    NavbarBg
  }
}
</script>

<style scoped>
.anomaly-objects {
    background: #ffffff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 3px;
    min-height: 20rem;
}

.anomaly-objects:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.content {
    margin-top: 1rem;
}

.main-content {
    max-width: 98%;
}

</style>

