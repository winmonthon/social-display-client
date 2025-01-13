import { defineStore, acceptHMRUpdate } from 'pinia'

export const useFormStore = defineStore('formStore', {
  state: () => ({
    form: {
      channel: 'ig',
      displayText: '',
      addCaption: false,
      caption: '',
      isChangeTheam: false,
      theamId: null,
      base64Image: '',
      originalBase64Image: '',
    },
  }),

  getters: {
    getValue: (state) => state.form,
    getImage: (state) => {
      return state?.form?.base64Image
    },
  },

  actions: {
    setFormValue(val: any) {
      console.log(val)
      this.form = {
        ...val,
      }
    },

    setBase64Image(base64Image: string) {
      this.form.base64Image = base64Image
    },

    setAddCaption(addCaption: boolean) {
      this.form.addCaption = addCaption
    },

    setOriginalBase64Image(base64Image: string) {
      this.form.originalBase64Image = base64Image
    },

    reset() {
      this.form = {
        channel: 'ig',
        displayText: '',
        addCaption: false,
        caption: '',
        isChangeTheam: false,
        theamId: null,
        base64Image: '',
        originalBase64Image: '',
      }
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFormStore, import.meta.hot))
}
