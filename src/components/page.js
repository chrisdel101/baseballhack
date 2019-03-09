import React from "react";
import Card from "./card";

class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (<div className="card-container">
			<Card/>
		</div>)
	}
}
export default Page;
