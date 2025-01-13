<template>
  <q-page>
    <HeaderDefault :title="'แจกวาร์ปรัวๆ คืนนี้ฉันจะเป็นดาว'" />

    <section class="q-px-md q-pb-md">
      <!-- channel -->
      <div class="q-card">
        <div class="title-text text-center q-mb-md">ช่องทางที่ต้องการแจกวาร์ป</div>

        <div class="flex justify-evenly">
          <div
            v-for="channel of channelList"
            @click="selectChannel(channel.slug)"
            :key="channel.slug"
            :class="isSelected(channel.slug)"
          >
            <div class="text-center">
              <q-img :src="channel.logo" class="logo"></q-img>
            </div>

            <div class="text-center q-mt-xs w-text-300">
              {{ channel.name }}
            </div>
          </div>
        </div>
      </div>

      <!-- display input -->
      <div class="q-card q-mt-sm">
        <div class="title-text">ชื่อ {{ form.channel.toUpperCase() }} คนแซ่บ</div>

        <input
          class="w-input q-mt-xs"
          type="text"
          id="name"
          v-model="form.displayText"
          :placeholder="`กรอกชื่อ ${form.channel.toUpperCase()} คนแซ่บ`"
        />
      </div>

      <div class="detail-text q-mt-sm">กรอกชื่อโปรไฟล์คนแซ่บ ที่ต้องการแสดงบนหน้าจอ</div>

      <!-- Capture -->
      <div class="q-card q-mt-md">
        <div class="flex items-center justify-between w-checkbox-text">
          <q-checkbox size="sm" keep-color color="secondary" v-model="form.addCaption">
            <div class="">เพิ่มแคปชั่นเด็ดๆ</div>
          </q-checkbox>

          <div class="w-text-300">+50 บาท</div>
        </div>

        <div class="detail-text-lg q-mt-sm">แคปชั่นยั่วๆ เอาให้หลง</div>

        <q-select
          v-if="form.addCaption"
          class="q-mt-sm"
          v-model="form.caption"
          :options="captionList"
          dense
          dark
          outlined
        ></q-select>
      </div>
      <div class="detail-text-lg q-mt-sm">ข้อความยั่วๆ บดๆ ที่คุณเลือก จะแสดงขึ้นบนหน้าจอ</div>

      <!-- Theam -->
      <div class="q-card q-mt-md">
        <q-checkbox size="sm" keep-color color="secondary" v-model="form.isChangeTheam">
          <div class="">เปลี่ยนธีมตกแต่ง</div>
        </q-checkbox>
        <div class="detail-text-lg q-mt-sm">ธีมตกแต่งให้สวยงาม ดึงดูดความสนใจ</div>

        <q-input
          readonly
          @click="toTheamSelectPage"
          class="q-mt-xs"
          label="เลือกธีม"
          v-if="form.isChangeTheam"
          dense
          dark
          outlined
          v-model="form.theamId"
        ></q-input>
      </div>

      <!-- Upload -->
      <div class="q-mt-lg">
        <UploadComponent @fileUploaded="onFileUploaded($event)" />
      </div>

      <!-- IMAGE -->
      <div class="bg-black q-pa-md q-mt-md">
        <div class="flex justify-center" v-if="!form.base64Image">
          <div class="image-display justify-center flex items-center">ไม่พบรูปภาพ</div>
        </div>

        <!-- IMAGE DISPLAY -->
        <div v-if="form.base64Image" class="flex justify-center items-center">
          <ImageFrame :imageUrl="form.base64Image" />
        </div>

        <!-- <div class="flex justify-center items-center" v-if="form.base64Image">
          <div class="image-display flex items-center">
            <q-img :src="form.base64Image" class="upload-img w-full" />
          </div>
        </div> -->

        <div class="flex q-gutter-md justify-center items-center q-mt-xs">
          <div>
            <q-img :src="getLogo()" class="logo"></q-img>
          </div>
          <div class="text-24 text-weight-medium">{{ form.displayText }}</div>
        </div>

        <div class="text-center q-mt-md text-20">{{ form.caption }}</div>
      </div>

      <!-- FOOTER -->
      <div class="q-mt-sm">
        <div class="q-gutter-y-sm">
          <q-btn :disable="!form.base64Image" class="w-secondary-btn w-full" @click="toCropPage()">
            <q-icon left size="xs" name="crop" />
            <div>แก้ไขรูปภาพ</div>
          </q-btn>

          <q-btn @click="createPost()" class="w-primary-btn w-full no">
            <div>ไปกันต่อ! 🍻</div>
          </q-btn>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderDefault from 'src/components/header/header.vue'
