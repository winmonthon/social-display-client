import { api } from 'src/boot/axios'

export default class PostService {
  public static async createPost(payload: {
    imageUrl: string
    socialName: string
    channel: string
    caption?: string | null
    theam?: string | null
    orderNumber?: string | null
    merchantId: string
  }) {
    const { data } = await api.post(`/v1/post`, {
      ...payload,
    })

    return data
  }

  public static async getPostList(merchantId: string) {
    const { data } = await api.get(`/v1/post/${merchantId}`)

    return data
  }
}
