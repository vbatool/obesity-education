import React, { useState }  from "react";
import "./patientNarrative.css";
import WeightGift from "../../images/PatientNarrativeImages/WeightGift.png";
import GolfDisrespect from "../../images/PatientNarrativeImages/GolfDisrespect.png";
import FoodAdvice from "../../images/PatientNarrativeImages/FoodAdvice.png";
import ScreeningNotes from "../../images/PatientNarrativeImages/ScreeningNotes.png";
import firstpageSquiggle from "../../images/PatientNarrativeImages/firstpageSquiggle.png";
import firstpageSquiggle2 from "../../images/PatientNarrativeImages/firstpageSquiggle2.png";
import firstpageSquiggle3 from "../../images/PatientNarrativeImages/firstpageSquiggle3.png";
import closingWoman from "../../images/PatientNarrativeImages/closingWoman.png";
import Ellipse108 from "../../images/PatientNarrativeImages/Ellipse108.png";
import Ellipse109 from "../../images/PatientNarrativeImages/Ellipse109.png";
import Ellipse110 from "../../images/PatientNarrativeImages/Ellipse110.png";
import Ellipse111 from "../../images/PatientNarrativeImages/Ellipse111.png";
import Ellipse114 from "../../images/PatientNarrativeImages/Ellipse114.png";


