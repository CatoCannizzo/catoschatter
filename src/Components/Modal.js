//Modal.js
import React, { useRef } from "react";
import ReactDom from "react-dom";
import "./Modal.css";

//my saving grace https://javascript.plainenglish.io/how-to-create-a-popup-modal-in-react-39315907998e
export const Modal = ({ Warning, setShowModal }) => {
	// close the modal when clicking outside the modal.
	const modalRef = useRef();
	const closeModal = (e) => {
		if (e.target === modalRef.current) {
			setShowModal(false);
		}
	};
	//render the modal JSX in the portal div.
	return ReactDom.createPortal(
		<div className="container" ref={modalRef} onClick={closeModal}>
			<div className="modal">
				<h2>Error: </h2>
				{Warning}
				<button onClick={() => setShowModal(false)}>X</button>
			</div>
		</div>,
		document.getElementById("portal")
	);
};
