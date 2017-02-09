import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/appActions";

import sweetalert from "sweetalert";
import PieChart from "react-simple-pie-chart";
import Modal from "react-modal";

import "../common/styles/sweetalert.css";

import ChannelsList from "./channels-list";
import MessagesList from "./messages-list";
import ViewMessage from "./view-message";

import {NAME_MIN_LENGTH, NAME_MAX_LENGTH, URL_PATTERN} from "../../backend/config/constants";

class TestTaskApp extends Component {
	
	render() {

		const {channels } = this.props.stateFromReducer;
		const {currentMessages } = this.props.stateFromReducer;
		const {currentMessage } = this.props.stateFromReducer;
		const {authors } = this.props.stateFromReducer;
		const {windowIsOpen} = this.props.stateFromReducer;

		const slices=[
				 {
					color: "#f00",
					value: this.props.stateFromReducer.latinLetters
				 },
				 {
					color: "#0f0",
					value: this.props.stateFromReducer.allLetters
			     }
			 ];

		const customStyle = {
			content : {
			        width: "300px",
				    margin: "0 auto",
				    marginTop: "50px",
				    position: "static",
				    borderRadius: "6px",
				    padding: "0",
			  }
		};

	 	return (
	 		
	 		<div>
	 		    <div className="page-column">
					<Modal
						  isOpen={windowIsOpen}
						  contentLabel="Modal"
						  style={customStyle}
						>
						<div className="modal-header">
							<h4>Add channel</h4>
							<button className="close-button" onClick={this.closeWindow.bind(this)}><i className="fa fa-times"></i></button>
						</div>
					    <div className="modal-body">
						    <input type="text" placeholder="Name" name="name"/>
						    <input type="text" placeholder="URL" name="url"/>
					    </div>
					    <div className="modal-footer">
						    <button className="primary-button" onClick={this.addChannel.bind(this)}>Add</button>
					    </div>
					</Modal>	 		   
		 		   <h3>Channels</h3>
		 		    <button className="add-button" onClick={this.openWindow.bind(this)}>Add channel<i className="fa fa-plus"></i></button>	 		    
		 		    <ChannelsList channels={channels}/>
	            </div>
	            <div className="page-column">
		            <h3>Messages</h3>
		            <MessagesList messages={currentMessages}/>
	            </div>
	            <div className="page-column">
		            <h3>Current Message</h3>
		            <ViewMessage message={currentMessage}/>
	            </div>
	            <div className="page-column">
		            <h3>Statistics</h3>
		            <h4>General Statistics</h4>
		            <p>Channels count: {channels.length}</p>
		            <h4>By selected channel</h4>
		            <p>Messages count: {currentMessages.length}</p>
		            <p>Authors count: {authors}</p>
		            <h4>By selected message</h4>
		            <p>Ratio of latin characters to all characters</p>
		            <div className={"" + (!currentMessage ? "not-display" : "")}>
			            <div>
				            <div className="red-square"></div> - Latin characters
				        </div>
				        <div>
				            <div className="green-square"></div> - All characters
				        </div>
			            <PieChart
						  slices={slices}
						/>
					</div>
	            </div>
            </div>
	 	);

	 }

	isValidUrl(url) {
	  
		const pattern = new RegExp(URL_PATTERN);
		if(!pattern.test(url)) 
		    return false;
	  
		return true;
	}

	 closeWindow() {
	 	this.props.openOrCloseWindow(false);
	 }

	 openWindow(e) {
	 	//remove focus from button
		e.target.blur();
		this.props.openOrCloseWindow(true);
	 }

	addChannel() {
		 
		let name = document.querySelector("input[name=name]").value;

		if (name.length < NAME_MIN_LENGTH || name.length > NAME_MAX_LENGTH) {

		 	sweetalert({
                 title: "Name cannot be less than " + NAME_MIN_LENGTH + " and greater than " + NAME_MAX_LENGTH + " characters!",
                 type: "warning"
            });

            return;
		}

		let url = document.querySelector("input[name=url]").value;

		if (!this.isValidUrl(url)) {

		  	sweetalert({
                 title: "Invalid URL!",
                 type: "warning"
            });

            return;
		}

		//close window
		this.props.openOrCloseWindow(false);
		this.props.addNewChannelRequest({title: name, url: url});

	}

	removeFocus(e) {
		e.target.blur();
	}

	getNews(channelId, url){
	 	this.props.sendGetNewsFromChannelRequest(channelId, url);
	}

	componentWillMount() {
		this.props.getAllChannelsRequest();
	}

	componentWillUnmount() {

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
const TestTaskAppConected = connect(mapStateToProps, mapDispatchToProps)(TestTaskApp);
export default TestTaskAppConected