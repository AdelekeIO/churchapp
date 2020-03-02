<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="justify-center" id="page-pricing">
    <vs-row vs-justify="space-around">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <h3>
          Plans and Pricing
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.175 20.9975C15.7945 20.9975 20.35 16.442 20.35 10.8225C20.35 5.20296 15.7945 0.647461 10.175 0.647461C4.5555 0.647461 0 5.20296 0 10.8225C0 16.442 4.5555 20.9975 10.175 20.9975Z"
              fill="#EBF9FD"
            />
            <path
              d="M13.9028 6.74288C13.5188 6.87087 13.0389 7.14284 12.6709 7.39882C12.015 7.84677 10.9911 8.69469 10.4631 9.39862C10.1751 9.78258 9.74318 10.3905 9.31123 11.1584L9.02325 11.7344L8.75128 11.4944C8.27133 10.9505 7.64739 10.7105 7.27942 10.7105C6.71948 10.7105 6.30352 10.8385 6.19153 11.1265C6.06354 11.3984 6.12754 11.5104 6.57549 11.8464C6.70348 11.9424 6.94346 12.1504 7.07145 12.2943C7.5674 12.8063 7.90336 13.3022 8.27133 14.1182C8.5273 14.7101 8.91126 14.9821 9.10325 14.9821C9.35922 14.9821 9.40722 14.9661 9.5352 14.9021C9.61519 14.8541 9.71119 14.7581 9.75918 14.7101C9.80718 14.6461 9.98316 14.2301 10.1751 13.7822C10.5591 12.8223 10.7671 12.3903 11.0871 11.7664C11.871 10.2625 13.0229 8.90267 14.0628 7.84677C14.2707 7.63879 14.4467 7.43081 14.4787 7.36682C14.5427 7.22283 14.5427 7.06285 14.4627 6.91886C14.3347 6.66289 14.1587 6.66289 13.9028 6.74288Z"
              fill="#4FC677"
            />
            <path
              d="M14.399 7.44666C14.319 7.54265 14.1911 7.68663 14.0631 7.81462C13.0232 8.87052 11.8713 10.2144 11.0874 11.7342C10.7674 12.3422 10.5594 12.7901 10.1754 13.734C9.99947 14.182 9.80748 14.598 9.75949 14.6619C9.72749 14.7259 9.6155 14.8059 9.55151 14.8539C9.42352 14.9339 9.37553 14.9339 9.11955 14.9339C9.10355 14.9339 9.07156 14.9339 9.05556 14.9179C9.02356 14.8539 8.99157 14.7899 8.95957 14.7259C8.6076 13.91 8.25564 13.4141 7.75969 12.9021C7.6477 12.7901 7.50371 12.6621 7.37572 12.5502C7.27973 12.4382 7.18374 12.3422 7.08775 12.2462C7.00776 12.1662 6.91177 12.0702 6.81578 11.9902C6.79978 11.9262 6.83178 11.8462 6.86377 11.7502C6.99176 11.4783 7.40772 11.3343 7.95167 11.3343C8.31963 11.3343 8.92757 11.5742 9.42352 12.1182L9.6955 12.3582L9.98347 11.7822C10.4154 11.0143 10.8474 10.4224 11.1354 10.0224C11.6473 9.31847 12.6712 8.48655 13.3431 8.0226C13.6471 7.83062 14.0471 7.59064 14.399 7.44666Z"
              fill="#A5F9BE"
            />
          </svg>
        </h3>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4" vs-sm="8">
        <span
          class="pricing-description"
        >All plans and pricing comes with 30 days free trial and includes all features. Select a plan to set up your church</span>
      </vs-col>
    </vs-row>
    <!-- <vs-row></vs-row> -->

    <div class="pricing-container">
      <vs-row vs-justify="space-around">
        <vs-col
          style="margin-bottom: 20px;"
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          vs-lg="4"
          vs-sm="6"
          vs-xs="12"
          v-for="(single_item, i) in subList"
          :key="`subscr_${i}_data`"
        >
          <!-- {{single_item}} -->
          <vs-card style="max-width: 457px;" fixedHeight>
            <div slot="header" class="pricing-table-header">
              <span>{{`Congregation size up to ${single_item.maxSize}`}}</span>
              <span class="fa fa-check-square fa-2x text-primary"></span>
            </div>
            <div class="pricing-table-body">
              <div class="price-row">
                <div class="category">
                  <span class="rate">NGN/Month</span>
                  <span class="amount">₦{{single_item.price}}</span>
                  <span class="freq">Bill Yearly</span>
                </div>
                <div class="category">
                  <span class="rate">USD/Month</span>
                  <span class="amount">$ {{single_item.priceusd}}</span>
                  <span class="freq">Bill Yearly</span>
                </div>
              </div>
              <h3>{{single_item.name}}</h3>
              <p>{{single_item.description}}</p>
              <vs-button
                :color="randomColor()"
                style="margin-top: 20px;"
                class="w-full plan-button"
                :to="`/church-details?plan=${single_item.id}`"
              >SELECT PLAN</vs-button>
            </div>
          </vs-card>
        </vs-col>
      </vs-row>
    </div>
    <!-- <vx-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
      <vs-card>
        <div slot="header">
          <h4 class="mb-4" style="text-align: center;">SIGN UP</h4>
        </div>
        <div class="full-page-bg-color" style="padding: 40px;">
          <div class="vx-row no-gutter justify-center items-center"> 
            <div class="p-8">
              <div class="vx-card__title mb-8">
                <h4 style="color:  #0B3FA8; font-weight: bold;">Create your account</h4>
                <p>Choose an option for the type of account you would like to create.</p>
              </div>

              <vs-row vs-justify="center">
                <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
                  <router-link to="/church-confirm">
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
                  <router-link to="/user-confirm">
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
              <div class="flex flex-wrap justify-between my-5">
                <router-link to="/">Already have an account? Sign in here</router-link>
              </div>
            </div> 
          </div>
        </div>
      </vs-card>
      <footnote></footnote>
    </vx-col>-->
  </div>
</template>

<script>
import footnote from "@/layouts/full-page/footnote";
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("pricing", ["fetchAll"]),
    randomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  },
  data() {
    return {
      subList: [],
      email: "",
      password: "",
      checkbox_remember_me: false
    };
  },
  components: {
    footnote
  },
  async mounted() {
    this.subList = await this.fetchAll();
    // console.log(this.subList);
  }
};
</script>

<style lang="scss">
#page-pricing {
  background: #f5f9ff;
  padding-top: 50px;
  .pricing-description {
    // width: 549px;
    font-size: 14px;
    text-align: center;
    color: #7a8ba6;
    padding-bottom: 20px;
  }
  .pricing-container {
    padding: 20px 50px;
    // padding: 10px 40px;
  }

  .pricing-table-header {
    display: flex;
    justify-content: space-between;
    padding: 10px 7px;

    font-weight: bold;
  }
  .pricing-table-body {
    padding: 20px 7px;
    font-size: 17px;
  }

  .price-row {
    display: flex;
    justify-content: space-between;
    .category {
      display: flex;
      justify-content: space-around;
      flex-flow: column nowrap;

      .rate {
        font-size: 12px;
        // line-height: 16px;
        color: #556277;
        font-weight: bold;
        text-transform: capitalize;
      }
      .amount {
        font-size: 30px;
        // line-height: 38px;
        color: #0b3fa8;
        font-weight: bold;
      }
      .freq {
        font-size: 15px;
        color: #7a8ba6;
      }
    }
  }
  .plan-button {
    padding: 15px 2px;
    border-radius: 5px;
  }
}
</style>
between