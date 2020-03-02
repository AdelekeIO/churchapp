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
        <div class="full-page-bg-color" style="padding: 40px;">
          <div class="vx-row no-gutter justify-center items-center">
            <div class="vx-col flex w-full">
              <div class="p-8 m-base" style="text-align: center;">
                <img :src="require('@/assets/images/check.png')" alt srcset />
                <h3 style="margin: 10px; color: #24457A;">Congratulations</h3>
                <p style="font-size: 18px;">
                  Your acount has been created successfully. We have sent an email to
                  <a
                    href="#"
                  >{{$route.params.user?$route.params.user.email:"--"}}</a>, please check and activate your account.
                </p>
                <vs-button size="large" to="/">Login now</vs-button>
              </div>
            </div>
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
  },
  created() {
    // console.log(this.$route.params.user);
    if (this.$route.params.user == undefined) {
      this.$router.replace("/signup");
    }
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
