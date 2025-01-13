<template>
  <div>
    <HeaderDefault title="โหวดหัวใจให้คุณที่คุณแอบมองอยู่" />
    <q-page class="">
      <section>
        <div v-for="post in postList" :key="post.id" class="bg-black q-mb-xs q-pb-md">
          <!-- name -->
          <div class="flex items-center justify-center q-gutter-x-md q-py-md">
            <q-img class="logo" :src="getLogo(post.channel)"></q-img>

            <span class="text-20">
              {{ post?.socialName || '' }}
            </span>
          </div>

          <!-- image -->
          <div>
            <q-img :src="post.imageUrl" class="image"></q-img>
          </div>

          <!-- LIKE -->
          <div class="flex justify-between q-pa-lg items-center">
            <div class="text-20 flex item-center q-gutter-x-sm">
              <span>
                <!-- <img src="/like-icon.svg" alt="" /> -->
                <img class="like-btn" src="/like-icon-dark.svg" alt="" />
              </span>

              <span>599</span>
            </div>
            <div class="text-14">
              <q-btn class="">
                <div class="flex items-center q-gutter-xs">
                  <img src="/buy-like-icon.svg" />
                  <span> เปย์เพิ่ม </span>
                </div>
              </q-btn>
            </div>
          </div>

          <!-- CAPTION -->

          <div class="text-20 q-px-lg">
            {{ post.caption }}
          </div>

          <div class="end-border"></div>
        </div>
      </section>
    </q-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderDefault from 'src/components/header/header.vue'
import PostService from 'src/services/postService'
import type { IPost } from 'src/dto/postDTO'
import LogoSerivce from 'src/services/logoService'

export default defineComponent({
  components: {
    HeaderDefault,
  },
  setup() {
    return {}
  },
  data() {
    return {
      postList: [] as IPost[],
    }
  },
  computed: {
    merchantId() {
      return (this.$route.params.shopId as string) || ''
    },
  },

  mounted() {
    this.getPostList()
  },

  methods: {
    getLogo(channel: string) {
      switch (channel) {
        case 'ig':
          return '/ig.svg'

        case 'facebook':
          return '/fb.svg'

        case 'x':
          return '/x.svg'

        case 'tiktok':
          return '/tt.svg'

        case 'line':
          return '/line.svg'

        default:
          break
      }
    },
    async getPostList() {
      try {
        const data = await PostService.getPostList(this.merchantId)

        this.postList = data.payload
      } catch (error) {
        this.$q.notify({
          color: 'negative',
          message: 'เกิดข้อผิดพลาดในการอัปโหลด',
        })
      }
    },
  },
})
</script>

<style scoped>
.logo {
  width: 35px;
  height: 35px;
}

.image {
  width: 100%;
}

.end-border {
}

.like-btn {
  cursor: pointer;
}

.like-btn {
  cursor: pointer;
}
</style>
