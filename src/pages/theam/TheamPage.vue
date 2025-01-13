<template>
  <q-page>
    <HeaderDefualt title="เลือกธีมที่ต้องการ" />
    <TheamSelectComponent class="q-px-md q-pb-md" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheamSelectComponent from 'src/components/theam/TheamSelectComponent.vue'
import HeaderDefualt from 'src/components/header/header.vue'

export default defineComponent({
  name: 'TheamPage',
  components: {
    TheamSelectComponent,
    HeaderDefualt,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
