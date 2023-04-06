$(document).ready(function () {

  // Header Component
  class MyHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <header>
        <div class="top_header">
          <div class="content_container">
            <div class="top_header_context">
              <div class="left_top_header">
                <div class="contact_txt">
                  <span
                    class="iconify"
                    data-icon="fluent:call-end-24-regular"
                    data-rotate="270deg"
                  ></span>
                  <span
                    ><a href="tel:1800-121-3637">1800-121-3637</a
                    ><span class="line">|</span
                    ><a href="tel:+91 268 2520323">+91 268 2520323</a></span
                  >
                </div>
                <div class="email_txt">
                  <span class="iconify" data-icon="ic:outline-email"></span>
                  <span><a href="mailto:info@mpuh.org">info@mpuh.org</a></span>
                </div>
              </div>
              <div class="right_top_header">
                <div class="appointment_txt">
                  <a href="#">
                    <span>Book an Appointment</span>
                    <span class="iconify" data-icon="uil:angle-right"></span>
                  </a>
                </div>
                <div class="brochure_txt">
                  <a href="#">
                    <span>Download Brochure</span>
                    <span class="iconify" data-icon="uil:angle-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="main_header">
          <div class="content_container">
            <div class="main_header_flex">
              <div class="left_main_header">
                <div class="logo_area">
                  <img src="img/logo.png" alt="Logo" />
                  <p>Muljibhai Patel<br />Urological Hospital</p>
                </div>
              </div>
              <div class="right_main_header">
                <div class="menu_links">
                  <nav>
                    <ul>
                      <li>
                        <a href="#">
                          <span>Our Expertise</span>
                          <span class="iconify" data-icon="uil:angle-down"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>Doctors</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>About Us</span>
                          <span class="iconify" data-icon="uil:angle-down"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>More</span>
                          <span class="iconify" data-icon="uil:angle-down"></span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div class="other_links">
                  <div class="search_box">
                    <img src="img/search.png" alt="Search" />
                  </div>
                  <div class="donate_box">
                    <a href="#">
                      <span>Donate</span>
                      <span class="iconify" data-icon="uil:angle-right"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
        `;
    }
  }

  customElements.define('my-header', MyHeader);


  //Footer Component
  class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer>
      <div class="footer_bg">
        <div class="footer_content">
          <div class="footer_top_area">
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                <div class="top_footer_col">
                  <div class="footer_icon">
                    <img src="img/icon/appointment.png" alt="appointment" />
                  </div>
                  <div class="footer_col_text">
                    <h3>Book an Appointment</h3>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                <div class="top_footer_col">
                  <div class="footer_icon">
                    <img src="img/icon/doner.png" alt="Donate" />
                  </div>
                  <div class="footer_col_text">
                    <h3>Donate</h3>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                <div class="top_footer_col">
                  <div class="footer_icon">
                    <img src="img/icon/email.png" alt="Contact Us" />
                  </div>
                  <div class="footer_col_text">
                    <h3>Contact Us</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="footer_bottom_area">
            <div class="row m-0">
              <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                <div class="row p-0">
                  <div class="col-lg-3 col-md-3 col-sm-4 col-6 p-0">
                    <div class="footer_bottom_col">
                      <div class="bottom_footer_heading">
                        <h3>About Us</h3>
                      </div>
                      <div class="bottom_footer_links">
                        <ul>
                          <li><a href="#">About MPUH</a></li>
                          <li><a href="#">History</a></li>
                          <li><a href="#">Our Achievements</a></li>
                          <li><a href="#">Our Team</a></li>
                        </ul>
                      </div>

                      <div class="bottom_footer_heading">
                        <h3>Kidney Diseases</h3>
                      </div>
                      <div class="bottom_footer_links">
                        <ul>
                          <li><a href="#">Diseases</a></li>
                          <li><a href="#">Kidney Diseases</a></li>
                          <li><a href="#">Case Studies</a></li>
                          <li><a href="#">Patient Testimonials</a></li>
                        </ul>
                      </div>

                      <div class="bottom_footer_heading">
                        <h3>Specialities</h3>
                      </div>
                      <div class="bottom_footer_links">
                        <ul>
                          <li><a href="#">Urology</a></li>
                          <li><a href="#">Nephrology</a></li>
                          <li><a href="#">Anesthesia</a></li>
                          <li><a href="#">Pathology</a></li>
                          <li><a href="#">Radiology</a></li>
                          <li><a href="#">Physiotherapy</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-4 col-6 p-0">
                    <div class="footer_bottom_col">
                      <div class="bottom_footer_heading">
                        <h3>Academics</h3>
                      </div>
                      <div class="bottom_footer_links">
                        <ul>
                          <li><a href="#">About JPAC</a></li>
                          <li><a href="#">Upcoming Courses</a></li>
                        </ul>
                      </div>

                      <div class="bottom_footer_heading">
                        <h3>Patient Care</h3>
                      </div>
                      <div class="bottom_footer_links">
                        <ul>
                          <li><a href="#">Patient Facilities</a></li>
                          <li><a href="#">Health Checkup</a></li>
                          <li><a href="#">Cashless Hospitalisation</a></li>
                          <li><a href="#">Hospitalisation Options</a></li>
                          <li><a href="#">Plan your trip</a></li>
                          <li><a href="#">Visitor Information</a></li>
                          <li><a href="#">FAQs</a></li>
                          <li><a href="#">Patient Testimonials</a></li>
                          <li><a href="#">Pay Online</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-4 col-6 p-0">
                    <div class="footer_bottom_col">
                      <div class="bottom_footer_heading">
                        <h3>DNB Residency Program</h3>
                      </div>
                      <div class="bottom_footer_links">
                        <ul>
                          <li><a href="#">Fellowships</a></li>
                          <li><a href="#">Events</a></li>
                          <li><a href="#">Meet our faculty</a></li>
                          <li><a href="#">Gallery</a></li>
                          <li><a href="#">Testimonials</a></li>
                        </ul>
                      </div>

                      <div class="bottom_footer_heading">
                        <h3>Research</h3>
                      </div>
                      <div class="bottom_footer_links">
                        <ul>
                          <li><a href="#">Current Program</a></li>
                          <li><a href="#">Publishes papers</a></li>
                          <li><a href="#">Scientists</a></li>
                          <li><a href="#">Participate</a></li>
                          <li><a href="#">Research Facilities</a></li>
                          <li><a href="#">Research Commitees</a></li>
                          <li><a href="#">Awards</a></li>
                          <li><a href="#">Reports</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-4 col-6 p-0">
                    <div class="footer_bottom_col">
                      <div class="bottom_footer_heading">
                        <h3>Donate</h3>
                      </div>
                      <div class="bottom_footer_links">
                        <ul>
                          <li><a href="#">Why Kidney Disease?</a></li>
                          <li>
                            <a href="#">Ways to give / Donation Options</a>
                          </li>
                          <li><a href="#">Impact</a></li>
                          <li><a href="#">Campaings</a></li>
                          <li><a href="#">Beneficiary Stories</a></li>
                          <li><a href="#">Support Partners</a></li>
                        </ul>
                      </div>

                      <div class="bottom_footer_heading">
                        <h3>
                          <a href="#">Doctors</a>
                        </h3>
                      </div>
                      <div class="bottom_footer_heading">
                        <h3>
                          <a href="#">Treatment Options</a>
                        </h3>
                      </div>
                      <div class="bottom_footer_heading">
                        <h3>
                          <a href="#">News & Media</a>
                        </h3>
                      </div>
                      <div class="bottom_footer_heading">
                        <h3>
                          <a href="#">Blogs</a>
                        </h3>
                      </div>
                      <div class="bottom_footer_heading">
                        <h3>
                          <a href="#">Careers</a>
                        </h3>
                      </div>
                      <div class="bottom_footer_heading">
                        <h3>
                          <a href="#">Contact Us</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-12 col-12 pr-0">
                <div class="address_col">
                  <div class="location">
                    <h3>Address</h3>
                    <p>
                      MPUH, Dr V V Desai Rd, Nadiad,<br />
                      Gujarat. India
                    </p>
                  </div>
                  <div class="location">
                    <h3>Telephone</h3>
                    <p>
                      <a href="tel:1800-121-3637">1800-121-3637</a>
                      <a href="tel:+91 268 2520323">+91 268 2520323</a>
                    </p>
                  </div>
                  <div class="location">
                    <h3>Email ID</h3>
                    <p>
                      <a href="mailto:info@mpuh.org">info@mpuh.org</a>
                      <a href="mailto:sale@mpuh.org">sale@mpuh.org</a>
                    </p>
                  </div>
                  <div class="social">
                    <ul>
                      <li>
                        <a href="#">
                          <span
                            class="iconify"
                            data-icon="ri:facebook-fill"
                          ></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span
                            class="iconify"
                            data-icon="ri:twitter-fill"
                          ></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="copyright">
                  <p>
                    Copyright © 2022<br />
                    Muljibhai Patel Urological Hospital.
                  </p>
                  <p>Site Credit: RT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
        `;
    }
  }

  customElements.define('my-footer', MyFooter);

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    nav: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
  });


  // Navbar dropdown child Tabs
  $(".tab_links ul li").click(function () {
    var panelToShow = $(this).attr("rel");
    // alert(panelToShow)
    $(this).addClass("active").siblings().removeClass("active");

    $(".panel.active").fadeOut(600, function () {
      $(this).removeClass("active");
      $("#" + panelToShow).fadeIn(600, function () {
        $(this).addClass("active");
      });
    });
  });

  

  //show child dropdown on click

  $('.has_dropdown a').on('click', function(){
    $(this).siblings('.dropdown_child').toggleClass('show_dropdown').parent().siblings().find('.dropdown_child').removeClass('show_dropdown');
    $(this).parent().toggleClass('active_link').siblings().removeClass('active_link');
    $(this).find('.iconify').toggleClass('rotate_svg').parent().parent().siblings().find('.iconify').removeClass('rotate_svg');
  })

  

  $(".tabs li").click(function () {
    var panelToShow = $(this).attr("rel");
    $(this).addClass("active").siblings().removeClass("active");

    $(".contentToshow .panel.active").fadeOut(600, function () {
      $(this).removeClass("active");
      $("#" + panelToShow).fadeIn(600, function () {
        $(this).addClass("active");
      });
    });
  });
});

$(".owl-carousel.detail_carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 2,
      nav: true,
      loop: false,
    },
  },
});
