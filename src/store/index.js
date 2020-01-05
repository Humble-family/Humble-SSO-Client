import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lang: 'en-US',
    langs: [],
    trsl: {}
  },
  mutations: {
    setTranslations(state, translations) {
      state.trsl = translations;
    },
    setLangs(state, langs) {
      state.langs = langs;
    },
    setLang(state, lang) {
      state.lang = lang;
    }
  },
  actions: {
    async changeLanguage(context, lang) {
      context.commit('setLang', lang);
      context.commit('setTranslations', (await api.getTranslations())[lang]);
      context.commit('setLangs', (await api.getTranslations()).langs);
    }
  },
  modules: {
  }
})
