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
    id="page-signup"
  >
    <vx-col type="flex" vs-justify="center" vs-align="center" vs-w="6" style="max-width: 900px">
      <vs-card>
        <div slot="header">
          <h4 class="mb-4" style="text-align: center;">SIGN UP</h4>
        </div>
        <div class="full-page-bg-color" style="padding: 40px;">
          <div class="vx-row no-gutter justify-center items-center">
            <!-- <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg"> -->
            <div class="p-8">
              <div class="vx-card__title mb-8">
                <h4 style="color:  #0B3FA8; font-weight: bold;">Create your account</h4>
                <p>Choose an option for the type of account you would like to create.</p>
              </div>

              <vs-row vs-justify="center">
                <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
                  <router-link to="/pricing">
                    <vs-card actionable>
                      <div class="overlap-holder">
                        <img :src="require('@/assets/images/icons/church2.png')" alt srcset />
                        <img :src="require('@/assets/images/icons/church.png')" alt srcset />
                      </div>
                      <span>Setup new church</span>
                    </vs-card>
                  </router-link>
                </vs-col>
                <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
                  <router-link to="/church-confirm">
                    <vs-card actionable>
                      <div class="overlap-holder">
                        <img :src="require('@/assets/images/icons/men.png')" alt srcset />
                        <img :src="require('@/assets/images/icons/women.png')" alt srcset />
                      </div>
                      <span>Church staff</span>
                    </vs-card>
                  </router-link>
                </vs-col>
              </vs-row>

              <div class="flex flex-wrap justify-between my-5">
                <span
                  class="mb-3"
                >Please select this option to setup a new church account for the first time</span>
              </div>
              <!-- <vs-button class="w-full" type="border">Sign Up</vs-button> -->
              <div class="flex flex-wrap justify-between my-5">
                <router-link to="/">Already have an account? Sign in here</router-link>
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
#page-signup {
  a {
    padding: 0px;
    text-decoration: none;
  }
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

  .overlap-holder {
    margin-bottom: 9px;
    img {
      width: 50px;
      height: 50px;
      &:nth-of-type(2) {
        margin-left: -10px;
      }
    }
  }
}
</style>
