import {
    GET_NEWS_FROM_CHANNEL_REQUEST,
    GET_NEWS_FROM_CHANNEL_REQUEST_ERROR,
    NEWS_RECEIVED,
    GET_ALL_CHANNELS_REQUEST,
    GET_ALL_CHANNELS_REQUEST_ERROR,
    CHANNELS_RECEIVED,
    SELECT_MESSAGE,
    DELETE_CHANNEL_FROM_STATE,
    DELETE_CHANNEL_REQUEST,
    DELETE_CHANNEL_REQUEST_ERROR,
    OPEN_OR_CLOSE_WINDOW,
    ADD_CHANNEL_REQUEST_ERROR,
    CHANNEL_WAS_ADDED
} from "../actions/appActions";

const initialState = {
    channels: [],
    currentMessages: [],
    currentMessage: null,
    authors: 0,
    latinLetters : 0,
    allLetters: 0,
    windowIsOpen: false
};

export default function appReducer(state = initialState, action) {
    
    switch (action.type) {

        case CHANNEL_WAS_ADDED: {

            const {data} = action;

            data.id = data._id;

            state.channels.push(data);

             return Object.assign({}, state, {
                channels: state.channels
            })
        }

        case OPEN_OR_CLOSE_WINDOW: {

            const {isOpen} = action;

             return Object.assign({}, state, {
                windowIsOpen: isOpen
            })
        }

        case DELETE_CHANNEL_FROM_STATE: {

            const {id} = action;

            for (let i = 0; i < state.channels.length; i++) 
                if (state.channels[i].id === id) {
                    state.channels.splice(i, 1);
                    break;
                }

             return Object.assign({}, state, {
                channels: state.channels
            })
        }

        case SELECT_MESSAGE: {

            const {id} = action;

            let currentMessage = null;


            for (let i = 0; i < state.currentMessages.length; i++)
                if (id === state.currentMessages[i].id) {
                    currentMessage = state.currentMessages[i];
                    break;
                }
            
            let latinLetters = 0;
            let allLetters = 0;

            if (currentMessage) {
                
                //delete all symbols besides text letters
                //Well, almost all
                let description = currentMessage.description.replace(/[&\/\\#,+\-@()$~%.’'"“”«»;:*?! <>{}\0-9]/g, '').toLowerCase();
               
                
                for (let i = 0; i < description.length; i++)
                     if (description[i] >= 'a' && description[i]  <= 'z')
                        ++latinLetters;

                allLetters = description.length;
            }


            return Object.assign({}, state, {
                currentMessage: currentMessage,
                latinLetters: latinLetters,
                allLetters: allLetters
            })
        }

        case CHANNELS_RECEIVED: {

            const {channels} = action;

            for (let i = 0; i < channels.length; i++) {
                channels[i].id = channels[i]._id;
                channels[i].messages = [];
            }

            return Object.assign({}, state, {
                channels: channels
            })
        }

        case NEWS_RECEIVED: {

            const {news} = action;
            let messages = news.items.slice();

            const regExString = /(<([^>]+)>)/ig; 

            for (let i = 0; i < messages.length; i++) {
                messages[i].id = i+1;
                //delete html tags from description
                messages[i].description = messages[i].description.replace(regExString, "");
            }

            return Object.assign({}, state, {
                currentMessages: messages,
                authors: calculateUniqueAuthors(messages)
            })
        }

        case ADD_CHANNEL_REQUEST_ERROR: {

            console.log("ADD_CHANNEL_REQUEST_ERROR");
            return state;
        }

        case GET_ALL_CHANNELS_REQUEST_ERROR: {

            console.log("GET_ALL_CHANNELS_REQUEST_ERROR");
            return state;
        }

        case GET_NEWS_FROM_CHANNEL_REQUEST_ERROR: {

            console.log("GET_NEWS_FROM_CHANNEL_REQUEST_ERROR");
            console.log(action.error);

            return state;
        }

        default: {
            return state;        
        }
    }
}

function calculateUniqueAuthors(messages) {
    
    let authors = [];
    let isFound;

    for (let i = 0; i < messages.length; i++) {
        
        isFound = false;

        for (let j = 0; j < authors.length; j++) {
            
            if (messages[i].created === authors[j]) {
                isFound = true;
                break;
            }
        }

        if (!isFound)
            authors.push(messages[i].created);
    }

    return authors.length;
}