import captionList from 'src/assets/caption/captionList.json'

import UploadComponent from 'src/components/upload/UploadComponent.vue'
import { useFormStore } from 'src/stores/form-store'
import ImageFrame from 'src/components/theamFrame/ImageFrame.vue'
import UploadService from 'src/services/uploadServices'
import { useRoute } from 'vue-router'
import PostService from 'src/services/postService'

export default defineComponent({
  name: 'ShopPage',
  components: {
    HeaderDefault,
    UploadComponent,

    ImageFrame,
  },
  setup() {
    const formStore = useFormStore()

    return { formStore }
  },
  data() {
    return {
      captionList: captionList,
      form: {
        displayText: '',
        addCaption: false,
        caption: '',
        isChangeTheam: false,
        theamId: null,
        base64Image: null as string | null,
        originalBase64Image: null as string | null,
        channel: 'ig',
      },

      channelList: [
        {
          logo: '/ig.svg',
          name: 'IG',
          slug: 'ig',
        },
        {
          logo: '/fb.svg',
          name: 'Facebook',
          slug: 'facebook',
        },
        {
          logo: '/tt.svg',
          name: 'Tiktok',
          slug: 'tiktok',
        },
        {
          logo: '/x.svg',
          name: 'X',
          slug: 'x',
        },
        {
          logo: '/line.svg',
          name: 'Line',
          slug: 'line',
        },
      ],
    }
  },
  computed: {
    merchantId() {
      return this.$route.params.shopId || ''
    },
  },
  async mounted() {
    await this.initData()
  },
  methods: {
    toCropPage() {
      this.saveFormToStore()
      this.$router.push({ name: 'CropPage' })
    },

    getLogo() {
      switch (this.form.channel) {
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
    selectChannel(slug: string) {
      this.form.channel = slug
    },
    isSelected(slug: string) {
      if (slug === this.form.channel) {
        return 'selected-channel'
      }

      return 'channel'
    },

    onFileUploaded(base64Image: string) {
      this.form.base64Image = base64Image
      this.formStore.setOriginalBase64Image(base64Image)
    },

    async initData() {
      this.form = this.formStore.form
    },

    toTheamSelectPage() {
      this.saveFormToStore()
      this.$router.push({ name: 'TheamPage' })
    },

    saveFormToStore() {
      this.formStore.setFormValue({ ...this.form })
    },

    async createPost() {
      try {
        const file = await UploadService.base64ToFile(this.formStore.form.base64Image)

        const { path: imagePath } = await UploadService.uploadImg(file, this.merchantId)

        // 2657edd3-b13e-4714-99ad-70e68e00a066 for test
        const createdPost = await PostService.createPost({
          imageUrl: imagePath,
          socialName: this.form.displayText,
          channel: this.form.channel,
          theam: null,
          orderNumber: null,
          merchantId: '2657edd3-b13e-4714-99ad-70e68e00a066',
          caption: this.form.caption,
        })

        this.$q.notify({
          color: 'positive',
          message: 'DONE',
        })
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

<style lang="scss" scoped>
.q-card {
  background-color: #303030 !important;
  padding: 16px;
  border-radius: 8px;
  box-shadow: none;
}

.logo {
  width: 35px;
  height: 35px;
}

.channel {
  padding: 4px;
}

.selected-channel {
  background-color: black;
  padding: 4px;
  border-radius: 10px;
}

.image-display {
  background-color: #606060;
  width: 250px;
  border-radius: 20px;
  height: 250px;
}

.upload-img {
  width: 250px;
  border-radius: 20px;
  height: 250px;
}
</style>
