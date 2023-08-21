$(document).ready(function () {

  // Header Component
  class MyHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <header>
    <div class="mobile_top_header">
      <p class="hospital_name">Muljibhai Patel Urological Hospital</p>
      <div class="sub_menu">
        <span class="iconify" data-icon="carbon:overflow-menu-vertical"></span>
      </div>
    </div>
    <div class="top_header">
      <div class="content_container top_header_context">
        <div class="left_top_header">
          <div class="contact_txt">
            <span class="iconify" data-icon="fluent:call-end-24-regular" data-rotate="270deg"></span>
            <span><a href="tel:1800-121-3637">1800-121-3637</a><span class="line">|</span><a
                href="tel:+91 268 2520323">+91 268 2520323</a></span>
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

          <div class="brochure_txt mobile_online_pay">
            <a href="#">
              <span>Pay Online</span>
              <span class="iconify" data-icon="uil:angle-right"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="main_header">
      <div class="content_container main_header_flex">
        <div class="left_main_header">
          <a href="index.html" class="logo_area">
            <img src="img/logo.png" alt="Logo" />
            <p>Muljibhai Patel<br />Urological Hospital</p>
          </a>
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
                    <div class="dropdown_tabs our_expertise_tab">
                      <div class="tab_links">
                        <ul>
                          <li class="active" rel="panel_one">
                            <img src="img/kidney.png" alt="kidney" class="img-fluid">
                            <span class="font_regular">kidney diseases</span>
                            <div class="arrrow">
                              <span class="iconify" data-icon="ic:sharp-keyboard-arrow-down"></span>
                            </div>
                          </li>
                          <li href="#">
                            <a href="treatmentoptions.html">
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
                            <a href="research.html">
                              <img src="img/flask.png" alt="flask" class="img-fluid">
                              <span class="font_regular">research</span>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div class="panel active" id="panel_one">
                        <div class="card_container">
                          <a href="#" class="nested_card">
                            <div class="nested_card_img">
                              <img src="img/kidneys.png" alt="patient facility" class="img-fluid">
                            </div>
                            <div class="nested_card_content">
                              <h3 class="font_regular">Diseases</h3>
                              <p class="font_small">Urology is the branch of medicine dealing with the diseases related
                                to Kidney, Urinary Bladder, Prostate gland.</p>
                            </div>
                          </a>
                          <a href="#" class="nested_card">
                            <div class="nested_card_img">
                              <img src="img/nephrology.png" alt="health checkup" class="img-fluid">
                            </div>
                            <div class="nested_card_content">
                              <h3 class="font_regular">Case Studies</h3>
                              <p class="font_small">At MPUH Hospital, Ahmedabad Department of Nephrology (Department of
                                Kidney / Renal disease management) </p>
                            </div>
                          </a>
                          <a href="#" class="nested_card">
                            <div class="nested_card_img">
                              <img src="img/anesthesia.png" alt="cashless hospitalisation" class="img-fluid">
                            </div>
                            <div class="nested_card_content">
                              <h3 class="font_regular">Caring for your kidneys</h3>
                              <p class="font_small">Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
                            </div>
                          </a>
                          <a href="#" class="nested_card">
                            <div class="nested_card_img">
                              <img src="img/pathology.png" alt="hospitalisation options" class="img-fluid">
                            </div>
                            <div class="nested_card_content">
                              <h3 class="font_regular">Patient Testimonials</h3>
                              <p class="font_small">Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
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
                              <p class="font_small">MPUH provides a variety of amenities for a seamless and comfortable
                                experience for patients as well as their caregivers.</p>
                            </div>
                          </a>
                          <a href="#" class="nested_card">
                            <div class="nested_card_img">
                              <img src="img/health_checkup.png" alt="health checkup" class="img-fluid">
                            </div>
                            <div class="nested_card_content">
                              <h3 class="font_regular">health checkup</h3>
                              <p class="font_small">We offer complete health check ups at affordable prices under
                                different packages. Explore to see what works for you.</p>
                            </div>
                          </a>
                          <a href="#" class="nested_card">
                            <div class="nested_card_img">
                              <img src="img/cashless.png" alt="cashless hospitalisation" class="img-fluid">
                            </div>
                            <div class="nested_card_content">
                              <h3 class="font_regular">cashless hospitalisation</h3>
                              <p class="font_small">Take advantage of our tie-ups with leading insurance providers and
                                public sector companies. Check the full list here.</p>
                            </div>
                          </a>
                          <a href="#" class="nested_card">
                            <div class="nested_card_img">
                              <img src="img/hospitalization.png" alt="hospitalisation options" class="img-fluid">
                            </div>
                            <div class="nested_card_content">
                              <h3 class="font_regular">hospitalisation options</h3>
                              <p class="font_small">We offer different types of rooms with complete facilities to suit
                                different preferences. Explore your options here.</p>
                            </div>
                          </a>
                        </div>
                      </div>

                      <div class="panel" id="panel_three">
                        <div class="card_container">
                          <a href="urology.html" class="nested_card">
                            <div class="nested_card_img">
                              <img src="img/kidneys.png" alt="urology" class="img-fluid">
                            </div>
                            <div class="nested_card_content">
                              <h3 class="font_regular">urology</h3>
                              <p class="font_small">Our hospital features some of the most exceptional urologists in the
                                nation, who ensure precise diagnosis and appropriate treatment plans for our patients.
                              </p>
                            </div>
                          </a>
                          <a href="nephrology.html" class="nested_card">
                            <div class="nested_card_img">
                              <img src="img/nephrology.png" alt="Nephrology" class="img-fluid">
                            </div>
                            <div class="nested_card_content">
                              <h3 class="font_regular">Nephrology</h3>
                              <p class="font_small">The Department of Nephrology has a team of Senior Consultants who
                                have extensive experience in the management and treatment of Renal Disorders</p>
                            </div>
                          </a>
                          <a href="anaesthesia.html" class="nested_card">
                            <div class="nested_card_img">
                              <img src="img/anesthesia.png" alt="anesthesia" class="img-fluid">
                            </div>
                            <div class="nested_card_content">
                              <h3 class="font_regular">anesthesia</h3>
                              <p class="font_small">We have a dedicated team of expert anaesthesiologists who are
                                available to provide support for every surgery</p>
                            </div>
                          </a>
                          <a href="pathology.html" class="nested_card">
                            <div class="nested_card_img">
                              <img src="img/pathology.png" alt="pathology" class="img-fluid">
                            </div>
                            <div class="nested_card_content">
                              <h3 class="font_regular">pathology</h3>
                              <p class="font_small">Our pathology laboratory is well-equipped with state-of-the-art
                                equipment capable of conducting a comprehensive range of tests at reasonable rates.</p>
                            </div>
                          </a>
                        </div>
                        <div class="readMoreSpecialities">
                          <a href="specialities.html" class="blue_btn">
                            <span class="font_small">Read More</span>
                            <span class="iconify" data-icon="prime:angle-right"></span>
                          </a>
                        </div>
                      </div>

                      <div class="panel" id="panel_four">
                        <div class="card_container">
                          <a href="patientfacility.html" class="nested_card">
                            <div class="nested_card_img">
                              <img src="img/patient_facility.png" alt="patient facility" class="img-fluid">
                            </div>
                            <div class="nested_card_content">
                              <h3 class="font_regular">patient facility</h3>
                              <p class="font_small">MPUH provides a variety of amenities for a seamless and comfortable
                                experience for patients as well as their caregivers.</p>
                            </div>
                          </a>
                          <a href="healthcheckup.html" class="nested_card">
                            <div class="nested_card_img">
                              <img src="img/health_checkup.png" alt="health checkup" class="img-fluid">
                            </div>
                            <div class="nested_card_content">
                              <h3 class="font_regular">health checkup</h3>
                              <p class="font_small">We offer complete health check ups at affordable prices under
                                different packages. Explore to see what works for you.</p>
                            </div>
                          </a>
                          <a href="cashlesshospitalisation.html" class="nested_card">
                            <div class="nested_card_img">
                              <img src="img/cashless.png" alt="cashless hospitalisation" class="img-fluid">
                            </div>
                            <div class="nested_card_content">
                              <h3 class="font_regular">cashless hospitalisation</h3>
                              <p class="font_small">Take advantage of our tie-ups with leading insurance providers and
                                public sector companies. Check the full list here.</p>
                            </div>
                          </a>
                          <a href="hospitalisationoption.html" class="nested_card">
                            <div class="nested_card_img">
                              <img src="img/hospitalization.png" alt="hospitalisation options" class="img-fluid">
                            </div>
                            <div class="nested_card_content">
                              <h3 class="font_regular">hospitalisation options</h3>
                              <p class="font_small">We offer different types of rooms with complete facilities to suit
                                different preferences. Explore your options here.</p>
                            </div>
                          </a>
                        </div>
                      </div>

                      <div class="panel" id="panel_five">
                        <div class="card_container">
                          <a href="patientfacility.html" class="nested_card">
                            <div class="nested_card_img">
                              <img src="img/patient_facility.png" alt="patient facility" class="img-fluid">
                            </div>
                            <div class="nested_card_content">
                              <h3 class="font_regular">patient facility</h3>
                              <p class="font_small">MPUH provides a variety of amenities for a seamless and comfortable
                                experience for patients as well as their caregivers.</p>
                            </div>
                          </a>
                          <a href="healthcheckup.html" class="nested_card">
                            <div class="nested_card_img">
                              <img src="img/health_checkup.png" alt="health checkup" class="img-fluid">
                            </div>
                            <div class="nested_card_content">
                              <h3 class="font_regular">health checkup</h3>
                              <p class="font_small">We offer complete health check ups at affordable prices under
                                different packages. Explore to see what works for you.</p>
                            </div>
                          </a>
                          <a href="cashlesshospitalisation.html" class="nested_card">
                            <div class="nested_card_img">
                              <img src="img/cashless.png" alt="cashless hospitalisation" class="img-fluid">
                            </div>
                            <div class="nested_card_content">
                              <h3 class="font_regular">cashless hospitalisation</h3>
                              <p class="font_small">Take advantage of our tie-ups with leading insurance providers and
                                public sector companies. Check the full list here.</p>
                            </div>
                          </a>
                          <a href="hospitalisationoption.html" class="nested_card">
                            <div class="nested_card_img">
                              <img src="img/hospitalization.png" alt="hospitalisation options" class="img-fluid">
                            </div>
                            <div class="nested_card_content">
                              <h3 class="font_regular">hospitalisation options</h3>
                              <p class="font_small">We offer different types of rooms with complete facilities to suit
                                different preferences. Explore your options here.</p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav_link">
                  <a href="meetourdoctor.html">
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
                        <a href="aboutmpuh.html" class="nested_card">
                          <div class="nested_card_content">
                            <h3 class="font_regular">about <span class="uppercase_name">muph</span></h3>
                            <p class="font_small">Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
                          </div>
                        </a>
                        <a href="historyAndNews.html" class="nested_card">
                          <div class="nested_card_content">
                            <h3 class="font_regular">history</h3>
                            <p class="font_small">Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
                          </div>
                        </a>
                        <a href="achievements.html" class="nested_card">
                          <div class="nested_card_content">
                            <h3 class="font_regular">our achievements</h3>
                            <p class="font_small">Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
                          </div>
                        </a>
                        <a href="ourteam.html" class="nested_card">
                          <div class="nested_card_content">
                            <h3 class="font_regular">our team</h3>
                            <p class="font_small">Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
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
                    <div class="dropdown_tabs more_link_tab">
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
                            <a href="newsandmedia.html">
                              <img src="img/newspaper.png" alt="News & Media" class="img-fluid">
                              <span class="font_regular">News & Media</span>
                            </a>
                          </li>
                          <li>
                            <a href="blog.html">
                              <img src="img/blog.png" alt="Blog" class="img-fluid">
                              <span class="font_regular">Blog</span>
                            </a>
                          </li>
                          <li>
                            <a href="careers.html">
                              <img src="img/recruitment.png" alt="careers" class="img-fluid">
                              <span class="font_regular">careers</span>
                            </a>
                          </li>
                          <li>
                            <a href="contactus.html">
                              <img src="img/email.png" alt="Contact Us" class="img-fluid">
                              <span class="font_regular">Contact Us</span>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div class="panel active" id="panel_six">
                        <div class="card_container">
                          <a href="aboutjpac.html" class="nested_card">

                            <div class="nested_card_content">
                              <h3 class="font_regular">about <span class="uppercase_name">jpac</span></h3>
                              <p class="font_small">Our academic centre offers a range of workshops and training
                                programmes conducted by leading national and international faculty.</p>
                            </div>
                          </a>
                          <a href="upcomingCourse.html" class="nested_card">

                            <div class="nested_card_content">
                              <h3 class="font_regular">upcoming courses</h3>
                              <p class="font_small">Explore the details of our upcoming programmes at JPAC and apply</p>
                            </div>
                          </a>
                        </div>
                      </div>

                      <div class="panel" id="panel_seven">
                        <div class="card_container">
                          <a href="fellowships.html" class="nested_card">
                            <div class="nested_card_img">
                              <img src="img/fellowships.png" alt="fellowships" class="img-fluid">
                            </div>
                            <div class="nested_card_content">
                              <h3 class="font_regular">fellowships</h3>
                              <p class="font_small">Be a part of cutting-edge research under the brightest mentors in
                                urology and nephrology. Apply to us.</p>
                            </div>
                          </a>
                          <a href="upcomingEvents.html" class="nested_card">
                            <div class="nested_card_img">
                              <img src="img/events.png" alt="Events" class="img-fluid">
                            </div>
                            <div class="nested_card_content">
                              <h3 class="font_regular">Events</h3>
                              <p class="font_small">We organise several events and workshops throughout the year for
                                better learning & exposure. Explore here.</p>
                            </div>
                          </a>
                          <a href="meetourdoctor.html" class="nested_card">
                            <div class="nested_card_img">
                              <img src="img/faculty.png" alt="Meet our faculty" class="img-fluid">
                            </div>
                            <div class="nested_card_content">
                              <h3 class="font_regular">Meet our faculty</h3>
                              <p class="font_small">Explore our internationally acclaimed faculty and their diverse
                                areas of expertise.</p>
                            </div>
                          </a>
                          <a href="gallery.html" class="nested_card">
                            <div class="nested_card_img">
                              <img src="img/gallery.png" alt="Gallery" class="img-fluid">
                            </div>
                            <div class="nested_card_content">
                              <h3 class="font_regular">Gallery</h3>
                              <p class="font_small">Browse through highlights of our significant events to gain a better
                                understanding of our organisation.</p>
                            </div>
                          </a>
                          <a href="testimonials.html" class="nested_card">
                            <div class="nested_card_img">
                              <img src="img/testimonial-icon.png" alt="Testimonials" class="img-fluid">
                            </div>
                            <div class="nested_card_content">
                              <h3 class="font_regular">Testimonials</h3>
                              <p class="font_small">Check out the experiences shared by past residents & know what to
                                expect.</p>
                            </div>
                          </a>
                          <a href="publication.html" class="nested_card">
                            <div class="nested_card_img">
                              <img src="img/publications.png" alt="publications" class="img-fluid">
                            </div>
                            <div class="nested_card_content">
                              <h3 class="font_regular">publications</h3>
                              <p class="font_small">Access our library of various proprietary publications resulting
                                from years of research.</p>
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
            <div class="payonline_box">
              <a href="#">
                <span>Pay online</span>
                <span class="iconify" data-icon="uil:angle-right"></span>
              </a>
            </div>
            <div class="donate_box">
              <a href="donation.html">
                <span>Donate</span>
                <span class="iconify" data-icon="uil:angle-right"></span>
              </a>
            </div>
          </div>
          <div class="hambuger">
            <span class="iconify" data-icon="ic:outline-menu"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile_menu">
      <a href="index.html" class="logo_area">
        <img src="img/logo.png" alt="Logo" />
        <p>Muljibhai Patel<br />Urological Hospital</p>
      </a>
      <div id="accordion">
        <div class="card">
          <div class="card-header" id="heading-1">
            <h5 class="mb-0">
              <a role="button" class="collapsed" data-toggle="collapse" href="#collapse-1" aria-expanded="true"
                aria-controls="collapse-1">
                Our Expertise
              </a>
            </h5>
          </div>
          <div id="collapse-1" class="collapse" data-parent="#accordion" aria-labelledby="heading-1">
            <div class="card-body">
              <div id="accordion-1">
                <div class="card">
                  <div class="card-header" id="heading-1-1">
                    <h5 class="mb-0">
                      <a class="collapsed" role="button" data-toggle="collapse" href="#collapse-1-1"
                        aria-expanded="false" aria-controls="collapse-1-1">
                        Kidney Diseases
                      </a>
                    </h5>
                  </div>
                  <div id="collapse-1-1" class="collapse" data-parent="#accordion-1" aria-labelledby="heading-1-1">
                    <div class="card-body">
                      <ul>
                        <li><a href="">Diseases</a></li>
                        <li><a href="">Case Studies</a></li>
                        <li><a href="">Caring for your kidneys</a></li>
                        <li><a href="">Patient Testimonials</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="heading-1-2">
                    <h5 class="mb-0">
                      <a class="no_collapse" href="treatmentoptions.html">
                        Treatment Options
                      </a>
                    </h5>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="heading-1-3">
                    <h5 class="mb-0">
                      <a class="collapsed" role="button" data-toggle="collapse" href="#collapse-1-3"
                        aria-expanded="false" aria-controls="collapse-1-3">
                        Specialities
                      </a>
                    </h5>
                  </div>
                  <div id="collapse-1-3" class="collapse" data-parent="#accordion-1" aria-labelledby="heading-1-3">
                    <div class="card-body">
                      <ul>
                        <li><a href="">Urology</a></li>
                        <li><a href="">Nephrology</a></li>
                        <li><a href="">Anesthesia</a></li>
                        <li><a href="">Pathology</a></li>
                        <li><a href="">Radiology</a></li>
                        <li><a href="">Physiotherapy</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="heading-1-4">
                    <h5 class="mb-0">
                      <a class="collapsed" role="button" data-toggle="collapse" href="#collapse-1-4"
                        aria-expanded="false" aria-controls="collapse-1-4">
                        Patient Facilities
                      </a>
                    </h5>
                  </div>
                  <div id="collapse-1-4" class="collapse" data-parent="#accordion-1" aria-labelledby="heading-1-4">
                    <div class="card-body">
                      <ul>
                        <li><a href="">Patient Facilities</a></li>
                        <li><a href="">Health Check up</a></li>
                        <li><a href="">Cashless Hospitalisation</a></li>
                        <li><a href="">Hospitalisation Options</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="heading-2">
            <h5 class="mb-0">
              <a class="no_collapse" href="doctors.html">
                Doctors
              </a>
            </h5>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="heading-3">
            <h5 class="mb-0">
              <a class="collapsed" role="button" data-toggle="collapse" href="#collapse-3" aria-expanded="false"
                aria-controls="collapse-3">
                About Us
              </a>
            </h5>
          </div>
          <div id="collapse-3" class="collapse" data-parent="#accordion" aria-labelledby="heading-3">
            <div class="card-body">
              <ul>
                <li><a href="">About MUPH</a></li>
                <li><a href="">History</a></li>
                <li><a href="">Our Achievements</a></li>
                <li><a href="">Our Team</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="heading-4">
            <h5 class="mb-0">
              <a class="collapsed" role="button" data-toggle="collapse" href="#collapse-4" aria-expanded="false"
                aria-controls="collapse-4">
                More
              </a>
            </h5>
          </div>
          <div id="collapse-4" class="collapse" data-parent="#accordion" aria-labelledby="heading-4">
            <div class="card-body">
              <div id="accordion-4">
                <div class="card">
                  <div class="card-header" id="heading-4-1">
                    <h5 class="mb-0">
                      <a class="collapsed" role="button" data-toggle="collapse" href="#collapse-4-1"
                        aria-expanded="false" aria-controls="collapse-4-1">
                        Academics
                      </a>
                    </h5>
                  </div>
                  <div id="collapse-4-1" class="collapse" data-parent="#accordion-4" aria-labelledby="heading-4-1">
                    <div class="card-body">
                      <ul>
                        <li><a href="">About JPAC</a></li>
                        <li><a href="">Upcoming Courses</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="heading-4-2">
                    <h5 class="mb-0">
                      <a class="collapsed" role="button" data-toggle="collapse" href="#collapse-4-2"
                        aria-expanded="false" aria-controls="collapse-4-2">
                        DNB Residency Program
                      </a>
                    </h5>
                  </div>
                  <div id="collapse-4-2" class="collapse" data-parent="#accordion-4" aria-labelledby="heading-4-2">
                    <div class="card-body">
                      <ul>
                        <li><a href="">Fellowships</a></li>
                        <li><a href="">Events</a></li>
                        <li><a href="">Meet Our Faculty</a></li>
                        <li><a href="">Gallery</a></li>
                        <li><a href="">Testimonials</a></li>
                        <li><a href="">Publications</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header" id="heading-4-3">
                    <h5 class="mb-0">
                      <a class="no_collapse" href="treatmentoptions.html">
                        News & Media
                      </a>
                    </h5>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header" id="heading-4-4">
                    <h5 class="mb-0">
                      <a class="no_collapse" href="blog.html">
                        Blog
                      </a>
                    </h5>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header" id="heading-4-5">
                    <h5 class="mb-0">
                      <a class="no_collapse" href="careers.html">
                        Careers
                      </a>
                    </h5>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="heading-4-5">
                    <h5 class="mb-0">
                      <a class="no_collapse" href="contactus.html">
                        Contact Us
                      </a>
                    </h5>
                  </div>
                </div>
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
        <div class="content_container footer_content">
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
              <div class="col-lg-9 col-md-12 col-12">
                <div class="row p-0">
                  <div class="col-lg-3 col-md-4 col-6 p-0">
                    <div class="footer_bottom_col">
                      <div class="bottom_footer_heading">
                        <h3>About Us</h3>
                      </div>
                      <div class="bottom_footer_links">
                        <ul>
                          <li><a href="#">About MPUH</a></li>
                          <li><a href="historyAndNews.html">History</a></li>
                          <li><a href="achievements.html">Our Achievements</a></li>
                          <li><a href="ourteam.html">Our Team</a></li>
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
                          <li><a href="urology.html">Urology</a></li>
                          <li><a href="nephrology.html">Nephrology</a></li>
                          <li><a href="anaesthesia.html">Anesthesia</a></li>
                          <li><a href="pathology.html">Pathology</a></li>
                          <li><a href="radiology.html">Radiology</a></li>
                          <li><a href="physiotherapy.html">Physiotherapy</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-6 p-0">
                    <div class="footer_bottom_col">
                      <div class="bottom_footer_heading">
                        <h3>Academics</h3>
                      </div>
                      <div class="bottom_footer_links">
                        <ul>
                          <li><a href="aboutjpac.html">About JPAC</a></li>
                          <li><a href="upcomingCourse.html">Upcoming Courses</a></li>
                        </ul>
                      </div>

                      <div class="bottom_footer_heading">
                        <h3>Patient Care</h3>
                      </div>
                      <div class="bottom_footer_links">
                        <ul>
                          <li><a href="patientfacility.html">Patient Facilities</a></li>
                          <li><a href="healthcheckup.html">Health Checkup</a></li>
                          <li><a href="cashlesshospitalisation.html">Cashless Hospitalisation</a></li>
                          <li><a href="hospitalisationoption.html">Hospitalisation Options</a></li>
                          <li><a href="#">Plan your trip</a></li>
                          <li><a href="visitorsinformation.html">Visitor Information</a></li>
                          <li><a href="faq.html">FAQs</a></li>
                          <li><a href="testimonials.html">Patient Testimonials</a></li>
                          <li><a href="#">Pay Online</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-6 p-0">
                    <div class="footer_bottom_col">
                      <div class="bottom_footer_heading">
                        <h3>DNB Residency Program</h3>
                      </div>
                      <div class="bottom_footer_links">
                        <ul>
                          <li><a href="fellowships.html">Fellowships</a></li>
                          <li><a href="upcomingEvents.html">Events</a></li>
                          <li><a href="meetourfaculty.html">Meet our faculty</a></li>
                          <li><a href="gallery.html">Gallery</a></li>
                          <li><a href="testimonials.html">Testimonials</a></li>
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
                  <div class="col-lg-3 col-md-4 col-6 p-0">
                    <div class="footer_bottom_col">
                      <div class="bottom_footer_heading">
                        <h3>Donate</h3>
                      </div>
                      <div class="bottom_footer_links">
                        <ul>
                          <li><a href="treatmentoptions.html">Why Kidney Disease?</a></li>
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
                          <a href="meetourdoctor.html">Doctors</a>
                        </h3>
                      </div>
                      <div class="bottom_footer_heading">
                        <h3>
                          <a href="treatmentoptions.html">Treatment Options</a>
                        </h3>
                      </div>
                      <div class="bottom_footer_heading">
                        <h3>
                          <a href="#">News & Media</a>
                        </h3>
                      </div>
                      <div class="bottom_footer_heading">
                        <h3>
                          <a href="blogs">Blogs</a>
                        </h3>
                      </div>
                      <div class="bottom_footer_heading">
                        <h3>
                          <a href="careers.html">Careers</a>
                        </h3>
                      </div>
                      <div class="bottom_footer_heading">
                        <h3>
                          <a href="contactus.html">Contact Us</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-12 col-12 pr-0 address_area">
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

  $(".owl-carousel.home_banner").owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    nav: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
  });

  $('.testimonial_slider').owlCarousel({
    loop:true,
    margin:10,
    dots: false,
    nav:true,
    items: 1,
    navText: ['<span class="iconify" data-icon="pepicons-pop:angle-left"></span>','<span class="iconify" data-icon="pepicons-pop:angle-right"></span>']
    // autoplay:true,
    // autoplayTimeout:5000,
  })

  $('.meet_doctors_carousel').owlCarousel({
    // stagePadding: 100,
    loop:true,
    margin:30,
    nav:true,
    navText: ['<span class="iconify" data-icon="pepicons-pop:angle-left"></span>','<span class="iconify" data-icon="pepicons-pop:angle-right"></span>'],
    dots: false,
    responsive:{
      0:{
        items: 1.5,
        stagePadding: 0,
        margin: 30,
      },

      480:{
        items: 2.5,
        // stagePadding: 25,
      },
      1000:{
        items: 2.6,
      }
    }
  })

  //Sub menu click to show top navbar
  $('.sub_menu').on('click', function(){
    $('.top_header').toggleClass('add_top_header')
  })

  //Mobile menu toogle
  $('.hambuger').on('click', function(){
    $('.mobile_menu').toggleClass('show_mobile_menu')
  })

  // Navbar dropdown child Tabs
  $(".our_expertise_tab .tab_links ul li").click(function () {
    var panelToShow = $(this).attr("rel");
    // alert(panelToShow)
    $(this).addClass("active").siblings().removeClass("active");

    $(".our_expertise_tab .panel.active").fadeOut(600, function () {
      $(this).removeClass("active");
      $("#" + panelToShow).fadeIn(600, function () {
        $(this).addClass("active");
      });
    });
  });

  $(".more_link_tab .tab_links ul li").click(function () {
    var panelToShow = $(this).attr("rel");
    // alert(panelToShow)
    $(this).addClass("active").siblings().removeClass("active");

    $(".more_link_tab .panel.active").fadeOut(600, function () {
      $(this).removeClass("active");
      $("#" + panelToShow).fadeIn(600, function () {
        $(this).addClass("active");
      });
    });
  });

  // Patient Facility Links
  $('.facility_nav_dropdown').on('click', function(){
    $('.facility_nav_dropdown_links').toggleClass('show');
    $(this).toggleClass('rotate')
  })

  //show child dropdown on click

  $('.has_dropdown a').on('click', function(){
    $(this).siblings('.dropdown_child').toggleClass('show_dropdown').parent().siblings().find('.dropdown_child').removeClass('show_dropdown');
    $(this).parent().toggleClass('active_link').siblings().removeClass('active_link');
    $(this).find('.iconify').toggleClass('rotate_svg').parent().parent().siblings().find('.iconify').removeClass('rotate_svg');
  })

 
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
  
  $(".owl-carousel.timelineMain").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 3,
        nav: true,
      },
      600: {
        items: 5,
        nav: false,
      },
      1000: {
        items: 6,
        nav: true,
        loop: false,
      },
    },
  });
  
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

  $('.history_timeline_area .history_tab_links').owlCarousel({
    loop:false,
    // margin:10,
    nav:true,
    items: 6,
    dots: false,
    navText: ['<span class="iconify" data-icon="prime:angle-left"></span>','<span class="iconify" data-icon="prime:angle-right"></span>'],
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
  })

  $(".history_tab_links .item").click(function () {
    var panelToShow = $(this).attr("rel");
    //alert(panelToShow)
    $(this).addClass("active").parent().siblings().find('.item').removeClass('active');

    console.log($(this).parent().prevAll().addClass('inactive'));
    console.log($(this).parent().removeClass('inactive'));
    console.log($(this).parent().nextAll().removeClass('inactive'));
    // $(this).parent().prev().siblings().find('.item').addClass('inactive');

    $(".history_timeline_area .panel.active").fadeOut(600, function () {
      $(this).removeClass("active");
      $("#" + panelToShow).fadeIn(600, function () {
        $(this).addClass("active");
      });
    });
  });

  $('.our_team_tab_links').owlCarousel({
    loop:false,
    margin: 20,
    nav:false,
    items: 4,
    dots: false,
    navText: ['<span class="iconify" data-icon="prime:angle-left"></span>','<span class="iconify" data-icon="prime:angle-right"></span>'],
    responsive:{
        0:{
            items:1,
            nav:true,
            centerMode: true,
            stagePadding: 50,
        },
        600:{
            items:3,
            nav:true,
        },
        1000:{
            items:4,
            autoplay: false,
            touchDrag: false,
            mouseDrag: false,
            nav: false
        }
    }
  })

  $(".our_team_tab_links .item").click(function () {
    var panelToShow = $(this).attr("rel");
    $(this).addClass("active").parent().siblings().find('.item').removeClass('active');

    $(".our_team_tabs .our_team_panel.active").fadeOut(600, function () {
      $(this).removeClass("active");
      $("#" + panelToShow).fadeIn(600, function () {
        $(this).addClass("active");
      });
    });
  });

  $('.support_carousel').owlCarousel({
    loop:false,
    margin: 5,
    nav:false,
    responsive:{
        0:{
            items:2,
            loop:true,
        },
        600:{
            items:3,
            loop:true,
        },
        1000:{
            items:4
        }
    }
})


