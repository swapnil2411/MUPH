$(document).ready(function () {

  // Header Component
  class MyHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <header>
      <div class="top_header">
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
      <div class="main_header">
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
                  <li class="has_dropdown nav_link">
                    <a href="javascript:void(0)">
                      <span>Our Expertise</span>
                      <span class="iconify" data-icon="uil:angle-down"></span>
                    </a>
                    <div class="dropdown_child">
                      <div class="dropdown_tabs">
                        <div class="tab_links">
                          <ul>
                            <li class="active" rel="panel_one">
                              <img src="img/kidney.png" alt="kidney" class="img-fluid">
                              <span class="font_regular">kidney diseases</span>
                              <div class="arrrow">
                                <span class="iconify" data-icon="ic:sharp-keyboard-arrow-down"></span>
                              </div>
                            </li>
                            <li href="#" rel="panel_two">
                              <a href="#">
                                <img src="img/choice.png" alt="treatment options" class="img-fluid">
                                <span class="font_regular">treatment options</span>
                              </a>
                            </li>
                            <li rel="panel_three">
                              <img src="img/badge.png" alt="Specialities" class="img-fluid">
                              <span class="font_regular">Specialities</span>
                              <div class="arrrow">
                                <span class="iconify" data-icon="ic:sharp-keyboard-arrow-down"></span>
                              </div>
                            </li>
                            <li rel="panel_four">
                              <img src="img/insurance.png" alt="patient care" class="img-fluid">
                              <span class="font_regular">patient care</span>
                              <div class="arrrow">
                                <span class="iconify" data-icon="ic:sharp-keyboard-arrow-down"></span>
                              </div>
                            </li>
                            <li rel="panel_five">
                              <img src="img/flask.png" alt="flask" class="img-fluid">
                              <span class="font_regular">flask</span>
                              <div class="arrrow">
                                <span class="iconify" data-icon="ic:sharp-keyboard-arrow-down"></span>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div class="panel active" id="panel_one">
                          <div class="card_container">
                            <a href="#" class="nested_card">
                              <div class="nested_card_img">
                                <img src="img/patient_facility.png" alt="patient facility" class="img-fluid">
                              </div>
                              <div class="nested_card_content">
                                <h3 class="font_regular">patient facility</h3>
                                <p class="font_small">MPUH provides a variety of amenities for a seamless and comfortable experience for patients as well as their caregivers.</p>
                              </div>
                            </a>
                            <a href="#" class="nested_card">
                              <div class="nested_card_img">
                                <img src="img/health_checkup.png" alt="health checkup" class="img-fluid">
                              </div>
                              <div class="nested_card_content">
                                <h3 class="font_regular">health checkup</h3>
                                <p class="font_small">We offer complete health check ups at affordable prices under different packages. Explore to see what works for you.</p>
                              </div>
                            </a>
                            <a href="#" class="nested_card">
                              <div class="nested_card_img">
                                <img src="img/cashless.png" alt="cashless hospitalisation" class="img-fluid">
                              </div>
                              <div class="nested_card_content">
                                <h3 class="font_regular">cashless hospitalisation</h3>
                                <p class="font_small">Take advantage of our tie-ups with leading insurance providers and public sector companies. Check the full list here.</p>
                              </div>
                            </a>
                            <a href="#" class="nested_card">
                              <div class="nested_card_img">
                                <img src="img/hospitalization.png" alt="hospitalisation options" class="img-fluid">
                              </div>
                              <div class="nested_card_content">
                                <h3 class="font_regular">hospitalisation options</h3>
                                <p class="font_small">We offer different types of rooms with complete facilities to suit different preferences. Explore your options here.</p>
                              </div>
                            </a>
                          </div>
                        </div>

                        <div class="panel" id="panel_two">
                          <div class="card_container">
                            <a href="#" class="nested_card">
                              <div class="nested_card_img">
                                <img src="img/patient_facility.png" alt="patient facility" class="img-fluid">
                              </div>
                              <div class="nested_card_content">
                                <h3 class="font_regular">patient facility</h3>
                                <p class="font_small">MPUH provides a variety of amenities for a seamless and comfortable experience for patients as well as their caregivers.</p>
                              </div>
                            </a>
                            <a href="#" class="nested_card">
                              <div class="nested_card_img">
                                <img src="img/health_checkup.png" alt="health checkup" class="img-fluid">
                              </div>
                              <div class="nested_card_content">
                                <h3 class="font_regular">health checkup</h3>
                                <p class="font_small">We offer complete health check ups at affordable prices under different packages. Explore to see what works for you.</p>
                              </div>
                            </a>
                            <a href="#" class="nested_card">
                              <div class="nested_card_img">
                                <img src="img/cashless.png" alt="cashless hospitalisation" class="img-fluid">
                              </div>
                              <div class="nested_card_content">
                                <h3 class="font_regular">cashless hospitalisation</h3>
                                <p class="font_small">Take advantage of our tie-ups with leading insurance providers and public sector companies. Check the full list here.</p>
                              </div>
                            </a>
                            <a href="#" class="nested_card">
                              <div class="nested_card_img">
                                <img src="img/hospitalization.png" alt="hospitalisation options" class="img-fluid">
                              </div>
                              <div class="nested_card_content">
                                <h3 class="font_regular">hospitalisation options</h3>
                                <p class="font_small">We offer different types of rooms with complete facilities to suit different preferences. Explore your options here.</p>
                              </div>
                            </a>
                          </div>
                        </div>

                        <div class="panel" id="panel_three">
                          <div class="card_container">
                            <a href="#" class="nested_card">
                              <div class="nested_card_img">
                                <img src="img/kidneys.png" alt="urology" class="img-fluid">
                              </div>
                              <div class="nested_card_content">
                                <h3 class="font_regular">urology</h3>
                                <p class="font_small">Our hospital features some of the most exceptional urologists in the nation, who ensure precise diagnosis and appropriate treatment plans for our patients.</p>
                              </div>
                            </a>
                            <a href="#" class="nested_card">
                              <div class="nested_card_img">
                                <img src="img/nephrology.png" alt="Nephrology" class="img-fluid">
                              </div>
                              <div class="nested_card_content">
                                <h3 class="font_regular">Nephrology</h3>
                                <p class="font_small">The Department of Nephrology has a team of Senior Consultants who have extensive experience in the management and treatment of Renal Disorders</p>
                              </div>
                            </a>
                            <a href="#" class="nested_card">
                              <div class="nested_card_img">
                                <img src="img/anesthesia.png" alt="anesthesia" class="img-fluid">
                              </div>
                              <div class="nested_card_content">
                                <h3 class="font_regular">anesthesia</h3>
                                <p class="font_small">We have a dedicated team of expert anaesthesiologists who are available to provide support for every surgery</p>
                              </div>
                            </a>
                            <a href="#" class="nested_card">
                              <div class="nested_card_img">
                                <img src="img/pathology.png" alt="pathology" class="img-fluid">
                              </div>
                              <div class="nested_card_content">
                                <h3 class="font_regular">pathology</h3>
                                <p class="font_small">Our pathology laboratory is well-equipped with state-of-the-art equipment capable of conducting a comprehensive range of tests at reasonable rates.</p>
                              </div>
                            </a>
                          </div>
                        </div>

                        <div class="panel" id="panel_four">
                          <div class="card_container">
                            <a href="#" class="nested_card">
                              <div class="nested_card_img">
                                <img src="img/patient_facility.png" alt="patient facility" class="img-fluid">
                              </div>
                              <div class="nested_card_content">
                                <h3 class="font_regular">patient facility</h3>
                                <p class="font_small">MPUH provides a variety of amenities for a seamless and comfortable experience for patients as well as their caregivers.</p>
                              </div>
                            </a>
                            <a href="#" class="nested_card">
                              <div class="nested_card_img">
                                <img src="img/health_checkup.png" alt="health checkup" class="img-fluid">
                              </div>
                              <div class="nested_card_content">
                                <h3 class="font_regular">health checkup</h3>
                                <p class="font_small">We offer complete health check ups at affordable prices under different packages. Explore to see what works for you.</p>
                              </div>
                            </a>
                            <a href="#" class="nested_card">
                              <div class="nested_card_img">
                                <img src="img/cashless.png" alt="cashless hospitalisation" class="img-fluid">
                              </div>
                              <div class="nested_card_content">
                                <h3 class="font_regular">cashless hospitalisation</h3>
                                <p class="font_small">Take advantage of our tie-ups with leading insurance providers and public sector companies. Check the full list here.</p>
                              </div>
                            </a>
                            <a href="#" class="nested_card">
                              <div class="nested_card_img">
                                <img src="img/hospitalization.png" alt="hospitalisation options" class="img-fluid">
                              </div>
                              <div class="nested_card_content">
                                <h3 class="font_regular">hospitalisation options</h3>
                                <p class="font_small">We offer different types of rooms with complete facilities to suit different preferences. Explore your options here.</p>
                              </div>
                            </a>
                          </div>
                        </div>

                        <div class="panel" id="panel_five">
                          <div class="card_container">
                            <a href="#" class="nested_card">
                              <div class="nested_card_img">
                                <img src="img/patient_facility.png" alt="patient facility" class="img-fluid">
                              </div>
                              <div class="nested_card_content">
                                <h3 class="font_regular">patient facility</h3>
                                <p class="font_small">MPUH provides a variety of amenities for a seamless and comfortable experience for patients as well as their caregivers.</p>
                              </div>
                            </a>
                            <a href="#" class="nested_card">
                              <div class="nested_card_img">
                                <img src="img/health_checkup.png" alt="health checkup" class="img-fluid">
                              </div>
                              <div class="nested_card_content">
                                <h3 class="font_regular">health checkup</h3>
                                <p class="font_small">We offer complete health check ups at affordable prices under different packages. Explore to see what works for you.</p>
                              </div>
                            </a>
                            <a href="#" class="nested_card">
                              <div class="nested_card_img">
                                <img src="img/cashless.png" alt="cashless hospitalisation" class="img-fluid">
                              </div>
                              <div class="nested_card_content">
                                <h3 class="font_regular">cashless hospitalisation</h3>
                                <p class="font_small">Take advantage of our tie-ups with leading insurance providers and public sector companies. Check the full list here.</p>
                              </div>
                            </a>
                            <a href="#" class="nested_card">
                              <div class="nested_card_img">
                                <img src="img/hospitalization.png" alt="hospitalisation options" class="img-fluid">
                              </div>
                              <div class="nested_card_content">
                                <h3 class="font_regular">hospitalisation options</h3>
                                <p class="font_small">We offer different types of rooms with complete facilities to suit different preferences. Explore your options here.</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nav_link">
                    <a href="#">
                      <span>Doctors</span>
                    </a>
                  </li>
                  <li class="has_dropdown nav_link">
                    <a href="javascript:void(0)">
                      <span>About Us</span>
                      <span class="iconify" data-icon="uil:angle-down"></span>
                    </a>
                    <div class="dropdown_child">
                      <div class="without_tab_sublinks">
                        <div class="card_container">
                          <a href="#" class="nested_card">
                            <div class="nested_card_content">
                              <h3 class="font_regular">about <span class="uppercase_name">muph</span></h3>
                              <p class="font_small">Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
                            </div>
                          </a>
                          <a href="#" class="nested_card">
                            <div class="nested_card_content">
                              <h3 class="font_regular">history</h3>
                              <p class="font_small">Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
                            </div>
                          </a>
                          <a href="#" class="nested_card">
                            <div class="nested_card_content">
                              <h3 class="font_regular">our achievements</h3>
                              <p class="font_small">Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
                            </div>
                          </a>
                          <a href="#" class="nested_card">
                            <div class="nested_card_content">
                              <h3 class="font_regular">our team</h3>
                              <p class="font_small">Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="has_dropdown nav_link more_nav_link">
                    <a href="#">
                      <span>More</span>
                      <span class="iconify" data-icon="uil:angle-down"></span>
                    </a>
                    <div class="dropdown_child">
                      <div class="dropdown_tabs">
                        <div class="tab_links">
                          <ul>
                            <li class="active" rel="panel_six">
                              <img src="img/book.png" alt="academics" class="img-fluid">
                              <span class="font_regular">academics</span>
                              <div class="arrrow">
                                <span class="iconify" data-icon="ic:sharp-keyboard-arrow-down"></span>
                              </div>
                            </li>
                            <li rel="panel_seven">
                              <img src="img/stethoscope.png" alt="DNB Residency Program" class="img-fluid">
                              <span class="font_regular">DNB Residency Program</span>
                              <div class="arrrow">
                                <span class="iconify" data-icon="ic:sharp-keyboard-arrow-down"></span>
                              </div>
                            </li>
                            <li>
                              <a href="index.html">
                                <img src="img/newspaper.png" alt="News & Media" class="img-fluid">
                                <span class="font_regular">News & Media</span>
                              </a>
                            </li>
                            <li>
                              <a href="index.html">
                                <img src="img/blog.png" alt="Blog" class="img-fluid">
                                <span class="font_regular">Blog</span>
                              </a>
                            </li>
                            <li>
                              <a href="index.html">
                                <img src="img/recruitment.png" alt="careers" class="img-fluid">
                                <span class="font_regular">careers</span>
                              </a>
                            </li>
                            <li>
                              <a href="index.html">
                                <img src="img/email.png" alt="Contact Us" class="img-fluid">
                                <span class="font_regular">Contact Us</span>
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div class="panel active" id="panel_six">
                          <div class="card_container">
                            <a href="#" class="nested_card">
                              <!-- <div class="nested_card_img">
                                <img src="img/patient_facility.png" alt="patient facility" class="img-fluid">
                              </div> -->
                              <div class="nested_card_content">
                                <h3 class="font_regular">about <span class="uppercase_name">jpac</span></h3>
                                <p class="font_small">Our academic centre offers a range of workshops and training programmes conducted by leading national and international faculty.</p>
                              </div>
                            </a>
                            <a href="#" class="nested_card">
                              <!-- <div class="nested_card_img">
                                <img src="img/health_checkup.png" alt="health checkup" class="img-fluid">
                              </div> -->
                              <div class="nested_card_content">
                                <h3 class="font_regular">upcoming courses</h3>
                                <p class="font_small">Explore the details of our upcoming programmes at JPAC and apply</p>
                              </div>
                            </a>
                          </div>
                        </div>

                        <div class="panel" id="panel_seven">
                          <div class="card_container">
                            <a href="#" class="nested_card">
                              <div class="nested_card_img">
                                <img src="img/fellowships.png" alt="fellowships" class="img-fluid">
                              </div>
                              <div class="nested_card_content">
                                <h3 class="font_regular">fellowships</h3>
                                <p class="font_small">Be a part of cutting-edge research under the brightest mentors in urology and nephrology. Apply to us.</p>
                              </div>
                            </a>
                            <a href="upcomingEvents.html" class="nested_card">
                              <div class="nested_card_img">
                                <img src="img/events.png" alt="Events" class="img-fluid">
                              </div>
                              <div class="nested_card_content">
                                <h3 class="font_regular">Events</h3>
                                <p class="font_small">We organise several events and workshops throughout the year for better learning & exposure. Explore here.</p>
                              </div>
                            </a>
                            <a href="#" class="nested_card">
                              <div class="nested_card_img">
                                <img src="img/faculty.png" alt="Meet our faculty" class="img-fluid">
                              </div>
                              <div class="nested_card_content">
                                <h3 class="font_regular">Meet our faculty</h3>
                                <p class="font_small">Explore our internationally acclaimed faculty and their diverse areas of expertise.</p>
                              </div>
                            </a>
                            <a href="gallery.html" class="nested_card">
                              <div class="nested_card_img">
                                <img src="img/gallery.png" alt="Gallery" class="img-fluid">
                              </div>
                              <div class="nested_card_content">
                                <h3 class="font_regular">Gallery</h3>
                                <p class="font_small">Browse through highlights of our significant events to gain a better understanding of our organisation.</p>
                              </div>
                            </a>
                            <a href="#" class="nested_card">
                              <div class="nested_card_img">
                                <img src="img/testimonial-icon.png" alt="Testimonials" class="img-fluid">
                              </div>
                              <div class="nested_card_content">
                                <h3 class="font_regular">Testimonials</h3>
                                <p class="font_small">Check out the experiences shared by past residents & know what to expect.</p>
                              </div>
                            </a>
                            <a href="publication.html" class="nested_card">
                              <div class="nested_card_img">
                                <img src="img/publications.png" alt="publications" class="img-fluid">
                              </div>
                              <div class="nested_card_content">
                                <h3 class="font_regular">publications</h3>
                                <p class="font_small">Access our library of various proprietary publications resulting from years of research.</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
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
