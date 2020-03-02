<template>
 <div class="vx-row">
    <div class="vx-col w-full  sm:w-1/2 lg:w-1/3 mb-base">
      <vx-card class="p-50 " style="height: 300px">
        <div></div>
      </vx-card>
    </div>
    <div class="vx-col w-full  sm:w-1/2 lg:w-1/3 mb-base">
      <vx-card class="p-50 " style="height: 300px">
        <div></div>
      </vx-card>
    </div>
    <div class="vx-col w-full  sm:w-1/2 lg:w-1/3 mb-base">
      <vx-card class="p-50 " style="height: 300px">
        <div></div>
      </vx-card>
    </div>
    <div class="vx-col w-full sm:w-1/2 lg:w-2/3 mb-base">
      <vx-card class="p-200 " style="height: 400px">
        <div></div>
      </vx-card>
    </div>
    <div class="vx-col w-full  sm:w-1/2 lg:w-1/3 mb-base">
      <vx-card class="p-50 " style="height: 400px">
        <div></div>
      </vx-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
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