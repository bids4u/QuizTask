import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import './Question.css';
import array from './../../../util/random';
import { notify } from "./../../../util/toastr";


function Question({ quest, setN, next,res }) {
  const [answer, setAnswer] = useState({answerText:''});
  const [select, setSelect] = useState(false)
  const [correct, setCorrect] = useState('')
  const checkAnswer = () => {
    if(answer){
      if (answer.isCorrect) {
        //console.log("correct answer");
        setCorrect("correct answer");
        res();
      } else {
        //console.log("wrong answer");
        setCorrect("wrong answer");
      }
      setSelect(true)
    }else{
      notify.showWarnings('Please Select One Option ')
    }
  };
  const setAns =(it)=>{
    setAnswer(it)
  }
  //console.log(quest);
  return (
    <div className="question">
    <p className="question_p">{next+1}. {quest.questionText}</p>
    <div className="allOption">
    {
      array.map((item,index)=>
        <div key={index} onClick={()=>setAns(quest.answerOptions[item])}   className={(quest.answerOptions[item].isCorrect && select)?"orange":"option"}>
          {quest.answerOptions[item].answerText}
        </div>
      )
      
    }
      {/* {quest.answerOptions.map((item, index) => (
        <div onClick={()=>setAns(item)} key={index}  className={item.isCorrect && select?"orange":"option"}>
          {item.answerText}
        </div>
      ))} */}
    </div>
    {correct?<div className="correct">{correct}</div>:null}
      <div>
      {select?<Button onClick={()=>{setN();setSelect(false);setCorrect('');setAnswer('');}}>Next</Button>:<Button onClick={checkAnswer}>Submit</Button>}
      </div>
    </div>
  );
}

export default Question;
