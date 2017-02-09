import React, { Component } from "react";

export default class ViewMessage extends Component {
	
	render() {

		if (!this.props.message)
			return (
					<div></div>
			);

	 	return (
	 			<div className="message">
		 			<h4>{this.props.message.title}</h4>
	 			    <p>{this.props.message.description}</p>
	 			    <a 
		 			    href={this.props.message.link} 
		 			    target="_black" 
		 			    className="link-btn"
		 			>
			 			Link to the full news
			 		</a>
		        </div>
	 	);

	 }
}