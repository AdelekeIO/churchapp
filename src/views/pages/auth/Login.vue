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
    <div type="flex" vs-justify="center" vs-align="center" vs-w="6" style="max-width: 800px">
      <vs-card>
        <div slot="header">
          <h4 class="mb-4" style="text-align: center;">SIGN IN</h4>
        </div>
        <div class="full-page-bg-color" style="padding: 40px;">
          <form @submit.prevent="loginToApp" class="vx-row no-gutter justify-center items-center">
            <!-- <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg"> -->
            <div class="p-8">
              <div class="vx-card__title mb-8">
                <h4 style="color:  #0B3FA8; font-weight: bold;">Welcome Back</h4>
                <p>Please provide valid information to login to your account.</p>
              </div>
              <vs-input
                icon="icon icon-user"
                icon-pack="feather"
                label-placeholder="Email"
                v-model="email"
                class="w-full no-icon-border"
                v-validate="'required'"
                data-v-validate-on="blur"
                name="email"
              />

              <vs-input
                type="password"
                icon="icon icon-lock"
                icon-pack="feather"
                label-placeholder="Password"
                v-model="password"
                class="w-full mt-6 no-icon-border"
                v-validate="'required'"
                data-v-validate-on="blur"
                name="password"
                @keypress.enter="loginToApp"
              />

              <div class="flex flex-wrap justify-between my-5">
                <vs-checkbox v-model="checkbox_remember_me" class="mb-3">Remember Me</vs-checkbox>
                <router-link to="/forgot-password">Forgot Password?</router-link>
              </div>
              <vs-button class="w-full" @click="loginToApp">Sign In</vs-button>
              <!-- <vs-button type="border">Register</vs-button> -->
              <div class="flex flex-wrap justify-between my-5">
                <router-link class="mb-3" to="/forgot-password">I can’t login, help me</router-link>
                <router-link to="/signup">No account? Sign up here</router-link>
              </div>
            </div>
            <!-- </div> -->
          </form>
        </div>
      </vs-card>
      <footnote></footnote>
    </div>
  </div>
</template>

<script>
import footnote from "@/layouts/full-page/footnote";
import { mapGetters, mapActions } from "vuex";
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
  computed: {
    ...mapGetters({
      // AuthGetters: "auth/"
    })
  },
  methods: {
    ...mapActions("auth", ["login"]),
    ...mapActions("dummy", ["toast"]),
    loginToApp() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$vs.loading();
          const payload = {
            userDetails: {
              email: this.email,
              password: this.password
            },
            notify: this.$vs.notify,
            acl: this.$acl,
            navigate: this.$router,
            closeAnimation: this.$vs.loading.close()
          };
          this.login(payload);
        } else {
          this.$vs.notify({
            title: "Oops!",
            text: "Please fill all fields!",
            icon: "error",
            color: "warning",
            position: "top-right"
          });
        }
      });

      // this.$acl.change("admin");
      // this.$router.push({
      //   path: "/app"
      // });
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
