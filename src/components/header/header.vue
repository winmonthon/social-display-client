<template>
  <div class="header q-pa-md">
    <q-icon @click="back" name="arrow_back_ios" size="16px" />
    <div class="text-md">{{ title || 'asd' }}</div>
    <div></div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: String,
  },
  name: 'HeaderDefault',

  methods: {
    back() {
      this.$router.go(-1)
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
}
</style>
