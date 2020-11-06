import React,{useState,useEffect} from 'react';
import HomePage from './HomePage';
import ChatbotContainer from './ChatbotContainer';
function App() {
  //use the state for showing chatbot or not 
  const [chatbot,setChatbot]=useState(false);
  //chatbot open
  function activeChatbot(){
    setChatbot(true);
  }
  //chatbot close
  function deActiveChatbot(){
    setChatbot(false);
  }
  return (
    <div className="App">
      <h1>Homepage</h1>
      {chatbot && <ChatbotContainer deActive={deActiveChatbot} />}
      {!chatbot && <HomePage active={activeChatbot} />}
    </div>
  );
}

export default App;
