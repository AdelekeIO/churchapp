<template>
  <div class="vx-row">
    <div class="vx-col w-full mb-base">
      <vx-card class="p-2 profile-header-info">
        <h3>Update church information</h3>
        <h4>Set permissions for your staffs. Choose what part of your church they have access to. Select a staff below and choose permission.</h4>
      </vx-card>
    </div>

    <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base">
      <div class="flex justify-between flex-wrap items-center mb-4">
        <span class="title-bold">Pastor's Information</span>
        <vs-button type="filled" color="#59D189" @click="savepastorDetails">Save changes</vs-button>
      </div>
      <vx-card class="p-2">
        <!-- {{churchDetails}} -->
        <div class="flex justify-between flex-wrap items-center">
          <div class="flex justify-start items-center">
            <vs-avatar
              size="70px"
              src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4"
            />
            <div class="flex flex-col justify-around items-start ml-2">
              <span class="title-bold">Pastor {{churchDetails.pastorFirstname || churchDetails.pastorLastname?`${churchDetails.pastorFirstname} ${churchDetails.pastorLastname}`:`---`}}</span>
              <span>{{churchDetails.pastorPhone?churchDetails.pastorPhone:`---`}}</span>
            </div>
          </div>
          <span>
            <vs-button class="mt-4" type="filled" color="primary">Change Picture</vs-button>
          </span>
        </div>
        <div class="p-2 mt-6">
          <form action="#">
            <div class="vx-row mb-6">
              <div class="vx-col w-1/2">
                <vs-input class="w-full" label="First Name" v-model="churchDetails.pastorFirstname" />
              </div>
              <div class="vx-col w-1/2">
                <vs-input class="w-full" label="Last Name" v-model="churchDetails.pastorLastname" />
              </div>
            </div>
            <div class="vx-row mb-6">
              <div class="vx-col w-full">
                <vs-input class="w-full" label="Phone Number" v-model="churchDetails.pastorPhone" />
              </div>
            </div>
            <div class="vx-row mb-6">
              <div class="vx-col w-full">
                <vs-input class="w-full" label="Designation" v-model="churchDetails.pastorDesignation" />
              </div>
            </div>
          </form>
        </div>
      </vx-card>
    </div>

    <div class="vx-col w-full sm:w-1/2 lg:w-2/3 mb-base">
      <div class="flex justify-between flex-wrap items-center mb-4">
        <span class="title-bold">Church Information</span>
        <vs-button type="filled" @click="saveChurchDetails" color="#59D189">Save changes</vs-button>
      </div>

      <vx-card class="p-2">
        <!-- {{churchDetails}} -->
        <div class="flex w-full p-2 mt-4">
          <form class="w-full" action="#">
            <div class="vx-row mb-6">
              <div class="vx-col w-1/2">
                <vs-input class="w-full" label="Church Name" v-model="churchDetails.name" />
              </div>
              <div class="vx-col w-1/2">
                <vs-input
                  class="w-full"
                  label="Number of members"
                  v-model="churchDetails.noOfMembers"
                />
              </div>
            </div>
            <div class="vx-row mb-6">
              <div class="vx-col w-1/2">
                <vs-input class="w-full" label="Number of staff" v-model="churchDetails.noOfStaff" />
              </div>
              <div class="vx-col w-1/2">
                <vs-input class="w-full" label="Church phone number" v-model="churchDetails.phone" />
              </div>
            </div>

            <div class="vx-row mb-6">
              <div class="vx-col w-full">
                <vs-input class="w-full" label="Church address" v-model="churchDetails.address" />
              </div>
            </div>

            <div class="vx-row mb-6 mt-12">
              <div class="vx-col w-full mb-6">
                <span class="title-bold">Church soial media handles(Optional)</span>
              </div>
              <div class="vx-col w-1/2 mb-6">
                <vs-input class="w-full" label="Facebook" v-model="churchDetails.facebookHandle" />
              </div>
              <div class="vx-col w-1/2 mb-6">
                <vs-input class="w-full" label="Twitter" v-model="churchDetails.twitterHandle" />
              </div>
              <div class="vx-col w-1/2 mb-6">
                <vs-input class="w-full" label="Instagram" v-model="churchDetails.instagramHandle" />
              </div>
              <div class="vx-col w-1/2 mb-6">
                <vs-input class="w-full" label="Google" v-model="churchDetails.googleHandle" />
              </div>
            </div>

            <!-- <div class="vx-row">
              <div class="vx-col w-full">
                <vs-button class="mr-3 mb-2">Submit</vs-button>
                <vs-button
                  color="warning"
                  type="border"
                  class="mb-2"
                  @click="input9 = input10 = input11 = input12 = ''; check3 = false;"
                >Reset</vs-button>
              </div>
            </div>-->
          </form>
        </div>
        <template slot="footer">
          <vs-divider />
        </template>
      </vx-card>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "home",
  data() {
    return {
      churchDetails: null,
      //pastorDetails: null,
      card_4: {
        userImg: "avatar-s-12.png",
        name: "Zoila Legore",
        profession: "Backend Dev",
        btn_1_text: "Follow",
        btn_2_text: "Message",
        footer_text_1_icon: "StarIcon",
        footer_text_1: "4.9",
        footer_text_2_icon: "BriefcaseIcon",
        footer_text_2: "37 Projects"
      }
    };
  },
  computed: {
    ...mapGetters(["userSession"])
  },
  methods: {
    ...mapActions("auth", ["updateProfile", "fetchProfile"]),
    async saveChurchDetails() {
      let resp = await this.updateProfile({
        group: "churches",
        data: this.churchDetails,
        notify: this.$vs.notify,
        navigate: this.$router
      });
    },
    async savepastorDetails() {
      //console.log(this.churchDetails);
      let resp = await this.updateProfile({
        group: `churches`,
        data: this.churchDetails,
        notify: this.$vs.notify,
        navigate: this.$router
      });
    },
  },
  mounted() {
    this.churchDetails = this.userSession.church[0];
    //this.pastorDetails = this.userSession.church[0];
    //this.profile= this.userSession.church[0];
    let { roleType } = this.userSession;
    this.fetchProfile({
      id: this.userSession[roleType][0]["userId"],
      notify: this.$vs.notify,
      filter: { include: ["church", "staff", "role_mappings"] }
    });
  }
};
</script>

<style lang="scss">
.profile-header-info {
  h3,
  h4 {
    font-size: 17px !important;
    color: #253a64 !important;
    margin: 15px;
  }
  h3 {
    font-weight: bold;
  }
}
.title-bold {
  font-size: 16px;
  // line-height: 24px;
  font-weight: bold;
  color: #042363;
}
</style>