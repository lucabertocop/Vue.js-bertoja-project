import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/work-area/<work-area-id>/survey-point/<survey-point-id>/edit/',
    name: 'survey-point-edit',
    component: () => import('../views/SurveyPointEdit.vue')
  },
  {
    path: '/work-area/<work-area-id>/survey-point/<survey-point-id>/question/:id/edit',
    name: 'survey-point-question-edit',
    component: () => import('../views/SurveyPointQuestionEdit.vue')
  },
  {
    path: '/work-area/<work-area-id>/survey-point/<survey-point-id>/question/new',
    name: 'survey-point-add',
    component: () => import('../views/SurveyPointQuestionAdd.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
