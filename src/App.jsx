import { useState } from "react";
import data from "./data"
import Questions from "../questions";
const App = () => {
  const [questions,setQuestions] =useState(data);
  return <main> 
    <Questions question = {questions}/>
  </main>;
};
export default App;
