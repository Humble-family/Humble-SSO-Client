import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#D6D6D6',
                secondary: '#424242',
                accent: '#618BFF'
            },
            dark: {
                primary: '#424242',
                secondary: '#D6D6D6',
                accent: '#618BFF'
            }
        }
    }
});
