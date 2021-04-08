import Vue from 'vue'
import GAuth from 'vue-google-oauth2'

const gauthOption = {
  clientId: '789173746949-3josgeo8behpombglnqd8utpe4dssblq.apps.googleusercontent.com',
  scope: 'https://www.googleapis.com/auth/tasks',
  prompt: 'consent'
}

Vue.use(GAuth, gauthOption)