$('select').selectpicker();
});

let doctor_list = [{
  name: "Dr Mahesh R. Desai",
  department: "urology",
  certification: "MS.FRCS.FRCS.FACS",
  designation: "Managing Trustee & Senior Consultant",
  email: "mrdesai@mpuh.org",
  desc: "<li>Dr.B.C. Roy National Award</li><li>Life time achievement award-Endourology Society</li><li>Former president USI and WES</li><li>Ranked among world's top 10 Urologists <br> (Expertscape, USA) 2018</li><li>Among top 2% Global Scientists for publications <br> (Stanford University)</li>"
}, {
  name: "Mr. Hemant P. Jain",
  designation: "Jt. Managing Director",
  desc: "Leads Company’s marketing functionsBeing an avid traveller and field person, he keeps a keen eye on the latest trends ininternational fashionResponsible for end to end business of Killer, Easies and Desi Belle brandsOverlooks Company’s retail businessTrustee of Jatnobai Karmchandji Ratanparia Chauhan Charitable Trust"
}, {
  name: "Mr. Dinesh P. Jain",
  designation: "Whole Time Director",
  desc: "Heads Company’s manufacturing operationsSpecialises in production and human resource functionsResponsible for ensuring optimum utilisation of the Company’s production facilities at itsunits at Dadar,Goregaon, Daman and VapiTrustee of Jatnobai Karmchandji Ratanparia Chauhan Charitable Trust"
}, {
  name: "Mr. Vikas P. Jain",
  designation: "Whole Time Director",
  desc: "Heads the Company’s operations and distribution functionsResponsible for end to end business of Lawman and Integriti brandsOverseas Company’s retail businessSpearheads the lifestyle accessories business under the brand ‘Addictions’Travels extensively and scouts for new technologies in garment manufacturingTrustee of Jatnobai Karmchandji Ratanparia Chauhan Charitable Trust"
}, {
  name: "Dr. Prakash A. Mody",
  designation: "Independent Director",
  desc: "Chairman and Managing Director of Unichem Laboratories LimitedDoctorate in Organic Chemistry from University of Mumbai. Pursued Marketing Management fromJamnalal BajajInstitute of Management Studies, University of Mumbai and is a graduate alumnus of theHarvard Business Schoolhaving undergone the Owner Presidents’ Management Programme.Rich experience in marketing, research and production"
}, {
  name: "Mr. Nimish G. Pandya",
  designation: "Independent Director",
  desc: "Bachelor’s Degree in Law from the University of Mumbai and Member of the Bar Council ofMaharashtra. Mr.Pandya was appointed as a Notary Public by the Government of Maharashtra in 1993Specialises in Mergers and Acquisitions, Litigation and Arbitration, Trusts and Charities,Corporate,Commercial and Financial Planning and Execution, including Transaction Support andContracts, IntellectualProperty, Technology, Media and Communications, Competition and Trade, Conveyancing and RealEstates andFamily and Personal LawFounding Partner at Pandya Juris LLP, International Lawyers & Tax ConsultantsProprietor at Pandya and Co. Advocates and NotaryTrustee of Shree Sathya Sai Trust, MaharashtraAll India President of Shree Satya Sai Seva Organisation, India"
}, {
  name: "C.A. Mr. Yogesh A. Thar",
  designation: "Independent Director",
  desc: "Member of the Institute of Chartered Accountants of India Over 29 years of experience in Business Mergers, Acquisitions and Restructuring, BusinessValuations,Corporate Taxation and Taxation of Non-resident Citizens and Foreign CompaniesSenior Partner in Bansi S. Mehta & Co., a reputed Chartered Accountancy firm in Mumbai"
}, {
  name: "C.A Ms. Drushti R. Desai",
  designation: "Independent Director",
  desc: "Member of the Institute of Chartered Accountants of IndiaOver 17 years of experience in Valuation of Shares, Businesses and Intangibles, AdvisoryServices on Schemesrelating to Mergers, Acquisitions, Spin-offs and other forms of Corporate Restructuring andFamilySettlements, Financial and Management Advice, Corporate and Individual Taxation (Income-tax,Wealth-tax,Gift-tax)Partner in Bansi S. Mehta & Co., a reputed Chartered Accountancy firm in Mumbai"
}]

$('.doctor_modal_arrow').on('click', function() {
  let personName = $(this).parent().siblings().find('.author').text();
  let docImg = $(this).siblings().attr('src')
  console.log(personName);
  console.log(docImg);
  $('.doctor_info_img img').attr('src', docImg);
  
  doctor_list.forEach(element=>{
      if (personName == element.name) {
          $('.author').text(element.name);
          $('.certificate').text(element.certification);
          $('.designation').text(element.designation);
          $('.dr_email').text(element.email);
          $('.dr_achievements').html(element.desc);
          $('.doctor_info_img img').attr('alt', element.name);
      }
  }
  );
  $(".doctor_info_modal").addClass("show_doc_info_modal");
  $(".doc_modal_overlay").addClass("show_doc_overlay");
  $("body").css("overflow", "hidden");
})

$('.close_doc_info_modal').on('click', function(){
  $(".doctor_info_modal").removeClass("show_doc_info_modal");
  $(".doc_modal_overlay").removeClass("show_doc_overlay");
  $("body").css("overflow", "auto");
})
