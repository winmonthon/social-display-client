<template>
  <q-page>
    <HeaderDefault />
    <CropperComponent />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderDefault from 'src/components/header/header.vue'
import CropperComponent from 'src/components/cropper/CropperComponent.vue'
export default defineComponent({
  name: ' CropPage',
  components: {
    HeaderDefault,
    CropperComponent,
  },
  data() {
    return {}
  },
})
</script>

<style scoped></style>
