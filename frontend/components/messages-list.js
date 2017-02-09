import React, { Component } from "react";

import MessageListItem from "./message-list-item.js";

export default class MessagesList extends Component {
	
	render() {

	 	return (
	 			<ul>
		            {this.props.messages.map(function(message) {
		                return <MessageListItem key={message.id} title={message.title} id={message.id}/>
		            })}
		        </ul>
	 	);

	 }
}