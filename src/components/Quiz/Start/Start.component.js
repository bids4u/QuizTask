import React, { useState } from "react";
import "./Start.component.css";
import questions from "./../../../util/question";
import Question from "./../../Common/Question/Question";
import { Heading,Button } from "@chakra-ui/react";
import { useHistory } from "react-router";

function Start() {
  const [next, setNext] = useState(0);
  const [result, setResult] = useState(0);
  const [display, setDisplay] = useState(false);
  const history = useHistory()
  const question = questions;
  const setN = () => {
    if (!(next === question.length - 1)) {
      setNext((prevSate) => prevSate + 1);
    } else {
      setDisplay(true);
    }
  };
  const res = () => {
    setResult((prevState) => prevState + 1);
  };
  const restart =()=>{
      setNext(0);
      setResult(0);
      setDisplay(false);
      history.push('/home')
  }
  return (
    <div className="start">
      {display ? (
        <div className="score">
          <Heading as="h3" size="lg">
            You scored {result} out of {question.length}
          </Heading>
          <Button onClick={restart}>Back to Home</Button>
        </div>
      ) : (
        <Question  quest={question[next]} setN={setN} next={next} res={res} />
      )}
    </div>
  );
}

export default Start;
