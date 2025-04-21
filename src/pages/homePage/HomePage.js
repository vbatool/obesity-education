import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import LandingImage from "../../images/HomePageImages/LandingImage.png";
import MegaphoneImage from "../../images/HomePageImages/MegaphoneImage.png";
import CauseOfObesityImage from "../../images/HomePageImages/CauseOfObesityImage.png";
import WeightLossChallengesImage from "../../images/HomePageImages/WeightLossChallengesImage.png";
import MentalHealthAndWeightImage from "../../images/HomePageImages/MentalHealthAndWeightImage.png";
import WeightLossTreatmentImage from "../../images/HomePageImages/WeightLossTreatmentImage.png";
import HealthScreeningsImage from "../../images/HomePageImages/HealthScreeningsImage.png";
import PatientNarrativesImage from "../../images/HomePageImages/PatientNarrativesImage.png";

function HomePage() {
  return (
    <div className="HomePage">
      <div className="SectionOne">
        <div className="SectionOneRight">
          <h1 className="SectionOneHeader">
            Discover health strategies <br></br> through understanding obesity{" "}
            biology
          </h1>
          <p className="SectionOneParagraph">
            Explore the health topics listed below to understand different{" "}
            <br></br>
            aspects of weight management, helping you make informed <br></br>
            decisions about seeking healthcare options that meet your <br></br>
            unique needs.
          </p>
          <button className="SectionOneButton">Learn More</button>
        </div>
        <div className="SectionOneLeft">
          <img
            className="LandingImage"
            src={LandingImage}
            alt="Participant"
          ></img>
        </div>
      </div>
      <div className="SectionTwo">
        <h1 className="SectionTwoHeader">
          Obesity <span style={{ color: "#541E00" }}>Reframed: </span> Insights
          for Better Health Management
        </h1>
        <div className="SectionTwoContent">
          <div className="SectionTwoLeft">
            <img
              className="MegaphoneImage"
              src={MegaphoneImage}
              alt="Megaphone"
            ></img>
          </div>
          <div className="SectionTwoRight">
            <div className="Insight">
              <div className="InsightNumberBox"> 1</div>
              <div className="InsightTextBox">
                <h1 className="InsightHeader">
                  OBESITY IS A CHRONIC CONDITION
                </h1>
                <p className="InsightParagraph">
                  Obesity is a chronic condition diagnosed by a qualified
                  medical professional through BMI <br></br> calculation and
                  appropriate body measurements. Although not curable, it can be
                  managed <br></br> like other chronic diseases such as diabetes
                  or high blood pressure to reduce its impact on <br></br>{" "}
                  overall health and quality of life. 
                </p>
              </div>
            </div>
            <div className="Insight">
              <div className="InsightNumberBox"> 2</div>
              <div className="InsightTextBox">
                <h1 className="InsightHeader">
                  BIOLOGY IS A STRONG CONTRIBUTOR TO WEIGHT GAIN
                </h1>
                <p className="InsightParagraph">
                  It is a misconception to view excess weight as a result of
                  personal failure or lack of <br></br> willpower. Weight gain
                  is due to a combined effect of genetic, environmental, and
                  behavioral <br></br>
                  factors. The action of biology is prominent when one tries to
                  lose weight, for example the <br></br> metabolism slows down
                  and the appetite increases, possibly leading to weight regain.
                </p>
              </div>
            </div>

            <div className="Insight">
              <div className="InsightNumberBox"> 3</div>
              <div className="InsightTextBox">
                <h1 className="InsightHeader">
                  SMALL CHANGES CAN HAVE SIGNIFICANT HEALTH BENEFITS
                </h1>
                <p className="InsightParagraph">
                  It is important to address excess weight as early as possible
                  as it can negatively impact <br></br>your overall health. Even
                  with small weight loss, significant health benefits are
                  experienced <br></br> such as improved energy levels and
                  better sleep quality. It is advised to have a conversation{" "}
                  <br></br> with your provider regarding weight as soon as
                  possible to understand what treatment plan <br></br>would work
                  best for you, or what small steps you can take to improve your
                  health.
                </p>
              </div>
            </div>

            <div className="Insight">
              <div className="InsightNumberBox"> 4</div>
              <div className="InsightTextBox">
                <h1 className="InsightHeader">OBESITY IS MANAGEABLE</h1>
                <p className="InsightParagraph">
                  Although not curable, like other chronic conditions, obesity
                  can be managed through <br></br> appropriate treatment. It is
                  personalized for everyone using evidence-based options which{" "}
                  <br></br>
                  could include lifestyle recommendations, weight loss drugs and
                  surgery. It is important to <br></br>note that treatment for
                  obesity focuses on overall health and not just weight loss. 
                </p>
              </div>
            </div>

            <div className="Insight">
              <div className="InsightNumberBox"> 5</div>

              <div className="InsightTextBox">
                <h1 className="InsightHeader">
                  WEIGHT-BASED SHAMING DOES NOT SERVE AS MOTIVATION{" "}
                </h1>
                <p className="InsightParagraph">
                  Bullying or fat-shaming is prevalent in our society and it
                  does severe harm to individuals <br></br> with excess weight.
                  It is a misconception that bullying someone for their weight
                  helps <br></br>motivate them to change their behavior to lose
                  weight. Instead, it leads to psychological <br></br> harms
                  such as low self-esteem and body image issues and discourages
                  people from <br></br> seeking the help they need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="SectionThree">
        <h1 className="SectionThreeHeader">Featured Health Topics</h1>
        <h2 className="SectionThreeSubHeader">
          Explore the following resources to learn about different health topics
          related to weight and see if they are relevant to you <br></br> and
          can be discussed with your provider in your next appointment
        </h2>

        <div className="HealthTopics">
          <div className="HealthTopicBox">
            <div
              className="HealthTopicImageBox"
              style={{ backgroundColor: "#e4f7f3" }}
            >
              <img
                className="HealthTopicImage"
                src={CauseOfObesityImage}
                alt="Magnifying Glass"
              ></img>
            </div>
            <h1 className="HealthTopicHeader">Causes of Obesity</h1>
            <p className="HealthTopicParagraph">
              Obesity may be caused by many factors, <br></br> including
              genetics, environment, diet, <br></br> stress and medications,
              among others.
            </p>
            <Link
              to={"/health-topics/causes-of-obesity"}
              style={{ color: "inherit" }}
            >
              <div class="LearnMoreButton">
                <div class="ArrowCircle" style={{ backgroundColor: "#e4f7f3" }}>
                  <span class="LearnMoreText">Learn more</span>
                  <i class="Arrow"></i>
                </div>
              </div>
            </Link>
          </div>

          <div className="HealthTopicBox">
            <div
              className="HealthTopicImageBox"
              style={{ backgroundColor: "#E5EEFA" }}
            >
              <img
                className="HealthTopicImage"
                src={WeightLossChallengesImage}
                alt="Scale"
              ></img>
            </div>
            <h1 className="HealthTopicHeader">Weight Loss Challenges</h1>
            <p className="HealthTopicParagraph">
              Our bodies resist weight loss as a protection <br></br>mechanism,
              requiring long-term lifestyle <br></br> adjustments.
            </p>
            <Link
              to={"/health-topics/challenges-of-weight-loss"}
              style={{ color: "inherit" }}
            >
              <div class="LearnMoreButton">
                <div class="ArrowCircle" style={{ backgroundColor: "#E5EEFA" }}>
                  <span class="LearnMoreText">Learn more</span>
                  <i class="Arrow"></i>
                </div>
              </div>
            </Link>
          </div>

          <div className="HealthTopicBox">
            <div
              className="HealthTopicImageBox"
              style={{ backgroundColor: "#E3FAFA" }}
            >
              <img
                className="HealthTopicImage"
                src={MentalHealthAndWeightImage}
                alt="Two heads"
              ></img>
            </div>
            <h1 className="HealthTopicHeader">Mental Health and Weight</h1>
            <p className="HealthTopicParagraph">
              Did you know that there could be a connection <br></br> between
              weight and how you are feeling?
            </p>
            <div class="LearnMoreButton">
              <div class="ArrowCircle" style={{ backgroundColor: "#E3FAFA" }}>
                <span class="LearnMoreText">Learn more</span>
                <i class="Arrow"></i>
              </div>
            </div>
          </div>

          <div className="HealthTopicBox">
            <div
              className="HealthTopicImageBox"
              style={{ backgroundColor: "#F8EAED" }}
            >
              <img
                className="HealthTopicImage"
                src={WeightLossTreatmentImage}
                alt="First Aid Logo Over Hand"
              ></img>
            </div>
            <h1 className="HealthTopicHeader">Weight Loss Treatment</h1>
            <p className="HealthTopicParagraph">
              Effective weight loss treatments often combine <br></br> multiple
              approaches, addressing both physical <br></br> and mental aspects
              of obesity for long-term <br></br> success.
            </p>
            <div class="LearnMoreButton">
              <div class="ArrowCircle" style={{ backgroundColor: "#F8EAED" }}>
                <span class="LearnMoreText">Learn more</span>
                <i class="Arrow"></i>
              </div>
            </div>
          </div>

          <div className="HealthTopicBox">
            <div
              className="HealthTopicImageBox"
              style={{ backgroundColor: "#FFE9DC" }}
            >
              <img
                className="HealthTopicImage"
                src={HealthScreeningsImage}
                alt="Clipboard"
              ></img>
            </div>
            <h1 className="HealthTopicHeader">Health Screenings</h1>
            <p className="HealthTopicParagraph">
              Regular health screenings are important for <br></br>early
              detection of health issues, promoting <br></br> overall well-being
              and proactive care.
            </p>
            <div class="LearnMoreButton">
              <div class="ArrowCircle" style={{ backgroundColor: "#FFE9DC" }}>
                <span class="LearnMoreText">Learn more</span>
                <i class="Arrow"></i>
              </div>
            </div>
          </div>

          <div className="HealthTopicBox">
            <div
              className="HealthTopicImageBox"
              style={{ backgroundColor: "#EEEAFD" }}
            >
              <img
                className="HealthTopicImage"
                src={PatientNarrativesImage}
                alt="Patients"
              ></img>
            </div>
            <h1 className="HealthTopicHeader">Patient Narratives</h1>
            <p className="HealthTopicParagraph">
              Many individuals find support and <br></br> encouragement from
              experiences of others who <br></br> are going through something
              similar or have <br></br> overcome similar health challenges in
              the past.
            </p>
            <div class="LearnMoreButton">
              <div class="ArrowCircle" style={{ backgroundColor: "#EEEAFD" }}>
                <span class="LearnMoreText">Learn more</span>
                <i class="Arrow"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
