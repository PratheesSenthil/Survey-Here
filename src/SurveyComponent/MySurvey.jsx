import React, { useEffect, useState } from "react";
import { Questions, login } from "./SurveyList"; 
import { Pie } from "react-chartjs-2";
import { Chart, Tooltip, Legend, ArcElement } from "chart.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './MySurvey.css';
import ScrollToTop from '../HomeComponent/Scroll-top';

Chart.register(Tooltip, Legend, ArcElement);

export default function MySurvey() {
  const [showSurvey, setSurvey] = useState(true);
  const [res, setResult] = useState(null);
  const [quest, setQuest] = useState([]);
  const [Nosurvey, setNosurvey] = useState(false);

  useEffect(() => {
    const finduser = Questions.findIndex(person => person.user === login.username);
    if (finduser !== -1) {
      setQuest(Questions[finduser].Surveys);
    }
  }, []);

  useEffect(() => {
    setNosurvey(quest.length === 0);
  }, [quest]);

  const remove = (index) => {
    const finduser = Questions.findIndex(person => person.user === login.username);
    if (finduser !== -1) {
      Questions[finduser].Surveys.splice(index, 1);
      setQuest([...Questions[finduser].Surveys]);
      setNosurvey(Questions[finduser].Surveys.length === 0);
      console.log(Questions);
      
    }
  };

  const Result = (index) => {
    const selectedSurvey = quest[index];
    console.log("Selected Survey:", selectedSurvey);
    setResult(selectedSurvey);
    setSurvey(false);
  };

  const generateChartData = (question) => {
    return {
      labels: question.options
        ? [
            question.options.option1.op1,
            question.options.option2.op2,
            question.options.option3.op3,
            question.options.option4.op4,
          ]
        : [],
      datasets: [
        {
          label: "Survey Results",
          data: question.options
            ? [
                question.options.option1.op1count,
                question.options.option2.op2count,
                question.options.option3.op3count,
                question.options.option4.op4count,
              ]
            : [0, 0, 0, 0], 
          backgroundColor: ['rgb(135, 206, 235, 0.6)', 'rgb(144, 238, 144)', 'rgb(250, 128, 114)', 'rgb(255, 215, 0, 0.8)'],
          hoverOffset: 4,
        },
      ],
    };
  };

  return (
    <div>
      <div className="my-survey-list ">
        <center>
          <h1 className="mystitle">MY SURVEY</h1>
          <h3 className="mysquote">Insights that matter. See what your audience thinks!</h3>
        </center>
        {showSurvey ? (
          <>
            <ScrollToTop />
            {Nosurvey ? (
              <div className="nosurvey">
                <img className="nosur-img" src="./NoSur.png" alt="no survey" />
              </div>
            ) : (
              <div className="d-flex flex-wrap justify-content-center my-sur-flex ">
                {quest.map((q, index) => (
                  <div className="m-5 p-5 surv" key={index}>
                    <p style={{ color: "white" }}>{q.surveyTopic}</p>
                    <button className="rem-but" onClick={() => remove(index)}>Remove</button>
                    <button className="res-but" onClick={() => Result(index)}>Show Results</button>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            <div className="survey-res">
              <ScrollToTop />
              <h1 className="res-topic">{res.surveyTopic}</h1>
              <div className="charts">
                {res.questions.map((question, index) => {
                  const chartData = generateChartData(question);
                  const allZero = chartData.datasets[0].data.every(count => count === 0);

                  return (
                    <div key={index} className="question-chart">
                      <h4 className="res-quest">{question.question}</h4>
                      {allZero ? (
                        <>
                          <p className="no-sur-para">No one took this survey yet</p>
                          <img className="no-data-img" src="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150570252.jpg" alt="no data" />
                        </>
                      ) : (
                        <Pie data={chartData} />
                      )}
                    </div>
                  );
                })}
              </div>
              <button className="back" onClick={() => setSurvey(true)}>Back to Surveys</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
