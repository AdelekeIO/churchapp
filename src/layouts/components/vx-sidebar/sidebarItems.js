/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  {
    url: "/app",
    name: "Home",
    slug: "home",
    icon: "HomeIcon",
    permission: 'public'
  },
  {
    url: "/app/communication",
    name: "Communication",
    slug: "communication",
    icon: "MessageSquareIcon",
    permission: "public"
  },
  {
    url: "/app/people",
    name: "People",
    slug: "people",
    icon: "UsersIcon",
    permission: "public"
  },
  {
    url: "/app/service-report",
    name: "ServiceReport",
    slug: "service-report",
    icon: "BarChart2Icon",
    permission: "public"
  },
  {
    url: "/app/church-events",
    name: "ChurchEvents",
    slug: "church-events",
    icon: "CalendarIcon",
    permission: "public"
  },
  {
    url: "/app/staff-checkin",
    name: "StaffCheckIn",
    slug: "staff-checkin",
    icon: "UserCheckIcon",
    permission: "public"
  },
  {
    url: "/app/cell-fellowship",
    name: "CellFellowship",
    slug: "cell-fellowship",
    icon: "GridIcon",
    permission: "public"
  },
]
