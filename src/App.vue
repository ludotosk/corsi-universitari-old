<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view class="min-vh-100"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import { version } from "../package.json";
import { isPWA } from "./util";

export default {
  metaInfo: {
    changed(metaInfo) {
      firebase.analytics().setCurrentScreen(metaInfo.title);
      firebase.analytics().logEvent("page_view");
      firebase.analytics().logEvent("screen_view", {
        app_name: isPWA() ? "pwa" : "web",
        screen_name: metaInfo.title,
        app_version: version,
      });
    },
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$analytics.setUserId(user.uid);
        this.$analytics.setUserProperties({
          account_type: "Basic", // can help you to define audiences
        });
      }
    });
  },
};
</script>