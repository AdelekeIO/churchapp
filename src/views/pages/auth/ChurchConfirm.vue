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
            <div class="p-8 w-full">
              <div class="vx-card__title mb-8">
                <h4 class="text-primary" style="font-weight: bold;">Confirm your church details</h4>
                <p>Please provide handle associated with your church.</p>
              </div>

              <vs-row vs-justify="center">
                <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
                  <vx-input-group prependClasses="border border-solid border-grey border-r-0">
                    <!-- <template slot="prepend">
                      <div class="prepend-text" style="padding: 0px;">
                        <vs-select class="phoneNumberPrefix" width="75px" v-model="phonePrefix">
                          <vs-select-item value="+234" text="+234" is-selected.sync />
                        </vs-select>
                      </div>
                    </template>-->
                    <vs-input
                      v-model="churchHandle"
                      icon-pack="fa"
                      icon="fa-home"
                      label-placeholder="Church Handle"
                    />
                  </vx-input-group>
                  <vs-button
                    class="w-full my-5"
                    @click="searchPastor()"
                    v-if="showPastor == false"
                  >Search</vs-button>
                </vs-col>
                <vs-col
                  class="mt-5"
                  type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="12"
                  v-if="showPastor == true"
                >
                  <vs-card style="padding: 0px;">
                    <div class="profile-preview-holder">
                      <img :src="require('@/assets/images/portrait/pastor.png')" alt srcset />
                      <div class="preview_details">
                        <h3>{{pastorDetails.name?pastorDetails.name:`...`}}</h3>
                        <h4>Pastor {{pastorDetails.pastorFirstname?`${pastorDetails.pastorFirstname} ${pastorDetails.pastorLastname}`:`...`}}</h4>
                        <p>{{pastorDetails.pastorPhone?pastorDetails.pastorPhone:`...`}}</p>
                      </div>
                    </div>
                  </vs-card>

                  <vs-button
                    :to="`/user-confirm?church=${churchHandle}`"
                    class="w-full my-5"
                  >PROCEED</vs-button>
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
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      churchHandle: null,
      pastorDetails: null,
      showPastor: false,
      phonePrefix: "+234",
      email: "",
      password: "",
      checkbox_remember_me: false
    };
  },
  components: {
    footnote
  },
  methods: {
    ...mapActions("auth", ["fetchProfileByHandle"]),
    searchPastor() {
      //console.log(this.ProfileData)
      //v-if="churchHandle&&churchHandle!=''?true:false"
      this.fetchProfileByHandle({
        group: "churches",
        filter: { where: { handle: this.churchHandle } }
      }).then(resp => {
        let result = { ...resp[0] };
        if (result.handle) {
          this.showPastor = true;
          this.pastorDetails = result;
          console.log("i am result", result);
        } else {
          console.log("i am not result");
        }
      });
      //console.log(resp);
    }
  },
  mounted() {}
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
  .vs-select--input {
    border: none;
  }
  .phoneNumberPrefix {
    color: #062460;
    border: none;
  }
}
</style>
