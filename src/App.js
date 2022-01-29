import "./App.css";
import TextInput from "./TextInput";
import { useState } from "react";
import Message from "./Message";

function App() {
  const [messages, setMessages] = useState([]); //sets up messages as a state & setMessages as function
  function sendMessage(text) {
    const newMessage = {
      text,
      time: Date.now(),
      user: "Cato",
    };
    setMessages([newMessage, ...messages]); //the ... is called a spread all items from old array + new array
  }

  return (
    <div className="App">
      <header className="header">
        <div className="logo" />
        <span className="title">CHATTER!</span>
      </header>
      <div className="messages">
        {messages.map((msg) => {
          return <Message {...msg} />;
        })}
      </div>
      <TextInput sendMessage={sendMessage} />
    </div>
  );
}

export default App;
