import React, { useState, useRef, useEffect } from "react";
import "./Surveys.css";
import { Questions } from "./SurveyList";
import ScrollToTop from '../HomeComponent/Scroll-top';

export default function Surveys() {
  const [showSurvey, setSurvey] = useState(true);
  const [quest, setQuest] = useState(null);
  const [Opt, setOpt] = useState([]);
  const [nosurvey, setnosurvey] = useState(false);
  const [visibleQuestions, setVisibleQuestions] = useState(1);
  const questionRefs = useRef([]);

  useEffect(() => {
    const noSurveys = Questions.some(user => user.Surveys.length > 0);
    if (!noSurveys) {
      setnosurvey(true);
    }
  }, []);

  const Options = (questionIndex, selectedOption) => {
    const newOptions = [...Opt];
    newOptions[questionIndex] = selectedOption;
    setOpt(newOptions);

    setTimeout(() => {
      setVisibleQuestions(prev => Math.min(prev + 1, quest.questions.length));

      setTimeout(() => {
        if (questionRefs.current[questionIndex + 1]) {
          questionRefs.current[questionIndex + 1].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 200);
    }, 100);
  };

  const Submit = () => {
    setSurvey(true);

    const updatedQuestions = quest.questions.map((question, index) => {
      const options = { ...question.options };

      if (Opt[index] === 1 && options.option1) options.option1.op1count++;
      else if (Opt[index] === 2 && options.option2) options.option2.op2count++;
      else if (Opt[index] === 3 && options.option3) options.option3.op3count++;
      else if (Opt[index] === 4 && options.option4) options.option4.op4count++;

      return { ...question, options };
    });

    setQuest({ ...quest, questions: updatedQuestions });

    console.log("Updated Survey Results:", updatedQuestions);
  };

  const Open = (ind, index) => {
    setSurvey(false);
    setQuest({ ...Questions[ind].Surveys[index] });
    setOpt([]);
    setVisibleQuestions(1);
  };

  return (
    <div className="Surveys-page">
      <div className="container">
        <center>
          <h1 className="surveys-title" style={{ color: "black" }}>SURVEYS</h1>
          <h3 className="surveys-quote">Your opinions matter. Make them count!</h3>
        </center>
        {nosurvey ? (
          <div className="img-no">
            <img className="no-survey-img" src="/./no-survey-found.png" alt="no survey" />
          </div>
        ) : (
          <>
            {showSurvey ? (
              <>
                <ScrollToTop />
                <div className="survey-list">
                  {Questions.map((S, ind) =>
                    S.Surveys.map((q, index) => (
                      <div key={index} className="survey-card">
                        <h5>{q.surveyTopic}</h5>
                        <img className="get-img"
                          src="https://blogimage.vantagecircle.com/content/images/2019/04/blog-image-Employee-Engagement-Survey-01.png"
                          alt="surveys"
                          width={150}
                          height={150}
                          style={{ borderRadius: "10px" }}
                        />
                        <button className="get-start" onClick={() => Open(ind, index)}>
                          Get Started
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </>
            ) : (
              <div className="survey-detail">
                <ScrollToTop />
                <h1 className="quest-title"><b>{quest.surveyTopic}</b></h1>

                {quest.questions.map((q, index) => (
                  <div
                    key={index}
                    className={`question-item ${index < visibleQuestions ? "visible" : "hidden"}`}
                    ref={el => (questionRefs.current[index] = el)}
                  >
                    <p style={{ color: "white", fontSize: "20px", marginTop: "10px" }}>{q.question}</p>
                    <hr style={{ border: "2px solid white" }} />
                    <div className="options-list">
                      <button className={`option-button ${Opt[index] === 1 ? "selected" : ""}`}
                        onClick={() => Options(index, 1)}>
                        {q.options.option1.op1}
                      </button>
                      <button className={`option-button ${Opt[index] === 2 ? "selected" : ""}`}
                        onClick={() => Options(index, 2)}>
                        {q.options.option2.op2}
                      </button>
                      <button className={`option-button ${Opt[index] === 3 ? "selected" : ""}`}
                        onClick={() => Options(index, 3)}>
                        {q.options.option3.op3}
                      </button>
                      <button className={`option-button ${Opt[index] === 4 ? "selected" : ""}`}
                        onClick={() => Options(index, 4)}>
                        {q.options.option4.op4}
                      </button>
                    </div>
                  </div>
                ))}

                {visibleQuestions === quest.questions.length && (
                  <button className="submit-but" onClick={Submit}>
                    Submit
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
