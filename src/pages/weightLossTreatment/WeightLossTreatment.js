import React, { useState, useEffect } from "react";
import "./WeightLossTreatment.css";
import WeightLossTreatmentLandingImage from "../../images/weightLossTreatmentImages/WeightLossTreatmentLandingImage.png";
import LifestyleAdviceCircle from "../../images/weightLossTreatmentImages/LifestyleAdviceCircle.png";
import MacronutrientsTable from "../../images/weightLossTreatmentImages/MacronutrientsTable.png";
import FoodCheatSheet from "../../images/weightLossTreatmentImages/FoodCheatSheet.png";
import ExerciseBenefits from "../../images/weightLossTreatmentImages/ExerciseBenefits.png";
import ManagementSchedule from "../../images/weightLossTreatmentImages/ManagementSchedule.png";
import WeightLossMechanisms from "../../images/weightLossTreatmentImages/WeightLossMechanisms.png";
import WeightLossMedications from "../../images/weightLossTreatmentImages/WeightLossMedications.png";
import SurgeryCare from "../../images/weightLossTreatmentImages/SurgeryCare.png";
import SleeveGastrectomy from "../../images/weightLossTreatmentImages/SleeveGastrectomy.png";
import GastricBypass from "../../images/weightLossTreatmentImages/GastricBypass.png";
import BPDDS from "../../images/weightLossTreatmentImages/BPD_DS.png";
import RedBell from "../../images/weightLossTreatmentImages/RedBell.png";
import CheatSheetOne from "../../images/weightLossTreatmentImages/CheatSheetOne.png";
import CheatSheetTwo from "../../images/weightLossTreatmentImages/CheatSheetTwo.png";
import MechanismOne from "../../images/weightLossTreatmentImages/MechanismOne.png";
import MechanismTwo from "../../images/weightLossTreatmentImages/MechanismTwo.png";
import MechanismThree from "../../images/weightLossTreatmentImages/MechanismThree.png";
import SurgeryCareMobile from "../../images/weightLossTreatmentImages/SurgeryCareMobile.png";

