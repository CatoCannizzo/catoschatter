//Modal.js
import React, { useRef } from "react";
//import ReactDom from "react-dom";

//my saving grace https://stackoverflow.com/questions/62502954/how-to-create-reusable-custom-modal-component-in-react
export const Modal = ({ Warning, setShowModal }) => {
	// close the modal when clicking outside the modal.
	const modalRef = useRef();
	const closeModal = (e) => {
		if (e.target === modalRef.current) {
			setShowModal(false);
		}
	};
	//render the modal JSX in the portal div.
	return (
		//ReactDom.createPortal(
		<div className="container" ref={modalRef} onClick={closeModal}>
			<div className="modal">
				<h2>Error: </h2>
				{Warning}
				<button onClick={() => setShowModal(false)}>X</button>
			</div>
		</div> //,
		//document.getElementById("portal")
	);
};
