<template>
  <div class="frame-wrapper">
    <div class="frame-container">
      <!-- <div class="frame">
        <q-img src="/c1.svg"></q-img>
      </div> -->
      <q-img class="image" :src="imageUrl"></q-img>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ImageFrameComponent',
  props: {
    imageUrl: {
      type: String,
      default: '',
    },
    theamId: {
      type: Number,
      defaule: 1,
    },
  },
  setup() {
    return {}
  },

  methods: {
    // getTheamFrame() {
    //   switch (this.theam) {
    //     case 'starter':
    //       return ''
    //     case 'c1':
    //       return '/c1.svg'
    //     default:
    //       return ''
    //   }
    // },
  },
})
</script>

<style scoped>
.frame-wrapper {
  width: 100%;
  max-width: 250px;
}

.frame-container {
}

.frame {
  position: absolute;
  width: 250px;
  height: 250px;
  z-index: 100;
}

.image {
  width: 250px;
  height: 250px;
  border-radius: 20px;
  background-color: #606060;
}
</style>
