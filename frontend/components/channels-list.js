import React, { Component } from "react";

import ChannelListItem from "./channel-list-item.js";

export default class ChannelsList extends Component {
	
	render() {

	 	return (
	 			<ul>
		            {this.props.channels.map(function(channel) {
		                return <ChannelListItem key={channel.id} title={channel.title} url={channel.url} id={channel.id}/>
		            })}
		        </ul>
	 	);

	 }
}