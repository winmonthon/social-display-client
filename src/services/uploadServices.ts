import { api } from 'src/boot/axios'

export default class UploadService {
  public static async uploadImg(file: any, merchantId: any) {
    const formData = new FormData()
    formData.append('name', file.name)
    formData.append('file', file)
    const { data } = await api.post(`/v1/upload/${merchantId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    return data.payload as {
      [key: string]: any
      originalname: string
      path: string
    }
  }

  public static async base64ToFile(base64: any) {
    const byteString = atob(base64.split(',')[1]) // Decode Base64
    const byteNumbers = new Array(byteString.length).fill(0).map((_, i) => byteString.charCodeAt(i))

    const byteArray = new Uint8Array(byteNumbers)
    return new File([byteArray], 'upload', { type: 'image/png' })
  }
}
