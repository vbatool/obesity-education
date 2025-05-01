import React, { useState } from "react";
import "./CausesOfObesityPage.css";
import CausesOfObesityPageLandingImage from "../../images/CausesOfObesityPageImages/CausesOfObesityPageLandingImage.png";
import CausesOfObesityPageBottomImage from "../../images/CausesOfObesityPageImages/CausesOfObesityPageBottomImage.png";
import DNAImage from "../../images/CausesOfObesityPageImages/DNAImage.png";
import DNAWithNumbersImage from "../../images/CausesOfObesityPageImages/DNAWithNumbersImage.png";
import HeartImage from "../../images/CausesOfObesityPageImages/HeartImage.png";
import NutritionTableImage from "../../images/CausesOfObesityPageImages/NutritionTableImage.png";
import NutritionTableTwoImage from "../../images/CausesOfObesityPageImages/NutritionTableTwoImage.png";
import ProcessedFoodGuideImage from "../../images/CausesOfObesityPageImages/ProcessedFoodGuideImage.png";
import PillsImage from "../../images/CausesOfObesityPageImages/PillsImage.png";
import MedicationsTableImage from "../../images/CausesOfObesityPageImages/MedicationsTableImage.png";
import BrainImage from "../../images/CausesOfObesityPageImages/BrainImage.png";
import CortisolImage from "../../images/CausesOfObesityPageImages/CortisolImage.png";
import DigestiveAndBrainImage from "../../images/CausesOfObesityPageImages/DigestiveAndBrainImage.png";
import ScaleImage from "../../images/CausesOfObesityPageImages/ScaleImage.png";
import ThinkingImage from "../../images/CausesOfObesityPageImages/ThinkingImage.png";
import LowEnergyPerson from "../../images/CausesOfObesityPageImages/LowEnegryPerson.png";