function WeightLossTreatment() {
  const [activeTab, setActiveTab] = useState("lifestyle");
  const [activeMobileTabIndex, setActiveMobileTabIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1250);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextTab = () => {
    setActiveMobileTabIndex((prev) => (prev + 1) % tabs.length);
    setActiveTab(tabs[(activeMobileTabIndex + 1) % tabs.length].id);
  };

  const prevTab = () => {
    const newIndex = (activeMobileTabIndex - 1 + tabs.length) % tabs.length;
    setActiveMobileTabIndex(newIndex);
    setActiveTab(tabs[newIndex].id);
  };

  const tabs = [
    { id: "lifestyle", label: "Lifestyle Modifications" },
    { id: "weight", label: "Weight Loss Drugs" },
    { id: "bariatric", label: "Bariatric Surgery" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "lifestyle":
        return (
          <div className="WLTTabContent">
            <div className="LifestyleSectionOne">
              <div className="LifestyleSectionOneHeader">
                Lifestyle Modifications
              </div>
              <div className="LifestyleSectionOneHeaderParagraph">
                A “healthy” lifestyle involves more than just diet and exercise.
                It consists of various aspects that fit <br></br>
                together like puzzle pieces to create a balanced environment
                that leads to weight loss along with <br></br> encouraging
                overall wellbeing.{" "}
              </div>
              <img
                className="LifestyleAdviceCircle"
                src={LifestyleAdviceCircle}
                alt="Lifestyle Advice Circle"
              ></img>
              <div className="LifestyleSectionOneHeaderParagraph">
                Although nutrition, movement and sleep quality may not be
                sufficient, but they are the easiest to track and <br></br> keep
                in check for most people. To learn about some easy ways to get
                started, keep reading.
              </div>
            </div>
            <div className="LifestyleSectionTwo">
              <div className="LifestyleSectionTwoLeft">
                <h2 className="LifestyleSectionTwoHeader">
                  {" "}
                  <span style={{ color: "#408F6F", marginRight: "1rem" }}>
                    01.{" "}
                  </span>{" "}
                  Nutrition
                </h2>
                <div className="LifestyleSectionTwoParagraph">
                  Although “dieting” alone is often not sustainable for
                  long-term weight <br></br>loss, balancing your nutrition can
                  still have a significant impact on <br></br> your health and
                  weight. For example, as you lose weight, your <br></br>{" "}
                  nutrition can impact how much weight you lose from fat as
                  opposed <br></br> to lean tissue (e.g., muscle). See figure on
                  the right to see what <br></br> macronutrients are the most
                  important to be mindful of when you are <br></br>trying to eat
                  in a calorie deficit. <br></br>
                  <br className="SectionBreak"></br>
                  <br className="SectionBreak"></br>
                  The following are some of the ways you could try to get
                  started with <br></br> monitoring your nutrition:
                </div>

                <ul className="LifestyleSectionList">
                  <li className="LifestyleSectionListItem">
                    Have a discussion with your provider to better understand
                    how nutrition can improve your health, regardless of your
                    weight.
                  </li>
                  <li className="LifestyleSectionListItem">
                    Start with simple modifications and additions to your diet.{" "}
                    <br></br>
                    For example, try adding more protein from plants (e.g.,
                    beans, <br></br> nuts, whole grains) or lean animal sources
                    (e.g, chicken, <br></br> turkey, fish) to your meals to feel
                    full for longer and help <br></br>maintain muscle mass.
                  </li>
                  <li className="LifestyleSectionListItem">
                    Food carries a lot of personal and cultural significance.{" "}
                    <br></br>
                    Consider working with a registered dietitian (RD) to develop
                    a <br></br> personalized meal plan and goal setting based on
                    your unique <br></br>lifestyle and needs.
                  </li>
                </ul>
              </div>
              <div className="LifestyleSectionTwoRight">
                <img
                  className="MacronutrientsTable"
                  src={MacronutrientsTable}
                  alt="Macronutrients Table"
                ></img>
              </div>
            </div>

            <div className="LifestyleSectionThree">
              <div className="LifestyleSectionThreeHeader">
                {" "}
                Quantities of nutrients found in famous food items for you to
                incorporate in your daily diet are as follows:
              </div>
              <img
                className="FoodCheatSheet"
                src={FoodCheatSheet}
                alt="Protein, Fiber and Healthy Fats Table"
              ></img>

              <img
                className="CheatSheetOne"
                src={CheatSheetOne}
                alt="Protein"
              ></img>

              <img
                className="CheatSheetTwo"
                src={CheatSheetTwo}
                alt="Fiber and Healthy Fats Table"
              ></img>
            </div>

            <div className="LifestyleSectionFour">
              <div className="LifestyleSectionFourLeft">
                {" "}
                <h2 className="LifestyleSectionFourHeader">
                  {" "}
                  <span style={{ color: "#408F6F", marginRight: "1rem" }}>
                    02.{" "}
                  </span>{" "}
                  Movement and Activity Levels
                </h2>
                <div className="LifestyleSectionFourSubtext">
                  Exercise does not have to leave you <br></br>exhausted. There
                  are so many benefits of <br></br>light to moderate movement.
                </div>
                <img
                  className="ExerciseBenefits"
                  src={ExerciseBenefits}
                  alt="Exercise Health Benefits"
                ></img>
              </div>
              <div className="LifestyleSectionFourRight">
                <div className="LifestyleSectionFourParagraph">
                  Popular culture shows intense exercise as a way to burn{" "}
                  <br></br>
                  calories and lose weight quickly. However, because of the{" "}
                  <br></br>
                  metabolic changes by the body, this perspective is not{" "}
                  <br></br>
                  sustainable long term. Instead, it is often helpful to think{" "}
                  <br></br>
                  less about trying to burn calories and more about including{" "}
                  <br></br>
                  more movement into your life. For example, physical activity{" "}
                  <br></br>
                  can enhance your body’s metabolism and help you retain{" "}
                  <br></br> lean muscle mass while you lose weight.
                  Additionally, being <br></br> more active gives you more
                  energy and elevates your mood.
                  <br className="SectionBreak"></br>
                  <br className="SectionBreak"></br>
                  Here are some tips to get started:
                </div>

                <ul className="LifestyleSectionList">
                  <li className="LifestyleSectionListItem">
                    Make it simple for yourself. Set attainable goals and adapt{" "}
                    <br></br>
                    activities to fit into your schedule so you are more likely
                    to <br></br>succeed in completing them.
                  </li>

                  <li className="LifestyleSectionListItem">
                    Find activities that you enjoy and broaden <br></br>your
                    perspective on what constitutes a movement. For <br></br>
                    example, gardening can be a great way to get resistance{" "}
                    <br></br>
                    exercise while working on a rewarding activity.
                  </li>

                  <li className="LifestyleSectionListItem">
                    Slowly increase the intensity. Starting a new activity may{" "}
                    <br></br>
                    be difficult at first. Start at a level you can do, and work
                    up <br></br> to more activity over time.
                  </li>

                  <li className="LifestyleSectionListItem">
                    Find easy ways to add movement. For example, you could{" "}
                    <br></br> get more steps throughout your day by parking
                    farther <br></br>from the entrances to buildings, taking the
                    stairs instead of <br></br> an elevator, or taking a short
                    walk during break times <br></br> throughout the day.
                  </li>
                </ul>
              </div>
            </div>

            <div className="LifestyleSectionFive">
              <h2 className="LifestyleSectionFiveHeader">
                {" "}
                <span style={{ color: "#408F6F", marginRight: "1rem" }}>
                  03.{" "}
                </span>{" "}
                Sleep and Stress Management
              </h2>

              <div className="LifestyleSectionFiveParagraph">
                As mentioned earlier, the quality of sleep contributes
                significantly to the hormonal balance of how hungry you{" "}
                <br></br>feel and can increase your cravings for high-calorie
                foods. Thus, a regular sleep schedule should be <br></br>{" "}
                prioritized. <br></br>
                <br className="SectionBreak"></br>
                <br className="SectionBreak"></br>
                You can try the following tips based on your schedule to improve
                sleep hygiene. Feel free to adjust them as <br></br> per your
                needs:
              </div>

              <div className="LifestyleSectionFiveContent">
                <div className="LifestyleSectionFiveContentLeft">
                  <img
                    className="ManagementSchedule"
                    src={ManagementSchedule}
                    alt="Management Schedule"
                  ></img>
                </div>

                <div className="LifestyleSectionDivider"></div>
                <div className="LifestyleSectionFiveContentRight">
                  <div className="LifestyleSectionFiveParagraph">
                    Similarly, high stress has been linked to emotional{" "}
                    <br></br> eating and cravings for comfort foods.
                    <br></br>
                    <br></br>
                    You can try these suggestions for relieving stress:
                  </div>

                  <ul className="LifestyleSectionList">
                    <li className="LifestyleSectionListItem">
                      Take a walk or some other low-impact activities like{" "}
                      <br></br>
                      swimming.
                    </li>
                    <li className="LifestyleSectionListItem">
                      Practice relaxation techniques like meditation, yoga,{" "}
                      <br></br>or playing with a pet.
                    </li>
                    <li className="LifestyleSectionListItem">
                      Reach out to friends and family for support if <br></br>
                      possible.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      case "weight":
        return (
          <div className="WLTTabContent">
            <div className="WeightSectionOne">
              <h1 className="WeightSectionOneHeader">Weight Loss Drugs</h1>
              <p className="WeightSectionOneParagraph">
                Although essential for weight loss, lifestyle changes alone
                might not be adequate to achieve long-term weight loss for some
                individuals. In that case, weight-loss medication might be an
                option to supplement the lifestyle modifications. However, it is
                important to understand how they work to reap their full
                benefits.{" "}
              </p>
              <p className="WeightSectionOneParagraph">
                Weight-loss medicines follow one of the following mechanisms:
              </p>
              <img
                className="WeightLossMechanisms"
                src={WeightLossMechanisms}
                alt="Weight Loss Mechanisms"
              ></img>

              <div className="WeightLossSectionFooterContainer">
                <img
                  className="MechanismOne"
                  src={MechanismOne}
                  alt="Intestine"
                ></img>
                <div className="WeightArrowAndFooter">
                  <i class="WeightArrow"></i>
                  <div className="WeightLossFooter">
                    decrease nutrient absorption by <br></br> the
                    gastrointestinal system
                  </div>
                </div>
                <img
                  className="MechanismTwo"
                  src={MechanismTwo}
                  alt="Stomach"
                ></img>
                <div className="WeightArrowAndFooter">
                  <i
                    class="WeightArrow"
                    style={{ transform: "rotate(180deg)" }}
                  ></i>
                  <div className="WeightLossFooter">
                    increase fullness (satiety) after a meal
                  </div>
                </div>
                <img
                  className="MechanismThree"
                  src={MechanismThree}
                  alt="Brain"
                ></img>
                <div className="WeightArrowAndFooter">
                  <i class="WeightArrow"></i>
                  <div className="WeightLossFooter">
                    reduce appetite and food cravings
                  </div>
                </div>
              </div>

              <p className="WeightSectionOneParagraph">
                New weight loss medications like{" "}
                <strong>Ozempic (semaglutide) </strong> are receiving a lot of
                attention because of their effectiveness for many people, though
                many options are available. If you feel the assistance of a
                medication would help you with your weight loss, you should
                discuss options with your healthcare provider. Keep reading to
                learn about different types of weight loss drugs available now.
              </p>
            </div>
            <div className="WeightSectionTwo">
              <img
                className="WeightLossMedications"
                src={WeightLossMedications}
                alt="Different Weight Loss Medications"
              ></img>

              <p className="WeightSectionTwoParagraph">
                Similar to other drugs, weight loss medications also have
                certain side effects and are not appropriate for <br></br>{" "}
                everybody, so it is important to discuss if pharmacotherapy
                might be a suitable choice for you. These medications <br></br>{" "}
                are typically best used with a long-term treatment perspective,
                as suddenly stopping a weight loss medication <br></br> can lead
                to rapid weight regain. These medications should be combined
                with nutrition and increased physical <br></br>movement to
                increase the chance of long-term weight loss success and
                optimize your health overall. <br className="SectionBreak"></br>{" "}
                <br className="SectionBreak"></br>If you are living with both
                type II diabetes and obesity, some medications commonly used for
                type II diabetes may <br></br> also help with weight loss.
                Consider discussing your options with your healthcare provider
                to optimize how <br></br> the medications you take could work in
                your favor for weight loss.
              </p>
            </div>
          </div>
        );
      case "bariatric":
        return (
          <div className="WLTTabContent">
            <div className="BariatricSectionOne">
              <div className="BariatricSectionOneHeader">Bariatric Surgery</div>
              <p className="BariatricSectionOneParagraph">
                Bariatric or metabolic surgery impacts the digestive pathways
                that affect body weight, and it might be an <br></br>effective
                treatment option for more advanced-stage obesity, such as BMI
                greater than 35. Some <br></br> procedures limit how much you
                can eat, while others limit the absorption of fat and calories.{" "}
                <br className="SectionBreak"></br>
                <br className="SectionBreak"></br>
                It may also be opted for to treat other conditions that may
                exist alongside obesity. It is important to <br></br>discuss
                this option with your provider as it might not work for
                everyone, and there are risks associated <br></br> with
                bariatric surgery that one needs to be mindful of.
                <br className="SectionBreak"></br>
                <br className="SectionBreak"></br>
                The surgery requires long-term follow-up care and lifestyle
                modifications which include diet, exercise, and <br></br>{" "}
                behavioral changes to ensure that the weight loss persists for
                the long term.
              </p>

              <div className="BariatricSectionOneHeaderTwo">Risks</div>
              <p className="BariatricSectionOneParagraph">
                While bariatric surgery can be life-changing and highly
                effective for some individuals, it comes with <br></br>potential
                risks and complications. It is an involved procedure that can
                have a toll on your body so it’s <br></br> important to be aware
                of potential long-term risks to make informed decisions.{" "}
              </p>

              <div className="BariatricSectionOneListHeader">
                LONG-TERM RISKS
              </div>

              <div className="RiskContainer">
                <div className="Risk">
                  <div className="RiskNumberBox"> 1</div>
                  <p className="RiskParagraph">
                    <span style={{ marginRight: "0.5rem", fontWeight: "600" }}>
                      Nutritional Deficiencies:
                    </span>
                    vitamin and mineral deficiencies can occur due to reduced{" "}
                    <br></br>
                    stomach absorption. Iron, vitamin B12, calcium and vitamin D
                    are some of the common <br></br> deficiencies.
                  </p>
                </div>
                <div className="Risk">
                  <div className="RiskNumberBox"> 2</div>
                  <p className="RiskParagraph">
                    <span style={{ marginRight: "0.5rem", fontWeight: "600" }}>
                      Gastrointestinal Issues:
                    </span>
                    some common concerns to be mindful of include bowel issues{" "}
                    <br></br>
                    such as severe pain or vomiting, acid reflux, ulcers and
                    gallstones.
                  </p>
                </div>
                <div className="Risk">
                  <div className="RiskNumberBox"> 3</div>
                  <p className="RiskParagraph">
                    <span style={{ marginRight: "0.5rem", fontWeight: "600" }}>
                      Weight Regain & Psychological Factors:
                    </span>
                    weight regain for about 20-30% of the patients is <br></br>
                    recorded if the surgery is not combined with proper
                    lifestyle modifications and there have <br></br> also been
                    instances of disordered eating and other emotional struggles
                    such as body image <br></br>issues.
                  </p>
                </div>
              </div>

              <p className="BariatricSectionOneParagraph">
                Bariatric surgery is not a treatment that works on its own. For
                success in terms of lasting weight loss, it is <br></br> crucial
                to follow pre and post-surgery measures which are detailed
                below:
              </p>

              <img
                className="SurgeryCare"
                src={SurgeryCare}
                alt="Surgery Care Insights"
              ></img>

              <img
                className="SurgeryCareMobile"
                src={SurgeryCareMobile}
                alt="Surgery Care Insights"
              ></img>
            </div>

            <div className="BariatricSectionTwo">
              <div className="BariatricSectionTwoHeader">
                Bariatric Surgery Types
              </div>
              <div className="BariatricSectionTwoParagraph">
                This section provides a brief overview of the 3 most common
                types of surgeries. Discuss these in detail with your provider
                so you are well informed about each procedure.
              </div>
              <div className="BariatricSectionTwoContentContainer">
                <div className="BariatricSectionTwoContent">
                  <div className="BariatricSectionTwoContentLeft">
                    {" "}
                    <div className="BariatricSectionTwoContentHeader">
                      Sleeve Gastrectomy (Gastric Sleeve)
                    </div>
                    <ul className="BariatricSectionTwoList">
                      <div className="BariatricSectionTwoListHeader">
                        What happens during the surgery?
                      </div>
                      <li className="BariatricSectionTwoListItem">
                        About 75-80% of the stomach is removed, leaving behind a
                        narrow <br></br>“gastric sleeve”. See the figure on the
                        right.
                      </li>
                    </ul>
                    <ul className="BariatricSectionTwoList">
                      <div className="BariatricSectionTwoListHeader">
                        How does it help with weight loss?
                      </div>
                      <li className="BariatricSectionTwoListItem">
                        With a smaller stomach, you feel full much faster and
                        eat less.
                      </li>
                      <li className="BariatricSectionTwoListItem">
                        The stomach produces less ghrelin, the hormone that
                        makes you hungry, so you crave less food.
                      </li>
                      <li className="BariatricSectionTwoListItem">
                        This surgery also improves blood sugar levels which can
                        be helpful for those with diabetes.
                      </li>
                    </ul>
                  </div>

                  <div className="BariatricSectionTwoContentRight">
                    <img
                      className="SleeveGastrectomy"
                      src={SleeveGastrectomy}
                      alt="Gastric Sleeve"
                    ></img>

                    <div className="GastricFooter">Sleeve Gastrectomy</div>
                  </div>
                </div>

                <div className="BariatricSectionDivider"></div>

                <div className="BariatricSectionTwoContent">
                  <div className="BariatricSectionTwoContentLeft">
                    {" "}
                    <div className="BariatricSectionTwoContentHeader">
                      Gastric Bypass (Roux-en-Y)
                    </div>
                    <ul className="BariatricSectionTwoList">
                      <div className="BariatricSectionTwoListHeader">
                        What happens during the surgery?
                      </div>
                      <li className="BariatricSectionTwoListItem">
                        The stomach is made smaller by creating a small pouch.
                      </li>
                      <li className="BariatricSectionTwoListItem">
                        A part of the small intestine is bypassed (shown in the
                        figure), meaning <br></br>food skips part of digestion
                        and goes straight to the lower intestine.
                      </li>
                    </ul>
                    <ul className="BariatricSectionTwoList">
                      <div className="BariatricSectionTwoListHeader">
                        How does it help with weight loss?
                      </div>
                      <li className="BariatricSectionTwoListItem">
                        With a smaller stomach, you feel full much faster and
                        eat less.
                      </li>
                      <li className="BariatricSectionTwoListItem">
                        As food part of digestion, fewer calories and nutrients
                        are absorbed.
                      </li>
                      <li className="BariatricSectionTwoListItem">
                        The stomach produces less ghrelin, the hormone that
                        makes you <br></br>hungry, so you crave less food.
                      </li>
                    </ul>
                  </div>

                  <div className="BariatricSectionTwoContentRight">
                    <img
                      className="GastricBypass"
                      src={GastricBypass}
                      alt="Roux-en-Y"
                    ></img>
                    <div className="GastricFooter">Gastric Bypass</div>
                  </div>
                </div>

                <div className="BariatricSectionDivider"></div>

                <div className="BariatricSectionTwoContentAlt">
                  {" "}
                  <div
                    className="BariatricSectionTwoContentHeader"
                    style={{ marginBottom: "2rem" }}
                  >
                    Biliopancreatic Diversion with Duodenal Switch (BPD/DS)
                  </div>
                  <ul className="BariatricSectionTwoList">
                    <div className="BariatricSectionTwoListHeader">
                      What happens during the surgery?
                    </div>
                    <div className="BariatricSectionTwoListParagraph">
                      This is a two-part surgery that combines making stomach
                      smaller and less nutrient absorption (see figure below):
                    </div>
                    <li className="BariatricSectionTwoListItem">
                      The stomach is made smaller by creating a small pouch
                      (same as sleeve gastrectomy).
                    </li>
                    <li className="BariatricSectionTwoListItem">
                      The middle section of the small intestine is bypassed
                      through a new route called alimentary channel to <br></br>
                      reduce absorption of nutrients
                    </li>
                    <li className="BariatricSectionTwoListItem">
                      The last part of the intestine is attached directly to the
                      first part of the small intestine, called the <br></br>
                      duodenum. This is the duodenal switch.
                    </li>
                    <li className="BariatricSectionTwoListItem">
                      The first part of the intestine is reattached to the end
                      of the intestine, allowing bile and pancreatic digestive{" "}
                      <br></br>
                      juices to flow. This is the biliopancreatic diversion.
                    </li>
                  </ul>
                  <img
                    className="BPDDS"
                    src={BPDDS}
                    alt="Biliopancreatic Diversion with Duodenal Switch (BPD/DS)"
                  ></img>
                  <ul className="BariatricSectionTwoList">
                    <div className="BariatricSectionTwoListHeader">
                      How does it help with weight loss?
                    </div>
                    <li className="BariatricSectionTwoListItem">
                      With a smaller stomach, you feel full much faster and eat
                      less.
                    </li>
                    <li className="BariatricSectionTwoListItem">
                      Food skips a large portion of digestion, meaning fewer
                      nutrients and calories are absorbed.
                    </li>
                    <li className="BariatricSectionTwoListItem">
                      Like sleeve gastrectomy, it lowers hunger hormone level.
                    </li>
                  </ul>
                </div>

                <div className="BariatricSectionDivider"></div>

                <div className="BariatricSectionThree">
                  <img
                    className="RedBell"
                    src={RedBell}
                    alt="Red Notice Bell"
                  ></img>
                  <p className="BariatricSectionThreeParagraph">
                    <span style={{ marginRight: "0.5rem", fontWeight: "600" }}>
                      Important to know:
                    </span>
                    bariatric surgery is permanent, complex and requires
                    lifelong nutrition care to prevent deficiencies!
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="WeightLossTreatment">
      <div className="WLTSectionOne">
        <div className="WLTSectionOneLeft">
          <div className="WLTSectionOneHeader">Weight Loss Treatment</div>
          <div className="WLTSectionOneParagraph">
            There is no one approach that works for lasting weight loss and
            dieting <br></br> alone is definitely not enough. Long-term weight
            loss and management <br></br>might involve a combination of
            different medical options. Working closely <br></br>with your
            provider to design a plan suited to your condition, lifestyle and{" "}
            <br></br> other needs is the best way to go.
            <br></br>
            <br></br>
            Keep reading to learn about three different approaches to achieving
            weight <br></br> loss.
          </div>
        </div>
        <div className="WLTSectionOneRight">
          <img
            className="WeightLossTreatmentLandingImage"
            src={WeightLossTreatmentLandingImage}
            alt="Collage Of People"
          ></img>
        </div>
      </div>

      <div className="WLTSectionTwo">
        <div className="WLTTabNavigationBar">
          <div className="WLTTabContainer">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={
                  activeTab === tab.id ? "WLTTabButton active" : "WLTTabButton"
                }
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="WLTTabContentWrapper">
            {isMobile && (
              <>
                <button className="arrow-button arrow-left" onClick={prevTab}>
                  &#10094;
                </button>
                <button className="arrow-button arrow-right" onClick={nextTab}>
                  &#10095;
                </button>
              </>
            )}

            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className={`WLTTabContentContainer ${
                  window.innerWidth > 1250 || index === activeMobileTabIndex
                    ? "active"
                    : ""
                }`}
              >
                {activeTab === tab.id && renderTabContent()}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="WLTSectionThree">
        <div className="WLTSectionThreeHeader">
          Tips and discussion questions for your next appointment
        </div>

        <ul className="WLTSectionThreeList">
          <li className="WLTSectionThreeListItem">
            Try keeping a stress diary to identify sources of stress and
            identify patterns. If you find <br></br> recurring patterns then
            consider discussing them with your provider to get a better{" "}
            <br></br> understanding of whether that might be a contributing
            factor to your overall health and if <br></br>additional help is
            recommended.
          </li>

          <li className="WLTSectionThreeListItem">
            If certain conditions e.g allergies or body aches prevent you from
            incorporating lifestyle <br></br> recommendations, share your
            concerns with your provider and discuss any modifications or{" "}
            <br></br>alternatives that can be implemented.
          </li>

          <li className="WLTSectionThreeListItem">
            Discuss your past efforts in terms of nutrition and exercise and
            share what were your struggles<br></br>and what worked or didn’t
            work.
          </li>

          <li className="WLTSectionThreeListItem">
            Make a plan with a list of foods to focus on or avoid if you are
            trying to lose weight or maintain <br></br> it.
          </li>

          <li className="WLTSectionThreeListItem">
            Reflect on how well rested you feel every morning and how disturbed
            your sleep has been. Then, <br></br>discuss with your provider any
            signs of sleep disorders that you should be aware of.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WeightLossTreatment;
