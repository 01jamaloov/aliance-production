import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProductionView from '../views/ProductionView.vue'
import MarkView from '../views/MarkView.vue'
import ChemicalView from '@/views/ChemicalView.vue'
import AgTechView from '../views/AgTechView.vue'
import ConfigView from '../views/ConfigView.vue'
import ContactView from '../views/ContactView.vue'
import BlogView from '../views/BlogView.vue'
import BlogMoreView from '../views/BlogMoreView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      title: 'About us'
    }
  },
  {
    path: '/production',
    name: 'production',
    component: ProductionView,
    meta: {
      title: 'Production'
    }
  },
  {
    path: '/trade-marks',
    name: 'trade-marks',
    component: MarkView,
    meta: {
      title: 'Trade Marks'
    }
  },
  {
    path: '/automotive-chemicals',
    name: 'chemical',
    component: ChemicalView,
    meta: {
      title: 'Automotive Chemicals'
    }
  },
  {
    path: '/trade-marks/ag-tech',
    name: 'ag-tech',
    component: AgTechView,
    meta: {
      title: 'Ag-Tech Chemicals'
    }
  },
  {
    path: '/privacy-policy',
    name: 'config',
    component: ConfigView,
    meta: {
      title: 'Privacy Policy'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: {
      title: 'Our Contacts'
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView,
    meta: {
      title: 'Blog'
    }
  },
  {
    path: '/blog-more',
    name: 'blog-more',
    component: BlogMoreView,
    meta: {
      title: 'More Blogs'
    }
  },
  {
    path: '/:pathMatch(.*)*/',
    name: 'not-found',
    component: NotFoundView,
    meta: {
      title: 'Page Not Found'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      new Promise(resolve => {
        setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 500)
      })
    )
  }
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - Aliance Production`
  next()
})

export default router
