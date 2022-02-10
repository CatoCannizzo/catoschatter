import React from "react";
import NamePicker from "./NamePicker";

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "CHATTER!",
		};
		// this.changeTitle = this.changeTitle.bind(this);
	}

	// componentDidMount() {}
	// changeTitle = () => {
	// 	this.setState({ text: "Cool title" });
	// };

	render() {
		return (
			<header className="header">
				<div className="logo" />
				<span className="title">{this.state.text}</span>
				<NamePicker name={this.props.name} setName={this.props.setName} />
			</header>
		);
	}
}
