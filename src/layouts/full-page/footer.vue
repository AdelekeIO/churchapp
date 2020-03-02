<template>
  <footer class="nb-footer">
    <vs-row>
      <vs-col
        vs-type="flex"
        vs-justify="flex-start"
        vs-align="center"
        vs-w="12"
        style="padding: 80px 10px 20px 50px;"
      >
        <img
          :src="require('@/assets/images/logo/logo-white.png')"
          class="img-responsive center-block"
          alt
        /> &nbsp;
        <span class="footer-appname">deallus</span>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="flex-start"
        vs-w="2"
        vs-sm="6"
        vs-xs="12"
      >
        <div class="footer-info-single">
          <h2 class="title">about</h2>
          <ul class="list-unstyled">
            <li>
              <a href="#" title>
                 Deallus
              </a>
            </li>
            <li>
              <a href="#" title>
                 Team
              </a>
            </li>
            <li>
              <a href="#" title>
                 Mission
              </a>
            </li>
          </ul>
        </div>
      </vs-col>
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="flex-start"
        vs-w="2"
        vs-sm="6"
        vs-xs="12"
      >
        <div class="footer-info-single">
          <h2 class="title">Churches</h2>
          <ul class="list-unstyled">
            <li>
              <a href="#" title>
                 Church Admins
              </a>
            </li>
            <li>
              <a href="#" title>
                 Activities
              </a>
            </li>
            <li>
              <a href="#" title>
                 Workers
              </a>
            </li>
            <li>
              <a href="#" title>
                 Kids
              </a>
            </li>
          </ul>
        </div>
      </vs-col>

      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="flex-start"
        vs-w="2"
        vs-sm="6"
        vs-xs="12"
      >
        <div class="footer-info-single">
          <h2 class="title">blog</h2>
          <ul class="list-unstyled">
            <li>
              <a href="#" title>
                 Catalog
              </a>
            </li>
            <li>
              <a href="#" title>
                 Tools
              </a>
            </li>
            <li>
              <a href="#" title>
                 Mentors
              </a>
            </li>
            <li>
              <a href="#" title>
                 Guardians
              </a>
            </li>
          </ul>
        </div>
      </vs-col>
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="flex-start"
        vs-w="2"
        vs-sm="6"
        vs-xs="12"
      >
        <div class="footer-info-single">
          <h2 class="title">developers</h2>
          <ul class="list-unstyled">
            <li>
              <a href="#" title>
                 API
              </a>
            </li>
            <li>
              <a href="#" title>
                 Documentation
              </a>
            </li>
            <li>
              <a href="#" title>
                 Churches
              </a>
            </li>
            <li>
              <a href="#" title>
                 Jobs
              </a>
            </li>
          </ul>
        </div>
      </vs-col>
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="flex-start"
        vs-w="2"
        vs-sm="6"
        vs-xs="12"
      >
        <div class="footer-info-single">
          <h2 class="title">support</h2>
          <ul class="list-unstyled">
            <li>
              <a href="#" title>
                 Contact US
              </a>
            </li>
            <li>
              <a href="#" title>
                 Help & FAQ
              </a>
            </li>
            <li>
              <a href="#" title>
                 Mentors
              </a>
            </li>
            <li>
              <a href="#" title>
                 Community
              </a>
            </li>
          </ul>
        </div>
      </vs-col>
    </vs-row>

    <section class="copyright">
      <!-- <vs class="container"> -->
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="flex-start" vs-w="4">
          <span>Copyright © {{new Date().getFullYear()}}. Deallus Church. Allrights reserved.</span>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="flex-start" vs-w="4">
          <span>
            <a href="#">Legal & Privacy</a> .
            <a href="#">Term of use</a> .
            <a href="#">Site map</a>
          </span>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="flex-start" vs-w="4">
          <div class="social-media">
            <!-- <ul class="list-inline">
            <li>-->
            <a href="#" title>
              <i class="fa fa-facebook"></i>
            </a>
            <!-- </li>
            <li>-->
            <a href="#" title>
              <i class="fa fa-twitter"></i>
            </a>
            <!-- </li>
            <li>-->
            <a href="#" title>
              <i class="fa fa-google-plus"></i>
            </a>
            <!-- </li>
            <li>-->
            <a href="#" title>
              <i class="fa fa-linkedin"></i>
            </a>
            <!-- </li>
            </ul>-->
          </div>
        </vs-col>
      </vs-row>
      <!-- </div> -->
    </section>
  </footer>
</template>

<script>
export default {
  name: "app-footer"
};
</script>
<style lang="scss">
footer.nb-footer {
  position: relative;
  background: linear-gradient(
      0deg,
      rgba($color: #0b3fa8, $alpha: 0.9),
      rgba($color: #0b3fa8, $alpha: 0.8)
    ),
    url(../../assets/images/base.jpg);
  background-size: cover;
  /* border-top: 4px solid #b78c33; */
}
.footer-appname {
  font-size: 40px;
  font-weight: bolder;
  color: #fff;
}

footer.nb-footer .about {
  margin: 0 auto;
  margin-top: 40px;
  max-width: 1170px;
  text-align: center;
}
footer.nb-footer .about p {
  font-size: 13px;
  color: #999;
  margin-top: 30px;
}
footer.nb-footer .about .social-media {
  margin-top: 15px;
}
ul {
  padding: 0px;
}
.social-media a {
  display: inline-block;
  width: 45px;
  height: 45px;
  line-height: 45px;
  border-radius: 50%;
  font-size: 16px;
  text-align: center;
  /* color: #b78c33; */
  background: #fff;
  margin: 2px;
  i {
    color: #0b3fa8;
    font-size: 20px;
  }
}
footer.nb-footer .about .social-media ul li a:hover {
  background: #b78c33;
  color: #fff;
  border-color: #b78c33;
}
footer.nb-footer .footer-info-single {
  margin-top: 30px;
}
footer.nb-footer .footer-info-single .title {
  color: #fff;
  text-transform: uppercase;
  font-size: 16px;
}
footer.nb-footer .footer-info-single ul li a {
  text-decoration: none;
  display: block;
  color: #fff;
  padding: 7px;
}
footer.nb-footer .footer-info-single ul li a:hover {
  color: #b78c33;
}
footer.nb-footer .footer-info-single p {
  font-size: 13px;
  line-height: 20px;
  color: #aaa;
}
footer.nb-footer .copyright {
  border-top: 1px #999 solid;
  margin-top: 15px;
  padding: 7px 0;
  color: #fff;
  padding: 40px;
}
footer.nb-footer .copyright a {
  text-decoration: none;
  color: #fff;
}
</style>