import "./App.css";
import TextInput from "./TextInput";
import { useState } from "react";
import Message from "./Message";

//React component (Custom element for our entire react chat app)
function App() {
	//useState creates a 'magic' variable, here, called messages (The difference here is State create a nonstandard variable)
	//the initial value is an empty array
	//also creates a function called setMessages that updates this variable
	const [messages, setMessages] = useState([]); //sets up messages as a state & setMessages as function

	//"sendsMessage runs whenever we click the send button"
	function sendMessage(text) {
		//checks to make sure there is text being sent before continuing this function
		if (!text) return;
		//creates a new message object
		const newMessage = {
			text,
			time: Date.now(),
			user: "Cato",
		};
		//set the messages to be a new array that contains the new message + the old messages
		setMessages([newMessage, ...messages]); //the ... is called a spread all items from old array + new array
	}
	//everytime state changes, React re-renders running everything in this main app again.

	//Finally we return HTML
	return (
		<div className="App">
			<header className="header">
				<div className="logo" />
				<span className="title">CHATTER!</span>
			</header>
			<div className="messages">
				{messages.map((msg, i) => {
					//blue curlies mean we jump to javascript
					//here we loop over every message in the 'messages' array and return a message component
					//This means map is a loop

					//we are spreading all the itesm in msg into the props
					//key needs to be a unique calue for each item
					return <Message {...msg} key={i} />;
				})}
			</div>
			{/*the sendMessage prop on TextInput = sendMessage function (thing in blue) Here we have them the same so for accessibility*/}
			<TextInput sendMessage={sendMessage} />
		</div>
	);
}

export default App;
