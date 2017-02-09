import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/appActions";

class MessageListItem extends Component {
	
	render() {

	 	return (
	 		<li onClick={this.selectMessage.bind(this)}>{this.props.title}</li>
	 	);

	 }

	 selectMessage() {
	 	this.props.selectMessage(this.props.id);
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
const MessageListItemConected = connect(mapStateToProps, mapDispatchToProps)(MessageListItem);
export default MessageListItemConected