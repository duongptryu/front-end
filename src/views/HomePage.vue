<template>
  <div class="homepage">
    <!-- LANDING PAGE-->
    <div class="landingPage">
      <div class="landingText" data-aos="fade-up" data-aos-duration="1000">
        <h1>
          Welcome To
          <span style="color: #0066ff; font-size: 4vw">Passtintion</span>
        </h1>
        <h3>
          "Your time is limited, so don't waste it living someone else's life."
        </h3>
        <h3>
          "Wisdom is not a product from school, but a lifelong learning
          process."
        </h3>
        <div class="btn">
          <a href="#">Learn More</a>
        </div>
      </div>

      <div class="landingImg" data-aos="zoom-in" data-aos-duration="2000">
        <img
          src="https://www.privo.com/hs-fs/hubfs/images/privo-circle-kid-5.png?width=430&name=privo-circle-kid-5.png"
        />
      </div>
    </div>

    <!-- ABOUT -->

    <div class="about-container" style="text-center">
      <div class="about-content" data-aos="fade-right" data-aos-duration="1000">
        <h1>About <span style="color: #0066ff">Passtinction</span></h1>
        <img
          src="https://purepng.com/public/uploads/large/purepng.com-studentsstudentcollege-studentschool-studentstudentsmale-female-1421526923960d2xfn.png"
          data-aos="zoom-in"
          data-aos-duration="2000"
        />
      </div>
      <div class="about-item" data-aos="fade-left" data-aos-duration="2000">
        <ol>
          <li>
            <span>01</span>
            <p>
              The system of Passtinction is a product of Team Passtinction, a
              student of the University of Greenwich.
            </p>
          </li>

          <li>
            <span>02</span>
            <p>
              This is a simple, compact user management system that is suitable
              for a school system.
            </p>
          </li>

          <li>
            <span>03</span>
            <p>
              The system has an easy-to-use and user-friendly interface. User
              information is highly confidential.
            </p>
          </li>

          <li>
            <span>04</span>
            <p>
              My team has five members, Giang and Duong build the back-end of
              the system, and Viet and Thuy make the interface, last member is
              Hung who is a tester of my team.
            </p>
          </li>
        </ol>
      </div>
    </div>

    <!-- SESSION -->

    <div class="card-container">
      <div class="cardText">
        <h3>
          About <span style="color: #0066ff">University Of Greenwich </span>
        </h3>
      </div>

      <div class="cardContent">
        <div class="leftContent" data-aos="fade-right" data-aos-duration="2000">
          <table border="0">
            <tbody>
              <tr>
                <td class="leftImgContent">
                  <a
                    href="https://greenwich.edu.vn/dai-hoc-greenwich-vietnam-s81.html"
                  >
                    <img
                      src="https://www.brown.edu/sites/g/files/dprerj316/files/styles/ultrawide_med/public/2019-03/20181031_Brown4_C83T5506.jpg?itok=5d_YSX8y"
                  /></a>
                </td>
                <td class="leftTextContent">
                  <h3>Why should you choose University Of Greenwich</h3>
                  <div class="leftContentText">
                    <p>
                      Greenwich University was formed on the basis of the
                      association between Greenwich University (UK) and FPT
                      Education Organization since 2009 with more than 10,000
                      students from 10 countries...
                      <br />
                      <a
                        href="https://greenwich.edu.vn/dai-hoc-greenwich-vietnam-s81.html"
                        >See More</a
                      >
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="rightContent" data-aos="fade-left" data-aos-duration="2000">
          <img
            src="data:image/png;base64,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"
          />

          <div class="top-banner">
            <span>University Of Greenwich </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped src="../assets/css/HomePage.css"></style>
