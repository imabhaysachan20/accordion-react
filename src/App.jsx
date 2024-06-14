import { useState } from "react";
import data from "./data"
import Questions from "../questions";
const App = () => {
  const [questions,setQuestions] =useState(data);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id)=>{
  setActiveId(id);    
  }
  return <main> 
    <Questions question = {questions} activeId={activeId} toggleQuestion={toggleQuestion}/>
  </main>;
};
export default App;
