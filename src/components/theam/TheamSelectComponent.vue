<template>
  <div>
    <section class="q-gutter-y-md grid">
      <div v-for="theam of theamOptions" :key="theam.id">
        <div>
          <q-img
            class="image"
            src="https://i1.wp.com/hechingerreport.org/wp-content/uploads/2018/04/Jennifer-Heller-Buckley-PHOTO1.jpg?ssl=1"
          ></q-img>

          <div class="text-24">
            {{ theam.name }}
          </div>
          <div class="detail-text-lg">
            {{ theam.price }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheamSelectComponent',
  setup() {
    return {}
  },
  data() {
    return {
      theamOptions: [
        {
          id: 1,
          name: 'test',
          price: 20,
        },
        {
          id: 2,
          name: 'test',
          price: 20,
        },
        {
          id: 3,
          name: 'test',
          price: 20,
        },
        {
          id: 4,
          name: 'test',
          price: 20,
        },
      ],
    }
  },
})
</script>

<style scoped>
.image {
  width: 100%;
  height: 250px;
}
</style>
