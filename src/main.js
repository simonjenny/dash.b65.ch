import Data from './data/settings.json'
import { createApp } from 'vue'
import { Icon } from '@iconify/vue';

import moment from 'moment/min/moment-with-locales';
import momentTZ from 'moment-timezone'

import './style.css'
import './index.css'

import App from './App.vue'

const access = (data, callback) => {
    if(localStorage.getItem('boobs') != data.notsosecret){
        if(!document.location.href.endsWith(data.notsosecret)){
            document.location.href = "403.html";
        } else {
            localStorage.setItem('boobs', data.notsosecret)
            window.history.pushState("", "Dashboard", "/");
        }
    } else {
        window.history.pushState("", "Dashboard", "/");
    }
    callback(data)
}

access(Data, function(){
    momentTZ.tz.setDefault('Europe/Zurich')
    moment.locale('de')

    let app = createApp(App)

    app.component('Icon', Icon);
    app.config.globalProperties.Data = Data
    app.config.globalProperties.Moment = moment;
    app.mount('#app')
});