const quotes = [
  {
    text: `"I had been going for migraines, horrible migraines, for a long time, and hadn't been really taken seriously and told, you know, just take this muscle relaxer. It's just stress. It's not really a migraine."`,
    author: "Anonymous 1",
  },
  {
    text: `"I recall having a conversation with him (my PCP) about PMS symptoms, and what I could do about them because they were getting out of control, and he told me he didn't believe in PMS"`,
    author: "Anonymous 2",
  },
  {
    text: `\ “the bad experience that I had made me not (want) to book the next appointment, or even when I was approached to schedule the subsequent appointment, I said, No, you know, I wasn't ready to follow up.”`,
    author: "Anonymous 3",
  },
];
function PatientNarrative() {
  const [index, setIndex] = useState(0);

  const nextQuote = () => setIndex((index + 1) % quotes.length);
  const prevQuote = () => setIndex((index - 1 + quotes.length) % quotes.length);
  return (
    <div className="PatientNarratives">

      <div className="PNSectionOne">
      <div className="PNHeaderWrapper">
    <img className="SquiggleLeft" src={firstpageSquiggle} alt="Decorative squiggle left" />
    { /*<img className="Ellipse110" src={Ellipse110} alt="ellipse 110" /> */}
    <img className="Ellipse109" src={Ellipse109} alt="ellipse 109" />
    <img className="Ellipse108" src={Ellipse108} alt="ellipse 109" />
    {/*<img className="Ellipse111" src={Ellipse111} alt="ellipse 111" />*/}
    <img className="SquiggleRight" src={firstpageSquiggle2} alt="Decorative squiggle right" />
    {/* <img className="Ellipse 114" src={Ellipse114} alt="ellipse 114" />  */}
    <div className="PNSectionOneHeader">Patient Narratives</div>
    
  </div>

        <div className="PNSectionOneParagraph">
          These are stories of dismissal, bias, resilience and advocating for oneself
        </div>
        <img className="SquiggleRight2" src={firstpageSquiggle3} alt="Decorative squiggle bottom right" />
      </div>

      <div className="PNSectionOneA">
        
        <div className="PNSectionOneAP">
        As part of our commitment to promoting patient-centered care, we gathered stories of women who seek care for weight management and other health conditions to better understand their experiences and how they navigate healthcare to get the care they deserve.
        </div>
        
      </div>

      

      <div className="PNSectionTwo">
        <h2 className="PNSectionTwoHeader">#1 Not taken seriously by providers</h2>
        <div className="QuoteCard">
          <p className="QuoteText">{quotes[index].text}</p>
          <p className="QuoteAuthor">{quotes[index].author}</p>
          <div className="QuoteControls">
            <button onClick={prevQuote} className="ArrowBtn">←</button>
            <span className="Pagination">{index + 1}/{quotes.length}</span>
            <button onClick={nextQuote} className="ArrowBtn">→</button>
          </div>
        </div>
      </div>
    




<div className="PNSection">
  <h2 className="PNSectionHeader">#2 Discrimination based on Weight</h2>

  <div className="PNQuoteRow">
    <div className="PNTextColumn">
      <div className="PNSubText">Lose weight as a retirement gift</div>
      <div className="PNQuoteBox">
      “And the last thing that he said to me, and he was very nice man, and he was very gentle with me when I first started seeing him as an adult, but the last thing he said to me was, you know, <strong>as a retirement gift to me, could you lose some weight?”</strong>
      </div>
   
      <p className="PNAuthor">Anonymous</p>
    </div>
    <img className="PNQuoteImage" src={WeightGift} alt="Weight loss gift quote" />
  </div>

  <div className="PNQuoteRow">
    <div className="PNTextColumn">
      <div className="PNSubText">Unwillingness to discuss weight</div>
      <div className="PNQuoteBox">
      “I remember one PCP who was very into golf, and he would make practice swings with his arms in the room like he was playing golf. And <strong>he was playing golf the whole time I was talking to him about my weight, </strong>and I felt like he was very disrespectful, very not paying attention to me,  not validating any of my concerns or my question about what do I do, and that he was I'm not taking it seriously, and I don't recall that we did anything about my weight”
      </div>
      <p className="PNAuthor">Anonymous</p>
    </div>
    <img className="PNQuoteImage" src={GolfDisrespect} alt="Doctor playing golf" />
  </div>

  <div className="PNQuoteRow">
    <div className="PNTextColumn">
      <div className="PNSubText">Generic advice for losing weight</div>
      <div className="PNQuoteBox">
        “In one of the visits I talked to the doctor, and it was more of like, Oh, watch what you eat, watch what you eat. What does that mean? <strong>Watch what you eat. People have different kinds of food that appeal to their taste, and your own taste might be different from mine. </strong>So watch what you eat doesn't cut it, yeah, because you do not know what kind of food that I eat, or even how much food I eat"
      </div>
      <p className="PNAuthor">Anonymous</p>
    </div>
    <img className="PNQuoteImage" src={FoodAdvice} alt="Fuming woman" />
  </div>
</div>






<div className="PNSectionFive">
  <h2 className="PNSectionFiveHeader">
    <span>#3</span> Navigating Healthcare
  </h2>

  <div className="PNSectionFiveGrid">
    <div className="PNCardBox">Researching about different providers and their approach to care</div>
    <div className="PNCardBox t-middle">Actively giving feedback to providers on their care delivery</div>
    <div className="PNCardBox">Refusing to get weight taken at every appointment</div>
  </div>

  <p className="PNSectionFiveText">
    Despite the different challenges within healthcare, women shared with us different actions they take to advocate for themselves
  </p>

  <div className="PNSectionFiveGrid">
    <div className="PNCardBox">Asking for a blanket to cover up while getting cancer screenings done</div>
    <div className="PNCardBox b-middle">Making use of their network to access higher quality services</div>
    <div className="PNCardBox">Actively discussing concerns associated with weight even if the providers are reluctant</div>
  </div>
</div>




<div className="PNSectionSix">
  <h3 className="PNSectionSixHeader">#4 Preventative Screening Motivation</h3>
  <p className="PNSectionSixText">
    Cancer screenings are known to be uncomfortable experiences and with the added instances of weight bias, individuals might feel discouraged to complete the necessary screenings. Despite these hurdles, the women we talked to remain regular with their screenings to stay on top of their health. They shared their personal motivations with us.
  </p>
  <img className="PNSectionSixImage" src={ScreeningNotes} alt="Quotes from women" />
</div>


<div className="MobileQuotes">
  <div className="MobileQuote pink">
    <div className="QuoteAuthor">Anonymous 1</div>
    <p>“My experience of working in geriatrics showed me a lot how preventative care could have saved hypertension, hyperlipidemia and diabetes. All of the things that just get worse with age.”</p>
  </div>

  <div className="MobileQuote purple">
    <div className="QuoteAuthor">Anonymous 2</div>
    <p>“My maternal great aunt died of cancer that had basically spread throughout her whole body because they didn't have the preventative care that could have picked it up.”</p>
  </div>

  <div className="MobileQuote yellow">
    <div className="QuoteAuthor">Anonymous 3</div>
    <p>“Ignorance is not bliss. In this case, knowledge is what’s needed. So no matter how uncomfortable it is for me, I will always keep going back.”</p>
  </div>
</div>











<div className="PNSectionSeven">
  <img className="PNSectionSevenImage" src={closingWoman} alt="Smiling woman" />
  <div className="PNSectionSevenContent">
    <h2>Want to share your story?</h2>
    <p>
      Whether it’s an anonymous written account or you are up for sharing your story in a video, we’d love to hear from you.
    </p>
    <button className="PNSectionSevenButton">Get in touch</button>
  </div>
</div>

    </div>
  ); }
export default PatientNarrative;

