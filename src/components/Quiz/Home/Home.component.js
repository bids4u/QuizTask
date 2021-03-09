import React from "react";
import "./Home.component.css";
import { Heading, Button, Box,Center } from "@chakra-ui/react";
import { useHistory } from "react-router";

function Home() {
  const history = useHistory('/start')
  const onStart=()=>{
    history.push('/start')
  }
  return (
    <div className="home">
      <Box margin="5%" >
      <Center>
      <Heading as="h3" size="lg">
        Instruction To Follow
      </Heading>
      </Center>
      <Center>
      <ul className="inst">
        <li>There are total 10 questions.</li>
        <li>These questions are basic GK question.</li>
        <li>Select anyone option out of four options.</li>
        <li>Check your total score at the end.</li>
      </ul>
      </Center>
      <Center>
      <Button onClick={onStart} size="lg" m="4%" bg="tomato">
        Click Here to start your quiz
      </Button>
      </Center>
      
      </Box>
    </div>
  );
}

export default Home;
