import { api } from 'src/boot/axios'

export default class LogoSerivce {
  public static async getLogoFilePath(channel: string) {
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
  }
}
