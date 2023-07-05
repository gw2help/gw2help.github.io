import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/progress',
    name: 'progress',
    component: () => import('../views/progress_view.vue')
  },
  {
    path: '/join',
    name: 'join',
    component: () => import('../views/join_view.vue')
  },
  {
    path:'/build',
    name:'build',
    //component: () => import('../views/build_view.vue'),
    beforeEnter() {window.open('http://en.gw2skills.net/editor/','_blank')} // ADD LINK in router
  },
  {
    path: '/craft',
    name: 'crafting',
    component: () => import('../views/craft_view.vue')
  },
  {
    path: '/timers',
    name: 'timers',
    component: () => import('../views/timers_view.vue')
  },
  {
    path: '/killproof',
    name: 'killproof',
    component: () => import('../views/killproof_view.vue')
  },
  {
    path: '/mf_weapon_prices',
    name: 'mf_weapon_prices',
    component: () => import('../views/mf_weapon_prices_View.vue')
  },
  {
    path: '/provisioner',
    name: 'provisioner',
    component: () => import('../views/provisioner_view.vue')
  },
  {
    path: '/mf_upgrade',
    name: 'mf_upgrade',
    component: () => import('../views/mf_upgrade_view.vue')
  },
  {
    path: '/attribute',
    name: 'attribute',
    component: () => import('../views/attribute_view.vue')
  },
  {
    path: '/itemfinder',
    name: 'itemfinder',
    component: () => import('../views/item_finder_view.vue')  
  },
  {
    path: '/converters',
    name: 'converters',
    component: () => import('../views/converters_view.vue')
  },
  {
    path: '/foodies',
    name: 'foodies',
    component: () => import('../views/foodies_view.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test_view.vue')
  },
  {
    path: '/rune',
    name: 'rune',
    component: () => import('../views/rune_view.vue')
  },
  {
    path: '/sigil',
    name: 'sigil',
    component: () => import('../views/sigil_view.vue')
  },
  {
    path: '/builds',
    name: 'builds',
    component: () => import('../views/build_view.vue')
  },
  {
    path: '/salvage',
    name: 'salvage',
    component: () => import('../views/salvage_view.vue')
  },
  {
    path: '/strikes',
    name: 'strikes',
    component: () => import('../views/strikes_view.vue')
  },
  {
    path: '/extra',
    name: 'extra',
    component: () => import('../views/extra_view.vue')
  },
  {
    path: '/breakbar',
    name: 'breakbar',
    component: () => import('../views/breakbar_view.vue')
  },
  {
    path: '/hardstuck',
    name: 'hardstuck',
    component: () => import('../views/hardstuck_view.vue')
  }, //-----------------------------------------------------------------------
  {
    path: '/music',
    name: 'music',
    beforeEnter() {window.open('http://gw2mb.com/','_blank')}
  },
  {
    path: '/legendary',
    name: 'legendary',
    component: () => import('../views/legendary_view.vue')
  },
  {
    path:'/leggyshard',
    name: 'leggyshard',
    component: () => import('../views/leggyshard_view.vue')
  },
  {
    path:'/mounts',
    name: 'mounts',
    component: () => import('../views/mounts_view.vue')
  },
  {
    path:'/farm',
    name: 'farm',
    component: () => import('../views/farm_view.vue')
  },
  {
    path:'/fracz',
    name: 'fracz',
    component : () => import('../views/fractal_view.vue')
  },
  {
    path: '/gemstore',
    name: 'gemstore',
    component: () => import('../views/gem_store_view.vue')
  },
  {
    path: '/discretize',
    name: 'discretize',
    component: () => import('../views/discretize_view.vue')
  },
  {
    path: '/snowcrows',
    name: 'snowcrows',
    //component: () => import('../views/snowcrows_view.vue')
    beforeEnter() { window.open('https://snowcrows.com','_blank') } 
  },
  {
    path: '/guildjen',
    name: 'guildjen',
    //component: () => import('../views/guildjen_view.vue')
    beforeEnter() { window.open('https://guildjen.com/category/gw2/guides/general-guides/','_blank') } 
  },
  {
    path: '/tekkit',
    name: 'tekkit',
    //component: () => import('../views/tekkit_view.vue')
    beforeEnter() { window.open('https://https://www.tekkitsworkshop.net/','_blank') } 
  },
  {
    path: '/mukluk',
    name: 'mukluk',
    component: () => import('../views/mukluk_view.vue')
  },
  {
    path: '/booster',
    name: 'booster',
    component: () => import('../views/booster_view.vue')
  },
  {
    path: '/donate',
    name: 'donate',
    component: () => import('../views/donate_view.vue')
  },
  {
    path: '/effiency',
    name: 'effiency',
    beforeEnter() { window.open('https://gw2efficiency.com/','_blank') }
  },
  {
    path: '/utilities',
    name: 'utilities',
    component: () => import('../views/utility_view')
  },
  {
    path: '/combo',
    name: 'combo',
    component: () => import('../views/combo_view')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router