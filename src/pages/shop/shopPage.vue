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
        <div class="title-text">ชื่อ {{ selectedChannel.toUpperCase() }} คนแซ่บ</div>

        <input
          class="w-input q-mt-xs"
          type="text"
          id="name"
          v-model="form.displayText"
          :placeholder="`กรอกชื่อ ${selectedChannel.toUpperCase()} คนแซ่บ`"
        />
      </div>

      <div class="detail-text q-mt-sm">กรอกชื่อโปรไฟล์คนแซ่บ ที่ต้องการแสดงบนหน้าจอ</div>

      <!-- Upload -->
      <div class="q-mt-lg">
        <label for="file-upload" class="upload-container">
          <div class="flex item-center">
            <q-icon left name="upload_file" size="20px"></q-icon>
            อัปโหลดรูปภาพ
          </div>
        </label>
        <input type="file" id="file-upload" class="upload-input" />

        <div class="detail-text text-center q-mt-sm">
          รูปปังๆ ของตัวแม่ ตัวพ่อ ที่ทุกคนต้องมองจนตาทะลุ อยาก รีบกดติดตามแทบไม่ทัน เอาสิ๊!
        </div>
      </div>

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
          class="q-mt-xs"
          label="เลือกธีม"
          v-if="form.isChangeTheam"
          disable
          dense
          dark
          outlined
          v-model="form.theamId"
        ></q-input>
      </div>

      <!-- IMAGE -->
      <div class="bg-black q-pa-md q-mt-md">
        <div class="flex justify-center">
          <div class="image-display justify-center flex items-center">ไม่พบรูปภาพ</div>
        </div>

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
          <q-btn class="w-secondary-btn w-full">
            <q-icon left size="xs" name="crop" />
            <div>แก้ไขรูปภาพ</div>
          </q-btn>

          <q-btn class="w-primary-btn w-full no">
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

export default defineComponent({
  name: 'ShopPage',
  components: { HeaderDefault },
  data() {
    return {
      captionList: captionList,
      form: {
        displayText: null,
        addCaption: false,
        caption: '',
        isChangeTheam: false,
        theamId: null,
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
      selectedChannel: 'ig',
    }
  },
  computed: {},
  methods: {
    getLogo() {
      switch (this.selectedChannel) {
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
      this.selectedChannel = slug
    },
    isSelected(slug: string) {
      if (slug === this.selectedChannel) {
        return 'selected-channel'
      }

      return 'channel'
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
  height: 260px;
}
</style>
