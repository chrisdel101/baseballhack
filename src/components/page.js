import React from "react";
import ReactDOM from 'react-dom';
import Card from '../components/card'
import '../App.css';



class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
            <div className="page">
                <Card image="https://securea.mlb.com/mlb/images/players/head_shot/592885.jpg"/>
                <Card />
            </div>
		)
	}
}
export default Page;
