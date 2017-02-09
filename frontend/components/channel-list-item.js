import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/appActions";

class ChannelListItem extends Component {
	
	render() {

	 	return (
	 		<li onClick={this.getMessagesFromChannel.bind(this)}>{this.props.title} <button className="remove-button" onClick={this.removeChannel.bind(this)}><i className="fa fa-times"></i></button></li>
	 	);

	 }

	 removeChannel(e) {
	 	//console.log(this.props.id);
	 	e.stopPropagation();
	 	this.props.deleteChannelsRequest(this.props.id);
	 }

	 getMessagesFromChannel() {
	 	this.props.sendGetNewsFromChannelRequest(this.props.url);
	 }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
    return {
        stateFromReducer: state
    };
}
const ChannelListItemConected = connect(mapStateToProps, mapDispatchToProps)(ChannelListItem);
export default ChannelListItemConected