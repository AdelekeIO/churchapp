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
    id="page-church-details"
  >
    <vx-col type="flex" vs-justify="center" vs-align="center" vs-w="6" style="max-width: 900px">
      <vs-card>
        <div slot="header">
          <h4 class="mb-4" style="text-align: center;">SIGN UP</h4>
        </div>
        <div class="full-page-bg-color">
          <div class="vx-row no-gutter justify-center items-center">
            <!-- <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg"> -->
            <div class="p-8">
              <div class="vx-card__title mb-8">
                <vs-row>
                  <vs-col vs-type="flex" vs-justify="center" vs-align="flex-start" vs-w="6">
                    <span>
                      <h4
                        class="text-primary"
                        style="font-weight: bold;"
                      >Register your church details</h4>
                      <p>Setup your church basic profile.</p>
                    </span>
                  </vs-col>
                  <vs-col vs-type="flex" vs-justify="center" vs-align="flex-end" vs-w="6">
                    <div
                      class="bg-warning church-category"
                      style="height: 100%;"
                    >Yearly members and visitors up to 2,500</div>
                  </vs-col>
                </vs-row>
              </div>

              <vs-row vs-justify="center">
                <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
                  <vs-input
                    style="width: 100%;"
                    icon-no-border
                    icon-pack="fa"
                    icon="fa-user"
                    label-placeholder="Church name"
                    v-model="form.name"
                  />
                  <vs-input
                    style="width: 100%;"
                    icon-no-border
                    icon-pack="fa"
                    icon="fa-envelope-o"
                    label-placeholder="Church email address"
                    v-model="form.email"
                  />

                  <vs-input
                    style="width: 100%;"
                    icon-no-border
                    icon-pack="fa"
                    icon="fa-at"
                    label-placeholder="Church email address"
                    v-model="form.handle"
                    placeholder="Church handle"
                  />

                  <!-- <vx-input-group
                    class="custom-input-group"
                    prependClasses="border border-solid border-grey border-r-0"
                  >
                    <template slot="prepend">
                      <div class="prepend-text" style="padding: 0px;">
                        <vs-select class="phoneNumberPrefix" width="75px" v-model="phonePrefix">
                          <vs-select-item value="+234" text="+234" is-selected.sync />
                        </vs-select>
                      </div>
                    </template>
                    <vs-input v-model="input1" placeholder="Church handle" />
                  </vx-input-group>-->

                  <vs-input
                    style="width: 100%;"
                    icon-no-border
                    icon-pack="fa"
                    icon="fa-lock"
                    label-placeholder="Choose password"
                    v-model="form.password"
                  />

                  <vs-input
                    style="width: 100%;"
                    icon-no-border
                    icon-pack="fa"
                    icon="fa-share"
                    label-placeholder="Refferal Id (Optional)"
                    v-model="form.refferalid"
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
    </vx-col>
  </div>
</template>

<script>
import footnote from "@/layouts/full-page/footnote";
import { URLSearchParams } from "url";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      input1: "",
      phonePrefix: "+234",
      email: "",
      
      checkbox_remember_me: false,
      form: {
        password: "",
        address: "Nigeria"
      }
    };
  },
  methods: {
    ...mapActions("auth", ["register"]),
    async submitReg() {
      // this.$vs.notify({
      //   title: "Position top-right",
      //   text: "Lorem ipsum dolor sit amet, consectetur",
      //   color: "success",
      //   position: "top-right"
      // });

      let resp = await this.register({
        group: "churches",
        data: this.form,
        notify: this.$vs.notify,
        navigate: this.$router
      });
      // this.$vs.notify(
      // console.log(resp);
    }
  },
  components: {
    footnote
  },
  mounted() {
    let plan = this.$route.query.plan;
    // console.log(plan);
    if (!plan) {
      this.$router.replace("/pricing");
    } else {
      this.form.plan = plan;
    }
  }
};
</script>

<style lang="scss">
#page-church-details {
  .church-category {
    border-radius: 6px 0px 0px 6px;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
}
</style>
