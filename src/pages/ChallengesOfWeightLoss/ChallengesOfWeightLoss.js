import React from "react";
import "./ChallengesOfWeightLoss.css";
import COWLLandingImage from "../../images/ChallengesOfWeightLossImages/COWLLandingImage.png";
import SetPointTheory from "../../images/ChallengesOfWeightLossImages/SetPointTheory.mp4";
import DiscussionQuestionsImage from "../../images/ChallengesOfWeightLossImages/DiscussionQuestionsImage.png";

function ChallengesOfWeightLoss() {
  return (
    <div className="ChallengesOfWeightLoss">
      <div className="COWLSectionOne">
        <div className="COWLSectionOneLeft">
          <h1 className="COWLSectionOneHeader">
            Weight Loss is Hard to Maintain
          </h1>
          <p className="COWLSectionOneParagraph">
            Learn how your body’s natural systems—like set points and metabolic{" "}
            <br></br>
            adaptation—work to keep your weight stable, which can make long-
            <br></br>term weight loss more difficult.
          </p>
        </div>{" "}
        <div className="COWLSectionOneRight">
          <img
            className="COWLLandingImage"
            src={COWLLandingImage}
            alt="Challenging Factors of Weight Loss"
          ></img>
        </div>
      </div>
      <div className="COWLSectionTwo">
        <p className="COWLSectionTwoParagraph">
          Weight loss can be really hard to maintain for a long time. One reason
          is that our bodies <br></br> prefer to maintain our weight
          consistently within a certain range, known as a “set point,” in{" "}
          <br></br> part because sudden large changes in weight could be a sign
          of danger (such as in a <br></br> famine).
        </p>

        <h2 className="COWLSectionTwoHeader">Set Point Theory</h2>

        <p className="COWLSectionTwoParagraph">
          The person begins at a stable weight, known as the initial "set
          point." This is the body's <br></br> preferred weight range where it
          maintains stability through metabolic and hormonal <br></br>{" "}
          mechanisms. For losing weight, the person may reduce calorie intake
          and increase their <br></br>
          physical activity. Initially, weight loss occurs as the body burns
          more calories than it <br></br>consumes.
          <br></br>
          <br></br>
          However, this triggers body’s mechanisms to protect it from the
          possible danger of <br></br> starvation. As a response, hormonal
          changes occur, such as increased hunger hormones <br></br> (ghrelin)
          and decreased fullness hormones (leptin). The metabolism also slows
          down to <br></br> conserve energy.
          <br></br>
          <br></br>
          Despite continued efforts, the weight loss slows or stops. This
          happens because the body <br></br> adjusts its energy expenditure and
          metabolism to resist further weight loss, aiming to <br></br>return to
          its "set point."
          <br></br>
          <br></br>
          Eventually the person might regain some of the lost weight or return
          to the original weight. <br></br> There are several reasons
          responsible for this such as:
        </p>

        <ul className="COWLSectionTwoList">
          <li className="COWLSectionTwoListItem">
            Increased hunger and cravings can lead to overeating.
          </li>
          <li className="COWLSectionTwoListItem">
            The lowered metabolic rate persists even if normal eating resumes.
          </li>
          <li className="COWLSectionTwoListItem">
            The body establishes a new, higher set point, making it harder to
            achieve the same weight loss.
          </li>
        </ul>

        <h3 className="COWLSectionTwoVideoHeader">Set Point Theory</h3>

        <video className="COWLVideo" autoPlay loop muted>
          <source src={SetPointTheory} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <h2 className="COWLSectionTwoHeader">Advice from Providers</h2>

        <div className="AdviceContainer">
          <div className="Advice">
            <div className="AdviceNumberBox"> 1</div>
            <p className="AdviceParagraph">
              <span style={{ fontWeight: "600" }}>Varied Approaches: </span>
              Incorporate a mix of dietary changes and exercise routines to
              prevent <br></br>the body from adapting too quickly.
            </p>
          </div>
          <div className="Advice">
            <div className="AdviceNumberBox"> 2</div>
            <p className="AdviceParagraph">
              <span style={{ fontWeight: "600" }}>Self Care: </span>
              Focus on overall health and well-being, not just the number on the
              scale.
            </p>
          </div>
          <div className="Advice">
            <div className="AdviceNumberBox"> 3</div>
            <p className="AdviceParagraph">
              <span style={{ fontWeight: "600" }}>
                Patience and Persistence:{" "}
              </span>
              Be patient with yourself as changing the set point can take time{" "}
              <br></br> and consistent effort.
            </p>
          </div>
        </div>

        <img
          className="DiscussionQuestionsImage"
          src={DiscussionQuestionsImage}
          alt="Discussion Questions"
        ></img>
      </div>
    </div>
  );
}

export default ChallengesOfWeightLoss;
