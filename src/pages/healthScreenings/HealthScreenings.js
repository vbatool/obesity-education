import React from "react";
import "./HealthScreenings.css";
import HealthScreeningsLandingImage from "../../images/HealthScreeningsImages/HealthScreeningsLandingImage.png";
import DoctorIcon from "../../images/HealthScreeningsImages/DoctorIcon.png";
import AppointmentBook from "../../images/HealthScreeningsImages/AppointmentBook.png";
import HeartRate from "../../images/HealthScreeningsImages/HeartRate.png";
import ScreeningsChecklist from "../../images/HealthScreeningsImages/ScreeningsChecklist.png";
import VisitsTimeline from "../../images/HealthScreeningsImages/VisitsTimeline.png";
import Cervix from "../../images/HealthScreeningsImages/Cervix.png";
import MythVsReality from "../../images/HealthScreeningsImages/MythVsReality.png";

function HealthScreenings() {
  return (
    <div className="HealthScreenings">
      <div className="HSSectionOne">
        <div className="HSSectionOneLeft">
          <div className="HSSectionOneHeader">Overall Health Perspective</div>
          <p className="HSSectionOneParagraph">
            {" "}
            Focusing on overall health instead of just the weight helps{" "}
            <br></br> you understand how different systems of your body are{" "}
            <br></br>working. Learn about how health screenings help you keep{" "}
            <br></br> track of your complete health.{" "}
          </p>
        </div>
        <div className="HSSectionOneRight">
          <img
            className="HealthScreeningsLandingImage"
            src={HealthScreeningsLandingImage}
            alt="Two Women Walking"
          ></img>
        </div>
      </div>

      <div className="HSSectionTwo">
        <div className="HSSectionTwoHeader">
          Regular health screenings are a key part of maintaining your
          well-being and staying <br></br>proactive about your health. These
          screenings are essential tools that help detect potential <br></br>
          health issues early, when they are most treatable.
        </div>
        <div className="HSSectionTwoContent">
          <div className="HSStressContentGroup">
            <img
              className="DoctorIcon"
              src={DoctorIcon}
              alt="Doctor Icon"
            ></img>
            <p className="HSStressContentFooters">
              Visit your PCP every year to build history and <br></br>{" "}
              potentially catch risks early
            </p>
          </div>
          <div className="HSStressContentGroup">
            <img
              className="AppointmentBook"
              src={AppointmentBook}
              alt="Appointment Book"
            ></img>
            <p className="HSStressContentFooters">
              Before your appointment make a list of any <br></br> concerns or
              questions to discuss
            </p>
          </div>
          <div className="HSStressContentGroup">
            <img className="HeartRate" src={HeartRate} alt="Heart Rate"></img>
            <p className="HSStressContentFooters">
              Depending on your age and health, your annual <br></br> exam will
              include certain standard screenings
            </p>
          </div>
        </div>

        <div className="HSSectionThree">
          <div className="HSSectionThreeLeft">
            <div className="HSSectionThreeHeader">
              <span style={{ color: "#8E3B0D", marginRight: "0.5rem" }}>
                Everyone,
              </span>
              every year
            </div>
            <img
              className="ScreeningsChecklist"
              src={ScreeningsChecklist}
              alt="Checklist of Screenings"
            ></img>
            <p className="HSSectionThreeParagraph">
              Certain screenings help ensure that different body systems{" "}
              <br></br> are functioning properly, while others are crucial for{" "}
              <br></br>detecting specific cancers early. Explore the sections
              below <br></br> to learn more about breast and cervical cancer
              screenings, <br></br> what to expect and when they might be right
              for you
            </p>
          </div>
          <div className="HSSectionThreeRight">
            <div className="HSSectionThreeHeaderRight">
              Other Screenings and Health Visits
            </div>
            <img
              className="VisitsTimeline"
              src={VisitsTimeline}
              alt="Recommended Screenings Timeline"
            ></img>
          </div>
        </div>

        <div className="HSSectionFour">
          <div className="HSSectionFourHeader"> Cervical Cancer</div>
          <div className="HSSectionFourSubHeader">
            It is a type of cancer that develops in your cervix, the lower part
            of the uterus that connects to the vagina (see figure below). The{" "}
            <br></br>cervix serves a bunch of vital functions for menstruation,
            fertility, pregnancy and childbirth.{" "}
          </div>
          <div className="HSSectionFourContent">
            <div className="HSSectionFourLeft">
              <div className="HSSectionFourContentHeader">
                Some symptoms of cervical cancer may include the following:
              </div>

              <ul className="HSSectionFourList">
                <li className="HSSectionFourListItem">
                  Vaginal bleeding between periods or after menopause
                </li>
                <li className="HSSectionFourListItem">
                  Bleeding after intercourse
                </li>

                <li className="HSSectionFourListItem">
                  Persistent pelvic or back pain
                </li>

                <li className="HSSectionFourListItem">
                  Vaginal discharge that may be heavy and have a foul odor
                </li>

                <li className="HSSectionFourListItem">
                  Pain during urination and needing to urinate more often{" "}
                </li>

                <li className="HSSectionFourListItem">
                  Unexpected weight changes
                </li>
              </ul>
            </div>
            <div className="HSSectionFourRight">
              <img className="Cervix" src={Cervix} alt="Cervix Diagram"></img>
            </div>
          </div>
        </div>

        <div className="HSSectionFive">
          <div className="HSSectionFiveHeader"> Pap Test</div>
          <div className="HSSectionFiveSubHeader">
            Also known as pap test, this procedure is used to check for any
            abnormalities in the cervical cells.
          </div>
          <div className="HSSectionFiveContent">
            <div className="HSSectionFiveLeft">
              <div className="HSSectionFiveContentHeader">
                What to expect during a pap test?
              </div>

              <ul className="HSSectionFiveList">
                <li className="HSSectionFiveListItem">
                  During this exam, you lie on your back on an exam table,{" "}
                  <br></br> bend your knees, and put your feet into supports at
                  the end <br></br> of the table.
                </li>

                <li className="HSSectionFiveListItem">
                  The healthcare provider uses a speculum to gently open{" "}
                  <br></br> your vagina in order to see the cervix.
                </li>

                <li className="HSSectionFiveListItem">
                  A soft, narrow brush or tiny spatula is used to collect a{" "}
                  <br></br>
                  small sample of cells from your cervix.
                </li>
              </ul>
            </div>
            <div className="HSSectionFourRight">
              <img
                className="MythVsReality"
                src={MythVsReality}
                alt="PAP Test Diagram of Myth Vs Reality "
              ></img>
            </div>
          </div>

          <div className="HSSectionSixContent">
            <div className="HSSectionSixHeader">When to get Screened</div>
            <div className="HSSectionSixSubHeader">
              Talk to your health care provider about when to start screening
              and how often to be screened. These ages and times between{" "}
              <br></br>
              screenings apply to most individuals, as long as they have normal
              test results.
            </div>
            <div className="HSSectionSixParagraph">
              <span style={{ marginRight: "0.5rem", fontWeight: "500" }}>
                Age 21-29 years:
              </span>
              get your first Pap test at age 21 and have Pap testing every 3
              years. Even if you are already sexually active, Pap <br></br>tests
              are not recommended until age 21.
            </div>
            <div className="HSSectionSixParagraph">
              <span style={{ marginRight: "0.5rem", fontWeight: "500" }}>
                Age 30-65 years: 
              </span>
              Pap test at this age is recommended every 3 years or every 5 years
              if you combine it with HPV test (known as <br></br>
              HPV/Pap cotest)
            </div>
            <div className="HSSectionSixParagraph">
              <span style={{ marginRight: "0.5rem", fontWeight: "500" }}>
                Older than 65 years:
              </span>
              If you are in this age group you should talk with your health care
              provider to learn if screening is still needed. <br></br>If you
              have been screened regularly and had normal test results, your
              health care provider will probably advise that you no longer
              <br></br>need screening. However,
              <span style={{ marginLeft: "0.5rem", fontWeight: "500" }}>
                if your recent test results were abnormal or you have not been
                screened regularly, you need to <br></br>continue screening
                beyond age 65.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthScreenings;
