<template>
  <div class="vx-row">
    <div class="vx-col w-full mb-base">
      <vx-card class="p-2 profile-header-info">
        <h3>Select a staff to set permission</h3>
        <h4>Set permissions for your staffs. Choose what part of your church they have access to. Select a staff below and choose permission.</h4>
      </vx-card>
    </div>

    <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base">
      <!-- <div class="flex justify-between flex-wrap items-center mb-4">
        <span class="title-bold">Pastor's Information</span>
        <vs-button type="filled" color="#59D189">Save changes</vs-button>
      </div>-->
      <vx-card class="p-2">
        <vs-input
          class="w-full"
          icon="search"
          icon-after="true"
          placeholder="Search"
          v-model="value1"
        />
        <!-- <vs-divider></vs-divider> -->
        <div class="p-2 mt-6">
          <!-- <vx-card > -->
          <div class="flex justify-between flex-wrap items-center p-2" v-for="i in 6" :key="i">
            <div class="flex justify-start items-center">
              <vs-avatar
                size="40px"
                src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4"
              />
              <div class="flex flex-col justify-around items-start ml-2">
                <span class="title-bold">Pastor Okoro James</span>
                <span>+234817737399</span>
              </div>
            </div>
            <span>
              <vs-chip color="primary">{{i%2?'staff':'administrator'}}</vs-chip>
            </span>
            <vs-divider />
          </div>

          <!-- </vx-card> -->
        </div>
      </vx-card>
    </div>

    <div class="vx-col w-full sm:w-1/2 lg:w-2/3 mb-base">
      <vx-card class="p-2">
        <div class="flex justify-between flex-wrap items-center">
          <div class="flex justify-start items-center">
            <vs-avatar
              size="70px"
              src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4"
            />
            <div class="flex flex-col justify-around items-start ml-2">
              <span class="title-bold">Pastor Okoro James</span>
              <span>+234817737399</span>
            </div>
          </div>
          <span>
            <vs-button class="mt-4 mr-2" type="filled" color="success">Save changes</vs-button>
            <vs-button class="mt-4" color="danger" type="border">Clear selection</vs-button>
          </span>
        </div>
        <vs-divider />
        <div class="flex flex-col w-full p-2 mt-4">
          <div class="flex w-full justify-start items-start mb-8">
            <vs-radio
              class="mr-5"
              color="success"
              v-model="radios2"
              vs-value="admin"
            >Church Administrator</vs-radio>
            <vs-radio color="success" v-model="radios2" vs-value="staff">Church Staff</vs-radio>
          </div>
          <form class="w-full" action="#">
            <div class="vx-row mb-6">
              <div
                v-for="(single_permission,index) in permissions"
                :key="index+'perm'"
                class="vx-col w-1/2 flex justify-between items-center p-5 mb-2"
              >
                <label for>{{single_permission}}</label>
                <vs-switch v-model="permission_mark[index]" />
              </div>
            </div>
            <vs-divider></vs-divider>
            <div class="vx-row mb-6 mt-12">
              <div class="vx-col w-full mb-6 flex justify-between">
                <span class="title-bold">Cell fellowship permission</span>
                <vs-input
                  class="w-2/5"
                  icon="search"
                  icon-after="true"
                  placeholder="Search cell by name"
                  v-model="value1"
                />
              </div>
              <div
                v-for="(single_permission,index) in cell_permissions"
                :key="index+'permcell'"
                class="vx-col w-1/2 flex justify-between items-center p-5 mb-2"
              >
                <label for>{{single_permission}}</label>
                <vs-switch v-model="permission_mark[index]" />
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
export default {
  name: "home",
  data() {
    return {
      radios2: "admin",
      cell_permissions: ["Cell A", "Cell B", "Cell Q", "Cell W", "Cell z"],
      permissions: [
        "Membership",
        "Event",
        "People",
        "Services",
        "Subscription",
        "Profile",
        "Support"
      ],
      permission_mark: [],
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