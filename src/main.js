import { createApp } from 'vue'
import { Icon } from '@iconify/vue';

import moment from 'moment/min/moment-with-locales';
import momentTZ from 'moment-timezone'

momentTZ.tz.setDefault('Europe/Zurich')
moment.locale('de')

import './style.css'
import './index.css'

import Data from './data/settings.json'
import App from './App.vue'

let app = createApp(App)

app.component('Icon', Icon);
app.config.globalProperties.Data = Data
app.config.globalProperties.Moment = moment;
app.mount('#app')
