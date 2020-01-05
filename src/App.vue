<template>
  <v-app>
    <v-navigation-drawer
      v-if="!hide"
      v-model="drawer"
      class="primary"
      enable-resize-watcher
      app
      :clipped="clipped"
    >
      <v-list dense nav class="py-0">
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="./assets/default-avatar.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Foxyou</v-list-item-title>
            <v-list-item-subtitle>Superadmin</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item to="/home">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ trsl.home }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/apps">
          <v-list-item-icon>
            <v-icon>mdi-apps</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ trsl.apps }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/services">
          <v-list-item-icon>
            <v-icon>mdi-cloud</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ trsl.services }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/profile">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ trsl.profile }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/settings">
          <v-list-item-icon>
            <v-icon>mdi-cogs</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ trsl.settings }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-list class="pa-2">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-earth</v-icon>
              </v-list-item-icon>

              <v-select v-model="curLang" :items="langs" item-text="name" item-value="code"></v-select>
            </v-list-item>
            <v-list-item @click="$vuetify.theme.dark = !$vuetify.theme.dark">
              <v-list-item-icon>
                <v-icon>mdi-weather-night</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{trsl.theme}}:&nbsp;{{$vuetify.theme.dark ? trsl.dark : trsl.light}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar v-if="!hide" fixed app :clipped-left="clipped" class="accent">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Humble</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
      clipped: true
    };
  },
  created() {
    this.$store.dispatch("changeLanguage", "en-US");
    this.$vuetify.theme.dark = true;
  },
  computed: {
    trsl() {
      return this.$store.state.trsl;
    },
    langs() {
      return this.$store.state.langs;
    },
    curLang: {
      get() {
        return this.$store.state.lang;
      },
      set(lang) {
        this.$store.dispatch("changeLanguage", lang);
      }
    },
    hide() {
      return this.$route.path === "/login" || this.$route.path === "/register";
    }
  }
};
</script>
