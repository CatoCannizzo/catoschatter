import "./App.css";
import TextInput from "./Components/TextInput";
import { useState } from "react";
import Message from "./Components/Message";
import Camera from "react-snap-pic";
import { Modal } from "./Components/Modal";
import "./Components/Modal.css";
import Header from "./Components/Header";
import { useDB, db } from "./db";

import {
	BrowserRouter,
	Routes,
	Route,
	useParams,
	Link,
} from "react-router-dom";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route
					path="/Page1"
					element={<div style={{ color: "black" }}>Page1</div>}
				/>
				<Route path=":room" element={<App />} />
			</Routes>
		</BrowserRouter>
	);
}

//React component (Custom element for our entire react chat app)
function App() {
	//if the params is empty (the : above means ANYTHING after /)
	//default to home (which is /)
	const params = useParams();
	const room = params.room || "home";
	const messages = useDB(room);
	const myName = localStorage.getItem("name") || "";

	const [name, setName] = useState(myName);
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

		db.send(msgObj);
	}
	//everytime state changes, React re-renders running everything in this main app again.

	//Finally we return HTML
	return (
		<div className="App">
			<div id="portal"></div>
			<Header name={name} setName={setName} />
			<Link to="/room1">room1</Link>

			<div className="messages">
				{
					//blue curlies mean we jump to javascript
					//here we loop over every message in the 'messages' array and return a message component
					//This means map is a loop
				}
				{messages.map((msg, i) => {
					return (
						<Message
							{...msg}
							key={i}
							fromMe={msg.user == name}
							noName={!msg.user}
						/>
					);
				})}
			</div>
			{showCamera && <Camera takePicture={takePicture} />}
			{showModal && <Modal Warning={Warning} setShowModal={setShowModal} />}

			{/*the sendMessage prop on TextInput = sendMessage function (thing in blue) Here we have them the same so for accessibility*/}
			<TextInput
				room={room}
				name={name}
				sendMessage={sendMessage}
				showCamera={() => setShowCamera(true)}
			/>
		</div>
	);
}
