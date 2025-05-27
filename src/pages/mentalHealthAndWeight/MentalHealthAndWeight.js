import React from "react";
import "./MentalHealthAndWeight.css";
import CrowdedThoughts from "../../images/MentalHealthAndWeightImages/CrowdedThoughts.png";
import PlateWithWords from "../../images/MentalHealthAndWeightImages/PlateWithWords.png";
import EatingDisorderChart from "../../images/MentalHealthAndWeightImages/EatingDisorderChart.png";
import PersonStrugglingMentally from "../../images/MentalHealthAndWeightImages/PersonStrugglingMentally.png";

function MentalHealthAndWeight() {
  return (
    <div className="MentalHealthAndWeight">
      <div className="MHAWSectionOne">
        <div className="MHAWSectionOneHeader"> Mental Health and Weight</div>
        <div className="MHAWSectionOneParagraph">
          There is a strong connection between weight and its impact on mental
          health in various ways. Continue reading to see <br></br> if anything
          resonates with you and is worth discussing with your provider.
        </div>
      </div>
      <div className="MHAWSectionTwo">
        <div className="MHAWSectionTwoLeft">
          <div className="MHAWSSectionTwoHeader">
            Chronic Stress and Mental Illness
          </div>

          <div className="MHAWSSectionTwoParagraph">
            Stress is a normal reaction to everyday pressures and challenges. It
            is <br></br>usually temporary and can be managed with coping
            strategies such <br></br>
            as exercise, relaxation techniques, and social support.
            <br className="SectionBreak"></br>
            <br className="SectionBreak"></br>
            However, if your stress or low mood prolongs for a long period of{" "}
            <br></br>
            time, a good way to assess if it is serious and might need treatment{" "}
            <br></br>
            is to observe how it affects your daily life. If you struggle to
            fulfill <br></br> work, school, or family responsibilities, or if
            you can't care for yourself <br></br> or others, it's important to
            seek help. Even if you can manage your <br></br> tasks but feel
            persistently sad, down, or extremely stressed for <br></br>several
            days without relief, you should consider getting support.
            <br className="SectionBreak"></br>
            <br className="SectionBreak"></br>
            Remember, you don't have to wait until you are in distress to seek{" "}
            <br></br>
            help for your mental health.
          </div>
        </div>
        <div className="MHAWSectionTwoRight">
          <img
            className="CrowdedThoughts"
            src={CrowdedThoughts}
            alt="Head With Crowded Thoughts"
          ></img>
        </div>
      </div>
      <div className="MHAWSectionThree">
        <div className="MHAWSectionThreeLeft">
          <div className="MHAWSSectionThreeHeader">Eating Disorders</div>
          <div className="MHAWSSectionThreeParagraph">
            Eating disorders are serious mental health conditions characterized{" "}
            <br></br>
            by abnormal eating habits. However, not everyone who has obesity{" "}
            <br></br>has eating disorders, or vice versa.
            <br className="SectionBreak"></br>
            <br className="SectionBreak"></br>
            Examples of eating disorders include binge eating disorder (BED),{" "}
            <br></br>
            bulimia nervosa, and anorexia nervosa. BED, in particular, is
            strongly <br></br> linked to obesity. Individuals with BED consume
            large quantities of <br></br> food in a short period and often feel
            a lack of control over their <br></br> eating.
            <br className="SectionBreak"></br>
            <br className="SectionBreak"></br>
            Notably, individuals who have both obesity and an eating disorder
            are <br></br>likely to face substantial medical and psychological
            impacts. Some <br></br>of the common eating disorders are listed
            below:{" "}
          </div>
        </div>
        <div className="MHAWSectionThreeRight">
          <img
            className="PlateWithWords"
            src={PlateWithWords}
            alt="Plate With Words On It"
          ></img>
        </div>
      </div>

      <div className="MHAWSectionFour">
        <div className="MHAWSectionFourLeft">
          <img
            className="EatingDisorderChart"
            src={EatingDisorderChart}
            alt="Eating Disorder Chart"
          ></img>
        </div>
        <div className="MHAWSectionFourRight">
          <div className="MHAWSSectionFourParagraph">
            The different disorders and their symptoms listed may seem <br></br>
            relatable to some people and while we all have periods where our{" "}
            <br></br> relationship with food is disordered due to several life
            circumstances, <br></br> however, a discussion with your provider is
            required to know if you <br></br> have an eating disorder to
            determine the course of treatment.
          </div>
        </div>
      </div>

      <div className="MHAWSectionFive">
        <div className="MHAWSectionFiveLeft">
          <div className="MHAWSSectionFiveHeader">
            Impact of Weight Bias on Mental Health
          </div>
          <div className="MHAWSSectionFiveParagraph">
            Weight bias refers to negative attitudes, beliefs, and behaviors{" "}
            <br></br>
            directed toward individuals based on their weight. It can occur in{" "}
            <br></br>
            various settings, including healthcare, workplaces, educational{" "}
            <br></br>
            institutions, and social environments.
            <br className="SectionBreak"></br>
            <br className="SectionBreak"></br>
            Weight bias can lead to mental health issues such as depression,{" "}
            <br></br>
            anxiety, low self-esteem, and body dissatisfaction. Experiencing{" "}
            <br></br>
            weight bias can exacerbate feelings of shame and isolation,{" "}
            <br></br>
            contributing to emotional eating and further weight gain.
            Additionally, <br></br> the stigma associated with obesity can lead
            to social withdrawal and <br></br>isolation, worsening mental health
            and reducing opportunities for <br></br>physical activity and
            balanced eating.
            <br className="SectionBreak"></br>
            <br className="SectionBreak"></br>
            Given the direct connection of mental health with weight, treating{" "}
            <br></br>
            obesity effectively requires addressing both physical and mental{" "}
            <br></br>
            health aspects.
          </div>
        </div>
        <div className="MHAWSectionFiveRight">
          <img
            className="PersonStrugglingMentally"
            src={PersonStrugglingMentally}
            alt="Person Struggling Mentally"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default MentalHealthAndWeight;
