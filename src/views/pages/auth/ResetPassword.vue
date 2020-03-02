<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div
    class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"
    id="page-login"
  >
    <vx-col type="flex" vs-justify="center" vs-align="center" vs-w="6" style="max-width: 800px">
      <vs-card>
        <div slot="header">
          <h4 class="mb-4" style="text-align: center;">RESET PASSWORD</h4>
        </div>
        <div class="full-page-bg-color" style="padding: 40px;">
          <div class="vx-row no-gutter justify-center items-center">
            <!-- <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg"> -->
            <div class="p-8">
              <div class="vx-card__title mb-8" style="margin-bottom: 20px">
                <h4 class="text-primary" style="font-weight: bold;">Reset your password</h4>
                <p>Please carefully create a new password and confirm reset to sign in to your account .</p>
              </div>

              <vs-input
                type="password"
                icon="icon icon-lock"
                icon-pack="feather"
                label-placeholder="New password"
                v-model="password"
                class="w-full mt-6 no-icon-border"
                style="margin-bottom: 20px"
              />
              <vs-input
                type="password"
                icon="icon icon-lock"
                icon-pack="feather"
                label-placeholder="Confirm password"
                v-model="password"
                class="w-full mt-6 no-icon-border"
                style="margin-bottom: 20px"
              />

              <vs-button to="/auth-success" class="w-full my-5" style="margin-bottom: 20px">CONFIRM PASSWORD RESET</vs-button>

              <div class="flex flex-wrap justify-between my-5">
                <router-link to="/login">Sign in</router-link>
                <router-link to="/signup">No account? Sign up here</router-link>
              </div>
            </div>
            <!-- </div> -->
          </div>
        </div>
      </vs-card>
      <footnote></footnote>
    </vx-col>
  </div>
</template>

<script>
import footnote from "@/layouts/full-page/footnote";
export default {
  data() {
    return {
      email: "",
      password: "",
      checkbox_remember_me: false
    };
  },
  components: {
    footnote
  }
};
</script>

<style lang="scss">
#page-login {
  .social-login {
    .bg-facebook {
      background-color: #1551b1;
    }
    .bg-twitter {
      background-color: #00aaff;
    }
    .bg-google {
      background-color: #4285f4;
    }
    .bg-github {
      background-color: #333;
    }
  }
}
</style>
