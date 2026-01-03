
import React, { useState } from "react";
import { Questions,login} from "./SurveyList";
import "./Create.css";
import { useActionData } from "react-router-dom";


export default function CreateSurvey() {
  const [surveyTopic, setSurveyTopic] = useState("");
  const [addedquest,setaddedquest]= useState(false)
  const [question, setQuestion] = useState("");
  const [errorSurveyTopic,seterrorSurveyTopic]= useState(null)
  const [options, setOptions] = useState({
    option1: { op1: "", op1count: 0 },
    option2: { op2: "", op2count: 0 },
    option3: { op3: "", op3count: 0 },
    option4: { op4: "", op4count: 0 },
  });
  const [questions, setQuestions] = useState([]);

  const handleAddClick = (event) => {
    event.preventDefault();
    if (
      !question.trim() ||
      Object.values(options).some((opt) => !opt[`op${Object.keys(opt)[0].slice(-1)}`]?.trim())
    ) {
      alert("Please fill out the question and all options.");
      return;
    }

    const newQuestion = { question, options };
    setQuestions([...questions, newQuestion]);
    setQuestion("");
    setOptions({
      option1: { op1: "", op1count: 0 },
      option2: { op2: "", op2count: 0 },
      option3: { op3: "", op3count: 0 },
      option4: { op4: "", op4count: 0 },
    });
    alert("Question added successfully!");
    setaddedquest(true);
  };

  const handleAddSurvey = () => {
    if( surveyTopic.length<=18){
      if (!surveyTopic.trim()|| questions.length === 0) {
        alert("Please complete all survey details and add at least one question.");
        return;
      }
      const Surveys = [{ surveyTopic, questions }];
      const user=login.username;
      const finduser=Questions.findIndex(person=>person.user===user);
      console.log(finduser);
      if(finduser!=-1){
        Questions[finduser].Surveys.push({surveyTopic,questions});
      }else{
        Questions.push({user,Surveys})
      }
      console.log(Questions);
      alert("Survey created successfully!");
      setSurveyTopic("");
      setQuestions([]);
      seterrorSurveyTopic(null)
    }else{
      seterrorSurveyTopic("Please enter a maximum of 18 characters")
    }
  };

  return (
    <>
    <div className="create-survey-page">
      <center>
        <h2 className="title">CREATE A SURVEY HERE</h2>
      </center>
      <div className="forms-flex">
        <div className="survey-topic animate" style={{textAlign:"center"}}>
          <div><h2 style={{color:"crimson"}} className="design">Design Your Perfect Survey</h2></div>
          <div><img className="sur-img" src="https://img.freepik.com/free-vector/feedback-survey-concept-illustration_114360-17632.jpg" alt="survey-image"></img></div>
          <div className="enter-sur">
            <h4>Enter the Survey Topic</h4>
            <input
              type="text"
              placeholder="Survey topic"
              value={surveyTopic}
              onChange={(e) => setSurveyTopic(e.target.value)}
            />
            {errorSurveyTopic&&<p className='errorsur'><span style={{fontSize:"20px"}}>!</span>  {errorSurveyTopic}</p>}
          </div>
          
        </div>
        <div className="question-form animate">
          <form onSubmit={handleAddClick}>
            <h3 style={{color:"bisque"}}>Add a Question</h3>
            <textarea
              placeholder="Write a question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            ></textarea>
            <h3 style={{color:"bisque"}}>Write the Options</h3>
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="option-input">
                <label>{`Option ${num}`}</label><br/>
                <input
                  type="text"
                  placeholder={`Enter option ${num}`}
                  value={options[`option${num}`][`op${num}`]}
                  onChange={(e) =>
                    setOptions({
                      ...options,
                      [`option${num}`]: {
                        ...options[`option${num}`],
                        [`op${num}`]: e.target.value,
                      },
                    })
                  }
                />
              </div>
            ))}
            <button className="addbut" type="submit">Add Question</button>
          </form>
        </div>
      </div>
        {addedquest?(<><div className="question-preview animate">
        <h3 style={{color:"black"}}>Added Questions</h3>
        <ul style={{  background: "transparent"}}>
          {questions.map((q, index) => (
            <li key={index}>
              <ul>
              <strong>Q{index + 1}:</strong> {q.question}
                {Object.values(q.options).map((opt, idx) => (
                  <li key={idx}>{Object.values(opt)[0]}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={handleAddSurvey}  className="add-sur-but" >Add the Created Survey</button>
      </div>
        </>):(<>
        <p className="noquest">No questions added</p>
        </>)}
    </div>
    </>
  );
}
