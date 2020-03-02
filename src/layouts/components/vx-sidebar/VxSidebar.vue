<!-- =========================================================================================
    File Name: VxSidebar.vue
    Description: Sidebar Component
    Component Name: VxSidebar
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="parentx">
    <vs-sidebar
      v-hammer:swipe.left="onSwipeLeft"
      ref="mainSidebar"
      :parent="parent"
      :hiddenBackground="clickNotClose"
      :reduce="reduce"
      default-index="-1"
      class="sidebarx main-menu-sidebar items-no-padding custom-sidebar"
      v-model="isSidebarActive"
      :click-not-close="clickNotClose"
      :reduce-not-rebound="reduceNotRebound"
    >
      <!-- class="bg-primary" -->
      <div class="bg-primary" @mouseenter="sidebarMouseEntered" @mouseleave="sidebarMouseLeave">
        <div class="header-sidebar flex items-end justify-between" slot="header">
          <div class="logo flex items-center">
            <img
              :src="`https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-04-512.png`"
              alt="user"
              class="w-10"
              v-if="logo"
            />
            <span
              class="w-full ml-2 text-white"
              v-show="isMouseEnter || !reduce"
              style="display: flex; flex-flow: column nowrap;"
            >
              <!-- {{userSession}} -->
              <span>{{userSession.name}}</span>
              <span>{{userSession.email}}</span>
            </span>
            <!-- <span class="logo-text" v-show="isMouseEnter || !reduce" v-if="title">{{ title }}</span> -->
          </div>
          <div>
            <template v-if="showCloseButton">
              <vs-button
                color="#E6EFFE"
                text-color="#0B3FA8"
                class="m-0 cursor-pointer"
                icon-pack="fa"
                icon="fa-angle-double-left fa-2x"
                @click="$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', false)"
              >
                <!-- <span class="fa fa-angle-double-left fa-2x"></span> -->
              </vs-button>
            </template>
            <template v-else-if="!showCloseButton && !sidebarItemsMin">
              <vs-button
                color="#E6EFFE"
                text-color="#0B3FA8"
                icon-pack="fa"
                icon="fa-angle-double-left fa-2x"
                v-show="!reduce"
                @click="toggleReduce(true)"
              >
                <!-- <span class="fa fa-angle-double-left fa-2x"></span> -->
              </vs-button>
              <vs-button
                color="#E6EFFE"
                text-color="#0B3FA8"
                icon-pack="fa"
                icon="fa-angle-double-right fa-2x"
                v-show="reduce"
                @click="toggleReduce(false)"
              >
                <!-- <span class="fa fa-angle-double-right fa-2x"></span> -->
              </vs-button>
              <!-- <toggle-btn  class="mr-0 cursor-pointer"   v-show="!reduce" @click="toggleReduce(true)" id="btnSidebarToggler reduce"></toggle-btn>
              <toggle-btn   class="mr-0 cursor-pointer"   v-show="reduce" @click="toggleReduce(false)" id="btnSidebarToggler expand"></toggle-btn>-->
            </template>
          </div>
        </div>

        <div class="shadow-bottom" v-show="showShadowBottom"></div>

        <VuePerfectScrollbar
          ref="mainSidebarPs"
          class="scroll-area--main-sidebar pt-2"
          :settings="settings"
          @ps-scroll-y="psSectionScroll"
        >
          <template v-for="(sidebarItem, index) in sidebarItems">
            <!-- GROUP ITEM HEADER -->
            <span
              :key="`header-${index}`"
              v-if="sidebarItem.header && !sidebarItemsMin"
              class="navigation-header truncate"
            >{{ sidebarItem.header }}</span>
            <template v-else-if="!sidebarItem.header">
              <!-- IF IT'S SINGLE ITEM -->
              <!-- {{$acl.check(sidebarItem.permission)}} -->
              <vx-sidebar-item
                color="#ffffff"
                ref="sidebarLink"
                :key="`sidebarItem-${index}`"
                v-if="!sidebarItem.submenu"
                v-show="$acl.check(sidebarItem.permission)"
                :index="index"
                :to="sidebarItem.slug != 'external' ? sidebarItem.url : ''"
                :href="sidebarItem.slug == 'external' ? sidebarItem.url : ''"
                :icon="sidebarItem.icon"
                :target="sidebarItem.target"
                :isDisabled="sidebarItem.isDisabled"
                :slug="sidebarItem.slug"
              >
                <span v-show="!sidebarItemsMin" class="truncate">{{ sidebarItem.name }}</span>
                <vs-chip
                  class="ml-auto"
                  :color="sidebarItem.tagColor"
                  v-if="sidebarItem.tag && (isMouseEnter || !reduce)"
                >{{ sidebarItem.tag }}</vs-chip>
              </vx-sidebar-item>

              <!-- IF HAVE SUBMENU / DROPDOWN -->
              <template v-else>
                <vx-sidebar-group
                  v-show="$acl.check(sidebarItem.permission)"
                  ref="sidebarGrp"
                  :key="`group-${index}`"
                  :openHover="openGroupHover"
                  :group="sidebarItem"
                  :groupIndex="index"
                  :open="isGroupActive(sidebarItem)"
                ></vx-sidebar-group>
              </template>
            </template>
          </template>

          <vx-sidebar-item
            color="#ffffff"
            ref="LogoutLink"
            :key="`sidebarItem-logout`"
            :index="sidebarItems.length"
            icon="LogOutIcon"
            :isButton="true"
            style="margin-top: 50px"
            :action="logoutApp"
          >
            <span v-show="!sidebarItemsMin" class="truncate">Logout</span>
          </vx-sidebar-item>
        </VuePerfectScrollbar>
      </div>
    </vs-sidebar>
    <div
      v-hammer:swipe.right="onSwipeRightSidebarSwipeArea"
      v-if="!isSidebarActive"
      class="sidebar-swipe-area"
      id="sidebar-swipe-area"
    ></div>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import VxSidebarGroup from "./VxSidebarGroup.vue";