function CausesOfObesity() {
  const [activeTab, setActiveTab] = useState("biological");

  const tabs = [
    { id: "biological", label: "Biological" },
    { id: "nutrition", label: "Nutrition & Movement" },
    { id: "medicines", label: "Medicines" },
    { id: "stress", label: "Stress & Sleep" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "biological":
        return (
          <div className="COOPTabContent">
            <div className="BiologicalSectionOne">
              <div className="BiologicalSectionOneLeft">
                <h2 className="COOPTabContentHeader">
                  <span style={{ color: "#408F6F", marginRight: "1rem" }}>
                    01.{" "}
                  </span>
                  Genetics and Weight
                </h2>
                <p className="BiologicalSectionOneParagraph">
                  Scientific research on obesity finds a strong connection{" "}
                  <br></br>
                  between obesity and genetics. Genes are inherited <br></br>{" "}
                  from our parents and contain instructions for the <br></br>
                  physical characteristics of our bodies.  This includes{" "}
                  <br></br>instructions that affect how we process the energy{" "}
                  <br></br>
                  from food (our metabolism), how fat is stored, and <br></br>{" "}
                  even the amount of food we consume based on signals<br></br>{" "}
                  of fullness.
                </p>
              </div>
              <div className="BiologicalSectionOneRight">
                {" "}
                <img className="DNAImage" src={DNAImage} alt="DNA"></img>
              </div>
            </div>

            <div className="BiologicalSectionTwo">
              <div className="BiologicalSectionTwoLeft">
                <h2 className="BiologicalSectionTwoHeader">
                  Fat Mass & Obesity-Associated Gene (FTO)
                </h2>
                <h3 className="BiologicalSectionSubHeader">
                  This gene can single-handedly impact obesity. People with
                  certain <br></br> varieties of this gene can have the
                  following:
                </h3>
                <img
                  className="DNAWithNumbersImage"
                  src={DNAWithNumbersImage}
                  alt="DNA With Number Points"
                ></img>
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/25102252/"
                  className="BiologicalSectionLink"
                >
                  {" "}
                  Read more about FTO
                </a>
              </div>
              <div className="BiologicalSectionTwoRight">
                <p className="BiologicalSectionTwoRightParagraph">
                  Over 900 genes have been found to be related <br></br> to
                  obesity. Sometimes, people have a single <br></br> rare gene
                  that directly causes obesity. For <br></br> most people with
                  obesity, the effects of many <br></br>common genes add up to
                  collectively <br></br>contribute to obesity.
                </p>
                <p className="BiologicalSectionTwoRightParagraph">
                  Sometimes, people living with obesity blame <br></br>
                  themselves for their struggles with weight. <br></br> Since we
                  cannot change our genetics, <br></br> understanding these
                  biological connections <br></br> can help us alleviate the
                  feelings of self-blame <br></br>and open up opportunities for
                  personalized <br></br>treatment plans for weight loss.
                </p>
              </div>
            </div>
            <div className="BiologicalSectionDivider"></div>

            <div className="BiologicalSectionThree">
              <div className="BiologicalSectionThreeLeft">
                <img className="HeartImage" src={HeartImage} alt="Heart"></img>
              </div>
              <div className="BiologicalSectionThreeRight">
                <h2 className="COOPTabContentHeader">
                  <span style={{ color: "#408F6F", marginRight: "1rem" }}>
                    02.{" "}
                  </span>
                  Other Health Conditions
                </h2>
                <p className="BiologicalSectionThreeParagraph">
                  Weight gain might also be a result of certain health <br></br>
                  conditions. The thyroid gland is responsible for <br></br>
                  releasing thyroid hormone, a chemical messenger used <br></br>
                  for regulating metabolism. When it doesn’t release <br></br>{" "}
                  enough thyroid hormone (a condition known as <br></br> "
                  <a
                    href="https://www.mayoclinic.org/diseases-conditions/hypothyroidism/symptoms-causes/syc-20350284"
                    className="BiologicalSectionThreeLink"
                  >
                    {" "}
                    hypothyroidism
                  </a>
                  ”), metabolism slows down. People with <br></br>
                  hypothyroidism experience increased exhaustion, feel <br></br>{" "}
                  cold, and store excess fat.
                  <br></br>
                  <br></br>
                  Type II diabetes, or insulin resistance, also contributes{" "}
                  <br></br>to weight gain. Insulin is a messenger that regulates
                  the <br></br>levels of sugar (glucose) in the blood by telling
                  the cells <br></br>in your body to take the glucose out of the
                  blood and <br></br> into the cells. When someone has type II
                  diabetes, the <br></br>cells might not respond to insulin
                  well, leading to high <br></br>glucose levels in the blood.
                  When glucose is not broken <br></br>down by the body, it is
                  stored in the body tissues as fat.
                  <br></br>
                  <br></br>
                  These conditions might be caused by genetics <br></br>
                  (inherited from your parents), however, they can be <br></br>{" "}
                  managed well with the right interventions and lifestyle{" "}
                  <br></br>
                  modifications. 
                </p>
              </div>
            </div>
          </div>
        );
      case "nutrition":
        return (
          <div className="COOPTabContent">
            <div className="NutritionSectionOne">
              <div className="NutritionSectionOneLeft">
                {" "}
                <h2 className="COOPTabContentHeader">
                  {" "}
                  <span style={{ color: "#408F6F", marginRight: "1rem" }}>
                    03.{" "}
                  </span>{" "}
                  Nutrition
                </h2>
                <p className="NutritionSectionOneParagraph">
                  Regardless of the genes we inherit from our parents, the{" "}
                  <br></br>
                  quality of the food we eat and the movement we have <br></br>
                  can also have an impact on our weight. <br></br>
                  <br></br>
                  The environment around us is full of readily accessible,{" "}
                  <br></br>
                  highly processed foods. These foods are high in <br></br>{" "}
                  ingredients such as sugar, salt, and fat which make them{" "}
                  <br></br>
                  irresistible. Not only are these foods designed so that we{" "}
                  <br></br>
                  will want to eat more, but they are also more{" "}
                  <span style={{ fontWeight: "600" }}>
                    calorie- <br></br>dense
                  </span>{" "}
                  and less likely to leave us full and satisfied than <br></br>
                  less processed foods. Combined with a sedentary <br></br>
                  lifestyle due to an increase in desk jobs, we are living in{" "}
                  <br></br> an environment that encourages weight gain.{" "}
                </p>
              </div>

              <div className="NutritionSectionOneRight">
                <img
                  className="NutritionTableImage"
                  src={NutritionTableImage}
                  alt="Nutrition Table"
                ></img>
              </div>
            </div>

            <div className="NutritionSectionTwo">
              <p className="NutritionSectionTwoParagraph">
                Food marketing can be confusing. Some food items that are high
                in calories and contain large amounts of <br></br> sugar, for
                example, are listed as healthy. Some of the most common
                calorie-dense foods that are perceived <br></br>to be healthy
                along with possible alternatives are shown below:
              </p>
            </div>

            <div className="NutritionSectionThree">
              <h2 className="NutritionSectionThreeHeader">
                Common calorie dense food items and their alternatives
              </h2>
              <img
                className="NutritionTableTwoImage"
                src={NutritionTableTwoImage}
                alt="Nutrition Table"
              ></img>

              <p className="NutritionSectionThreeParagraph">
                Another common way to understand whether something is nutritious
                or not is to see how processed it is. <br></br> NOVA system a
                classification system that categorizes foods based on their
                level of processing, rather than <br></br>just their nutrient
                content. It was developed by researchers at the University of
                São Paulo, Brazil, and is<br></br> widely used in nutrition
                science and public health. Details about different groups within
                the system and <br></br> some examples are listed below
              </p>
            </div>

            <div className="NutritionSectionFour">
              <h2 className="NutritionSectionFourHeader">
                Processed Food Guide
              </h2>
              <img
                className="ProcessedFoodGuideImage"
                src={ProcessedFoodGuideImage}
                alt="Processed Food Guide"
              ></img>
            </div>
          </div>
        );
      case "medicines":
        return (
          <div className="COOPTabContent">
            <div className="MedicinesSectionOne">
              <div className="MedicinesSectionOneLeft">
                <h2 className="COOPTabContentHeader">
                  {" "}
                  <span style={{ color: "#408F6F", marginRight: "1rem" }}>
                    04.{" "}
                  </span>{" "}
                  Medicines
                </h2>

                <p className="MedicinesSectionOneParagraph">
                  Individuals might experience weight gain as a side-effect{" "}
                  <br></br> of some common medicines. Weight might be affected{" "}
                  <br></br>
                  by medication through the following mechanisms:
                </p>
                <ul className="MedcineSectionOneList">
                  <li className="MedcineSectionOneListItem">
                    slowed metabolism
                  </li>
                  <li className="MedcineSectionOneListItem">
                    increased appetite
                  </li>
                  <li className="MedcineSectionOneListItem">
                    stimulation of fat storage
                  </li>
                  <li className="MedcineSectionOneListItem">water retention</li>
                </ul>
                <p className="MedicinesSectionOneParagraph">
                  Depending on your personal situation, these medications might
                  be <br></br> important for the treatment of chronic or
                  life-threatening health <br></br>conditions, so it is not
                  advised to stop taking them without consulting <br></br> your
                  provider. However, alternatives that don’t lead to weight gain
                  might <br></br> exist. If you are struggling with your weight,
                  you may want to speak with <br></br>your doctor about how
                  medications you are taking might make this more <br></br>
                  difficult and what the alternatives could be.
                </p>
              </div>
              <div className="MedicinesSectionOneRight">
                <img
                  className="PillsImage"
                  src={PillsImage}
                  alt="Prescription Pills"
                ></img>
              </div>
            </div>

            <div className="MedicinesSectionTwo">
              <img
                className="MedicationsTableImage"
                src={MedicationsTableImage}
                alt="Medications Table"
              ></img>

              <p className="MedicinesSectionTwoParagraph">
                Not everyone responds to the same medication similarly, however,
                a knowledge of how weight might be <br></br>affected due to the
                uptake of certain medicines can lead to a more informed
                conversation with your provider.
              </p>
            </div>
          </div>
        );

      case "stress":
        return (
          <div className="COOPTabContent">
            <div className="StressSectionOne">
              <div className="StressSectionOneLeft">
                <h2 className="COOPTabContentHeader">
                  {" "}
                  <span style={{ color: "#408F6F", marginRight: "1rem" }}>
                    05.{" "}
                  </span>{" "}
                  Stress and Sleep
                </h2>

                <p className="StressSectionOneParagraph">
                  Stress can hurt more than just our mood- it can lead to weight
                  <br></br>
                  gain.
                  <br></br>
                  <br></br>
                  <br></br>
                  When we are stressed our bodies release cortisol, the{" "}
                  <br></br> natural stress hormone. Think of cortisol like tiny
                  messages <br></br> in the blood stream released to prepare our
                  bodies to <br></br> respond to stress. To prepare the body to
                  deal with possible <br></br> physical danger, cortisol alters
                  how the body processes <br></br> energy and can lead to
                  cravings for energy-dense sweet, <br></br>fatty, and salty
                  foods as shown in the figure on the right
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  Additionally, research has found that stress impacts <br></br>
                  sleep quality which may also contribute to weight <br></br>{" "}
                  gain. Sleep deprivation has been linked to an <br></br>
                  increase in hunger and reduced energy levels. <br></br>{" "}
                  Tiredness due to limited sleep limits the amount of <br></br>{" "}
                  physical activity throughout the day -  increasing the{" "}
                  <br></br>
                  likelihood of weight gain
                </p>
              </div>
              <div className="StressSectionOneRight">
                <img className="BrainImage" src={BrainImage} alt="Brain"></img>
                <p className="ImageFooter">
                  under stress the body releases cortisol
                </p>
                <img
                  className="CortisolImage"
                  src={CortisolImage}
                  alt="Cortisol"
                ></img>
                <p className="ImageFooter">
                  cortisol alters normal body functions
                </p>
                <img
                  className="DigestiveAndBrainImage"
                  src={DigestiveAndBrainImage}
                  alt="Digestive and Brain"
                ></img>
                <div className="StressSectionOneRightDoubleFooter">
                  <p className="ImageFooter">digestive system slows down</p>
                  <p className="ImageFooter">
                    increased craving for energy-<br></br>dense foods
                  </p>
                </div>
              </div>
            </div>
            <div className="StressSectionTwo">
              <h3 className="StressSectionTwoHeader">
                Sleep impacts your overall health in the following ways:
              </h3>
              <div className="StressSectionTwoContent">
                <div className="StressContentGroup">
                  <img
                    className="ScaleImage"
                    src={ScaleImage}
                    alt="Balance Scale"
                  ></img>
                  <p className="StressContentFooters">
                    Disturbs the balance between hunger <br></br> and fullness
                    hormones; leading to <br></br> bigger appetite
                  </p>
                </div>
                <div className="StressContentGroup">
                  <img
                    className="ThinkingImage"
                    src={ThinkingImage}
                    alt="Person Thinking of Food"
                  ></img>
                  <p className="StressContentFooters">
                    Increases affinity for energy-<br></br>dense foods
                  </p>
                </div>
                <div className="StressContentGroup">
                  <img
                    className="LowEnergyPerson"
                    src={LowEnergyPerson}
                    alt="Tired Person"
                  ></img>
                  <p className="StressContentFooters">
                    Disturbed sleep leads to fatigue, <br></br> reducing your
                    motivation for <br></br>physical activity during the day
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
    <div className="CausesOfObesityPage">
      <div className="COOPSectionOne">
        <div className="COOPSectionOneLeft">
          <h1 className="COOPSectionOneHeader">
            Obesity is a complex condition <br></br> caused by multiple factors
          </h1>

          <p className="COOPSectionOneParagraph">
            Viewing obesity solely as a consequence of unhealthy lifestyle
            choices <br></br>oversimplifies the issue. In reality, genetics, the
            environment, and other <br></br>factors such as hormonal imbalances,
            and psychological challenges interact <br></br>to contribute to
            weight gain. Explore the various contributing factors to gain a{" "}
            <br></br> deeper understanding of this complex condition.
          </p>
        </div>
        <div className="COOPSectionOneRight">
          <img
            className="CausesOfObesityPageLandingImage"
            src={CausesOfObesityPageLandingImage}
            alt="Participant"
          ></img>
        </div>
      </div>
      <div className="COOPSectionTwo">
        <h1 className="COOPSectionTwoHeader">
          As a multifactorial condition, all the different contributors need to
          be <br></br> studied in order to grasp a complete picture of the
          causes
        </h1>

        <div className="COOPTabNavigationBar">
          <div className="COOPTabContainer">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={
                  activeTab === tab.id
                    ? "COOPTabButton active"
                    : "COOPTabButton"
                }
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="COOPTabContentContainer">{renderTabContent()}</div>
        </div>

        <img
          className="CausesOfObesityPageBottomImage"
          src={CausesOfObesityPageBottomImage}
          alt="Tips and Questions"
        ></img>
      </div>
    </div>
  );
}

export default CausesOfObesity;
