<template>
  <div>
    <div class="">
      <img ref="imageRef" id="image" :src="formStore.form.originalBase64Image" alt="" />
    </div>

    <!-- <q-img class="w-full" v-if="croppedImageBase64" :src="croppedImageBase64"> </q-img> -->

    <div class="q-px-md q-mt-md">
      <q-btn @click="getImage()" class="w-primary-btn w-full no">
        <div>ไปกันต่อ! 🍻</div>
      </q-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useFormStore } from 'src/stores/form-store'
import Cropper from 'cropperjs'

export default defineComponent({
  name: 'CropperComponent',
  setup() {
    const imageRef = ref(null) as any
    const formStore = useFormStore()
    const cropper = null as unknown as Cropper

    return { formStore, imageRef, cropper }
  },

  data() {
    return {
      croppedImageBase64: null as any,
    }
  },

  computed: {},

  mounted() {
    this.cropper = new Cropper(this.imageRef, {
      aspectRatio: 1,
      minCropBoxWidth: 250,
      minCropBoxHeight: 250,
      // dragMode: 'move',
      background: false,
      cropBoxMovable: true,
      cropBoxResizable: true,
    })
  },

  methods: {
    getImage() {
      this.croppedImageBase64 = this.cropper.getCroppedCanvas().toDataURL()
      this.formStore.setBase64Image(this.croppedImageBase64)
      this.$router.go(-1)
    },
  },

  unmounted() {
    this.cropper.destroy()
  },
})
</script>

<style scoped>
img {
  display: block;

  /* This rule is very important, please don't ignore this */
  max-width: 100%;
  max-height: 400px;
}
</style>
