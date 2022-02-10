import "./App.css";
import TextInput from "./Components/TextInput";
import { useState } from "react";
import Message from "./Components/Message";
import Camera from "react-snap-pic";
import NamePicker from "./Components/NamePicker";
import { Modal } from "./Components/Modal";
import "./Components/Modal.css";
import Header from "./Components/Header";
import { useDB, db } from "./db";

//React component (Custom element for our entire react chat app)
function App() {
	//useState creates a 'magic' variable, here, called messages (The difference here is State create a nonstandard variable)
	//the initial value is an empty array
	//also creates a function called setMessages that updates this variable
	const messages = useDB(); //sets up messages as a state & setMessages as function
	const [name, setName] = useState("");
	const [showCamera, setShowCamera] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [Warning, setWarning] = useState("");
	function takePicture(img) {
		console.log(img);
		setShowCamera(false);
	}
	//modal args froms https://javascript.plainenglish.io/how-to-create-a-popup-modal-in-react-39315907998e
	const openModal = () => {
		console.log("debugging sucks");
		setShowModal(true);
	};

	//"sendsMessage runs whenever we click the send button"
	function sendMessage(msgObj) {
		//checks to make sure there is text being sent before continuing this function
		if (!msgObj.text.trim()) {
			setWarning("Please enter valid message.");
			openModal();
			return;
		}
		if (!msgObj.user.trim()) {
			setWarning("Please enter valid name.");
			openModal();
			return;
		}

		//set the messages to be a new array that contains the new message + the old messages
		db.send(msgObj); //the ... is called a spread all items from old array + new array
	}
	//everytime state changes, React re-renders running everything in this main app again.

	//Finally we return HTML
	return (
		<div className="App">
			<div id="portal"></div>
			<Header name={name} setName={setName} />
			<div className="messages">
				{
					//blue curlies mean we jump to javascript
					//here we loop over every message in the 'messages' array and return a message component
					//This means map is a loop
				}
				{messages.map((msg, i) => {
					return <Message {...msg} key={i} fromMe={msg.user == name} />;
				})}
			</div>
			{showCamera && <Camera takePicture={takePicture} />}
			{showModal && <Modal Warning={Warning} setShowModal={setShowModal} />}

			{/*the sendMessage prop on TextInput = sendMessage function (thing in blue) Here we have them the same so for accessibility*/}
			<TextInput
				name={name}
				sendMessage={sendMessage}
				showCamera={() => setShowCamera(true)}
			/>
		</div>
	);
}

export default App;
