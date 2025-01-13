<template>
  <div>
    <!-- Display uploaded -->
    <!-- <div v-if="base64Image" class="">
      <div class="image-display">
        <q-img :src="base64Image" class="image"> </q-img>
      </div>
    </div> -->
    <!-- <div class="q-mb-md flex justify-end">
      <label for="file-upload">
        <div class="text-grey">อัพโหลดใหม่</div>
      </label>
    </div> -->

    <label for="file-upload" class="upload-container">
      <div class="flex item-center">
        <q-icon left name="upload_file" size="20px"></q-icon>
        {{ base64Image ? 'อัปโหลดรูปภาพใหม่' : 'อัปโหลดรูปภาพ' }}
      </div>
    </label>
    <input
      @change="handleFileUpload"
      accept="image/*"
      type="file"
      id="file-upload"
      class="upload-input"
    />

    <div class="detail-text text-center q-mt-sm">
      รูปปังๆ ของตัวแม่ ตัวพ่อ ที่ทุกคนต้องมองจนตาทะลุ อยาก รีบกดติดตามแทบไม่ทัน เอาสิ๊!
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UploadComponent',

  data() {
    return {
      base64Image: null as any,
    }
  },
  methods: {
    async handleFileUpload(event: Event) {
      const file = (event.target as HTMLInputElement)?.files?.[0]
      if (!file) {
        return
      }

      const maxFileSize = 11 * 1024 * 1024 // 11 MB
      if (file.size > maxFileSize) {
        this.$q.notify({
          color: 'negative',
          message: 'ไฟล์ต้องไม่เกิน 11MB',
        })
        return
      }

      try {
        const base64 = await this.convertToBase64(file)
        this.base64Image = base64
        this.$q.notify({
          color: 'positive',
          message: 'อัปโหลดสำเร็จ!',
        })

        this.$emit('fileUploaded', this.base64Image)
      } catch (error) {
        this.$q.notify({
          color: 'negative',
          message: 'เกิดข้อผิดพลาดในการอัปโหลด',
        })
      }
    },

    convertToBase64(file: File): Promise<string> {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result as string)
        reader.onerror = (error) => reject(error)
      })
    },
  },
})
</script>

<style scoped>
.image-display {
  /* width: 250px;
  border-radius: 20px;
  height: 260px; */
  max-height: 260px;
}

.image {
  max-height: 260px;
}
</style>
