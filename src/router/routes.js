
const routes = [
  {

    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'home',
        path: '', component: () => import('pages/IndexPage.vue')
      },

      {
        path: 'farm-entry',
        name: 'farm-entry',
        component: () => import('src/pages/FarmEntryForm.vue')
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
