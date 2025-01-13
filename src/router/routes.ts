import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/:shopId',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'shop', component: () => import('pages/shop/shopPage.vue'), name: 'ShopPage' },
      { path: 'crop', component: () => import('pages/crop/CropPage.vue'), name: 'CropPage' },
      { path: 'theam', component: () => import('pages/theam/TheamPage.vue'), name: 'TheamPage' },
      { path: 'post', component: () => import('pages/post/postPage.vue'), name: 'PostPage' },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