import VxSidebarItem from "./VxSidebarItem.vue";
import CustomToggleBtn from "./toggleBtn.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "vx-sidebar",
  props: {
    sidebarItems: {
      type: Array,
      required: true
    },
    title: {
      type: String
    },
    logo: {
      type: String
    },
    parent: {
      type: String
    },
    openGroupHover: {
      type: Boolean,
      default: false
    },
    reduceNotRebound: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    clickNotClose: false, // disable close sidebar on outside click
    reduce: false, // determines if sidebar is reduce - component property
    showCloseButton: false, // show close button in smaller devices
    isMouseEnter: false,
    settings: {
      // perfectscrollbar settings
      maxScrollbarLength: 60,
      wheelSpeed: 1,
      swipeEasing: true
    },
    windowWidth: window.innerWidth, //width of windows
    showShadowBottom: false
  }),
  computed: {
    ...mapGetters(["userSession"]),
    isSidebarActive: {
      get() {
        return this.$store.state.isSidebarActive;
      },
      set(val) {
        this.$store.commit("TOGGLE_IS_SIDEBAR_ACTIVE", val);
      }
    },
    reduceSidebar() {
      return Boolean(this.reduce && this.reduceButton);
    },
    reduceButton: {
      get() {
        return this.$store.state.reduceButton;
      },
      set(val) {
        this.$store.commit("TOGGLE_REDUCE_BUTTON", val);
      }
    },
    sidebarItemsMin() {
      return this.$store.state.sidebarItemsMin;
    },
    isGroupActive() {
      return sidebarItem => {
        const path = this.$route.fullPath;
        let open = false;
        let func = function(sidebarItem) {
          if (sidebarItem.submenu) {
            sidebarItem.submenu.forEach(item => {
              if (path == item.url) {
                open = true;
              } else if (item.submenu) {
                func(item);
              }
            });
          }
        };
        func(sidebarItem);
        return open;
      };
    }
  },
  watch: {
    reduce(val) {
      if (val == true) {
        this.$store.dispatch("updateSidebarWidth", "reduced");
      } else {
        this.$store.dispatch("updateSidebarWidth", "default");
      }

      setTimeout(function() {
        window.dispatchEvent(new Event("resize"));
      }, 100);
    },
    reduceButton() {
      this.setSidebarWidth();
    },
    $route() {
      if (this.isSidebarActive && this.showCloseButton)
        this.$store.commit("TOGGLE_IS_SIDEBAR_ACTIVE", false);
    }
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    logoutApp() {
      // console.log({loginout});
      this.logout(this.$acl);
    },
    sidebarMouseEntered() {
      if (this.reduce) this.$store.commit("UPDATE_SIDEBAR_ITEMS_MIN", false);
      this.isMouseEnter = true;
    },
    sidebarMouseLeave() {
      if (this.reduce) {
        this.$store.commit("UPDATE_SIDEBAR_ITEMS_MIN", true);
      }
      this.isMouseEnter = false;
    },
    toggleReduce(val) {
      console.log(val);
      this.reduceButton = val;
      this.setSidebarWidth();
    },
    handleWindowResize(event) {
      this.windowWidth = event.currentTarget.innerWidth;
      this.setSidebarWidth();
    },
    setSidebarWidth() {
      if (this.windowWidth < 1200) {
        if (this.windowWidth < 992)
          this.$store.commit("UPDATE_WINDOW_BREAKPOINT", "md");
        else this.$store.commit("UPDATE_WINDOW_BREAKPOINT", "lg");

        this.$store.commit("TOGGLE_IS_SIDEBAR_ACTIVE", false);
        if (this.reduceButton) this.reduce = false;
        // this.reduceButton = false;
        this.showCloseButton = true;
        this.clickNotClose = false;
        this.$store.dispatch("updateSidebarWidth", "no-sidebar");
        this.$store.commit("UPDATE_SIDEBAR_ITEMS_MIN", false);
      } else {
        this.$store.commit("UPDATE_WINDOW_BREAKPOINT", "xl");
        if (this.reduceButton) this.reduce = true;
        else this.reduce = false;

        this.$store.commit("TOGGLE_IS_SIDEBAR_ACTIVE", true);
        if (this.reduceButton && !this.isMouseEnter)
          this.$store.commit("UPDATE_SIDEBAR_ITEMS_MIN", true);
        else this.$store.commit("UPDATE_SIDEBAR_ITEMS_MIN", false);

        this.clickNotClose = true;
        this.showCloseButton = false;
        if (this.reduceSidebar)
          this.$store.dispatch("updateSidebarWidth", "reduced");
        else this.$store.dispatch("updateSidebarWidth", "default");
      }
    },
    psSectionScroll() {
      if (this.$refs.mainSidebarPs.$el.scrollTop > 0)
        this.showShadowBottom = true;
      else this.showShadowBottom = false;
    },
    onSwipeLeft() {
      if (this.isSidebarActive && this.showCloseButton)
        this.isSidebarActive = false;
    },
    onSwipeRightSidebarSwipeArea() {
      if (!this.isSidebarActive && this.showCloseButton)
        this.isSidebarActive = true;
    }
  },
  components: {
    VxSidebarGroup,
    VxSidebarItem,
    VuePerfectScrollbar,
    "toggle-btn": CustomToggleBtn
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.handleWindowResize);
    });
    this.setSidebarWidth();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleWindowResize);
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/vuesax/components/vxSidebar.scss";
.main-menu-sidebar .vs-sidebar--item .router-link-active {
  background: linear-gradient(118deg, rgba(#3f73dc, 1), rgba(#3f73dc, 0.7));
  font-weight: 400;
  -webkit-box-shadow: 0px 0px 10px 1px rgba(var(--vs-primary), 0.7);
  box-shadow: 0px 0px 10px 1px rgba(var(--vs-primary), 0.7);
}
.vs-sidebar .vs-sidebar--items .vs-sidebar--item a {
  color: #c2c6dc !important;
}
</style>
