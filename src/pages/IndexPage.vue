<template>
  <q-page class="">
    <MainHeader />

    <div class="">
      <section class="q-pa-lg">
        <div
          @click="goToPath(menu.page)"
          class="q-card bg-black q-mb-lg q-pa-lg text-center menu"
          v-for="menu of menus"
          :key="menu.title"
        >
          <div>{{ menu.title }}</div>

          <div>{{ menu.desc }}</div>
        </div>
      </section>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainHeader from '../components/header/MainHeader.vue'

export default defineComponent({
  name: 'IndexPage',
  components: { MainHeader },
  data() {
    return {
      menus: [
        {
          title: 'แจกวาร์ปรัวๆ คืนนี้ฉันจะเป็นดาว',
          desc: 'เริ่มต้นเพียง 99 บาท',
          page: 'ShopPage',
        },
        {
          title: 'แจกวาร์ปรัวๆ คืนนี้ฉันจะเป็นดาว22',
          desc: 'เริ่มต้นเพียง 99 บาท',
          page: 'asdas',
        },
      ],
    }
  },

  methods: {
    goToPath(page: string) {
      this.$router.push({
        name: page,
      })
    },
  },
})
</script>

<style scoped>
.menu {
}

.menu:hover {
  cursor: pointer;
}
</style>
