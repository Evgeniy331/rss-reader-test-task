import axios from "axios";

export const GET_NEWS_FROM_CHANNEL_REQUEST = "GET_NEWS_FROM_CHANNEL_REQUEST";
export const GET_NEWS_FROM_CHANNEL_REQUEST_ERROR = "GET_NEWS_FROM_CHANNEL_REQUEST_ERROR";
export const NEWS_RECEIVED = "NEWS_RECEIVED";
export const GET_ALL_CHANNELS_REQUEST = "GET_ALL_CHANNELS_REQUEST";
export const GET_ALL_CHANNELS_REQUEST_ERROR = "GET_ALL_CHANNELS_REQUEST_ERROR";
export const CHANNELS_RECEIVED = "CHANNELS_RECEIVED";
export const SELECT_MESSAGE = "SELECT_MESSAGE";
export const DELETE_CHANNEL_FROM_STATE = "DELETE_CHANNEL_FROM_STATE";
export const DELETE_CHANNEL_REQUEST = "SEND_DELETE_CHANNEL_REQUEST";
export const DELETE_CHANNEL_REQUEST_ERROR = "SEND_DELETE_CHANNEL_REQUEST";
export const OPEN_OR_CLOSE_WINDOW = "OPEN_OR_CLOSE_WINDOW";
export const ADD_CHANNEL_REQUEST = "ADD_CHANNEL_REQUES";
export const ADD_CHANNEL_REQUEST_ERROR = "ADD_CHANNEL_REQUEST_ERROR";
export const CHANNEL_WAS_ADDED = "CHANNEL_WAS_ADDED";

export function addNewChannelRequest(reqBody) {

	return (dispatch, getStore) => {

		dispatch({ type: ADD_CHANNEL_REQUEST });

		return axios.post("/api/channel/", reqBody)
		.then(response => {
			dispatch(channelWasAdded(response.data));
		})
		.catch(response => {
			dispatch(addNewChannelRequestError(response));
		});

	};
}

export function channelWasAdded(data) {

	return {
		type: CHANNEL_WAS_ADDED,
		data
	};
}

export function addNewChannelRequestError(error) {

	return {
		type: ADD_CHANNEL_REQUEST_ERROR,
		error
	};
}

export function openOrCloseWindow(isOpen) {

	return {
		type: OPEN_OR_CLOSE_WINDOW,
		isOpen
	};
}


export function deleteChannelFromState(id) {

	return {
		type: DELETE_CHANNEL_FROM_STATE,
		id
	};
}

export function deleteChannelsRequest(id) {

	return (dispatch, getStore) => {

		dispatch({ type: DELETE_CHANNEL_REQUEST });

		return axios.delete("/api/channel/" + id)
		.then(response => {
			dispatch(deleteChannelFromState(id));
		})
		.catch(response => {
			dispatch(deleteChannelsRequestError(response));
		});

	};
}

export function deleteChannelsRequestError(id) {
}

export function selectMessage(id) {

	return {
		type: SELECT_MESSAGE,
		id
	};
}

export function getAllChannelsRequest(url) {

	return (dispatch, getStore) => {

		dispatch({ type: GET_ALL_CHANNELS_REQUEST });

		return axios.get("/api/channel")
		.then(response => {
			dispatch(channelsReceived(response.data));
		})
		.catch(response => {
			dispatch(getAllChannelsRequestError(response));
		});

	};
}

export function getAllChannelsRequestError(error) {
	
	return {
		type: GET_ALL_CHANNELS_REQUEST_ERROR,
		error
	};
}

export function channelsReceived(channels) {

	return {
		type: CHANNELS_RECEIVED,
		channels
	};
}

export function sendGetNewsFromChannelRequest(url) {


	return (dispatch, getStore) => {

		dispatch({ type: GET_NEWS_FROM_CHANNEL_REQUEST });

		return axios.post("/api/message", {url: url})
		.then(response => {
			dispatch(newsReceived(response.data));
		})
		.catch(response => {
			dispatch(sendGetNewsFromChannelRequestError(response));
		});

	};
}

export function sendGetNewsFromChannelRequestError(error) {
	
	return {
		type: GET_NEWS_FROM_CHANNEL_REQUEST_ERROR,
		error
	};
}

export function newsReceived(news) {

	return {
		type: NEWS_RECEIVED,
		news
	};
}