<!-- =========================================================================================
  File Name: FullPage.vue
  Description: Full page layout
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="layout--full-page">
    <vk-sticky>
      <vk-navbar style="background: #fff;">
        <vk-navbar-logo slot="center">
          <img :src="require('@/assets/images/logo/logo.png')" alt="Logo" srcset />
          &nbsp;
          <span class="header-text">Deallus</span>
        </vk-navbar-logo>
      </vk-navbar>
    </vk-sticky>

    <router-view style="position: relative;"></router-view>

    <AppFooter/>
  </div>
</template>

<script>
import AppFooter from "./footer";
export default {
  components: {
    AppFooter
  }
};
</script>

<style lang="scss">
a {
  text-decoration: none !important;
}
.header-text {
  color: #162338;
  font-size: 40px;
  text-transform: lowercase;
  font-weight: bolder;
}
.vs-card--header {
  border-bottom: 1px solid #eee;
}
.vs-select--input {
  border: none;
}
.phoneNumberPrefix {
  color: #062460;
  border: none;
}
// .custom-input-group {
//   margin-top: 17px;
// }
.con-select .vs-select--input {
  border: none;
}
.vs-con-input-label.is-label-placeholder,
.custom-input-group {
  margin-top: 30px;
}
</style>
