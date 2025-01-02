<template>
  <q-layout view="lHh Lpr lFf  ">
    <!--  <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container class="main-bg">
      <div class="w-container">
        <!-- <q-header elevated class="w-container">
          <q-toolbar>
            <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

            <q-toolbar-title> Quasar App </q-toolbar-title>

            <div>Quasar v{{ $q.version }}</div>
          </q-toolbar>
        </q-header> -->
        <!-- <MainHeader class="" /> -->
        <router-view class="" />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// import MainHeader from 'src/components/header/MainHeader.vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    // EssentialLink,
    // MainHeader,
  },

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
    }
  },
})
</script>

<style lang="scss">
.main-bg {
  background-color: rgb(192, 191, 191);
  display: flex;
  justify-content: center;
  width: 100%;
}

.w-container {
  max-width: 480px;
  width: 100%;
  background-color: #202020;
  color: white;
}
</style>
