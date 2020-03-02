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
    id="page-church-confirm"
  >
    <vs-col type="flex" vs-justify="center" vs-align="center" style="max-width: 900px">
      <vs-card>
        <div slot="header">
          <h4 class="mb-4" style="text-align: center;">SIGN UP</h4>
        </div>
        <div class="full-page-bg-color" style="padding: 40px;">
          <div class="vx-row no-gutter justify-center items-center">
            <!-- <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg"> -->
            <div class="p-8">
              <div class="vx-card__title mb-8">
                <h4 style="color:  #0B3FA8; font-weight: bold;">Please register your details</h4>
                <p>Setup your personal profile.</p>
              </div>

              <vs-row vs-justify="center">
                <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
                  <vs-input
                    style="width: 100%;"
                    icon-no-border
                    icon-pack="fa"
                    icon="fa-user"
                    label-placeholder="Fullname"
                    v-model="form.user"
                  />
                  <vs-input
                    style="width: 100%;"
                    icon-no-border
                    icon-pack="fa"
                    icon="fa-envelope-o"
                    label-placeholder="Email"
                    v-model="form.email"
                  />
                  <vs-input
                    style="width: 100%;"
                    icon-no-border
                    icon-pack="fa"
                    icon="fa-lock"
                    label-placeholder="Set Password"
                    type="password"
                    v-model="form.password"
                  />
                </vs-col>
                <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
                  <vs-button @click="submitReg" class="w-full my-5">SUBMIT AND GET STARTED</vs-button>
                </vs-col>
              </vs-row>

              <div class="flex flex-wrap justify-between my-5">
                <router-link to="/">Already have an account? Sign in here</router-link>
              </div>
            </div>
            <!-- </div> -->
          </div>
        </div>
      </vs-card>
      <footnote></footnote>
    </vs-col>
  </div>
</template>

<script>
import footnote from "@/layouts/full-page/footnote";
export default {
  data() {
    return {
      input1: "",
      phonePrefix: "+234",
      email: "",
      password: "",
      checkbox_remember_me: false,
      form: {}
    };
  },
  components: {
    footnote
  },
  methods: {
    async submitReg() {
      // this.$vs.notify({
      //   title: "Position top-right",
      //   text: "Lorem ipsum dolor sit amet, consectetur",
      //   color: "success",
      //   position: "top-right"
      // });

      // let resp = await this.register({
      //   group: "churches",
      //   data: this.form,
      //   notify: this.$vs.notify,
      //   navigate: this.$router
      // });
      // this.$vs.notify(
      console.log(this.form);
    }
  },
  mounted() {
    let church = this.$route.query.church;
    // console.log(plan);
    if (!church) {
      this.$router.replace("/pricing");
    } else {
      this.form.church = church;
    }
  }
};
</script>

<style lang="scss">
#page-church-confirm {
  .profile-preview-holder {
    margin-bottom: 9px;
    display: flex;
    flex-flow: row nowrap;
    img {
      max-width: 50%;
      height: auto;
    }
    .preview_details {
      flex: 1;
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-start;
      justify-content: center;
      padding: 0px 20px;
      h3,
      h4,
      p {
        color: #062460;
        margin: 0px;
      }
      h3 {
        font-weight: bold;
      }
    }
  }
  .vs-card--content {
    padding: 0px;
  }
}
</style>
