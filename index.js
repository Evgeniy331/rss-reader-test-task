import React from "react"
import { render } from "react-dom"
import App from "./frontend/containers/app"
import TestTaskApp from "./frontend/components/app"

import {IndexRoute, Route, Router, browserHistory} from "react-router";

import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import logger from "redux-logger"
import thunk from "redux-thunk"

import reducer from "./frontend/reducers/appReducer"

const middleware = [ thunk ]

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

render(
    (<Provider store={store}>
    	<Router history={browserHistory}>
	        <Route path="/" component={App}>
		         <IndexRoute component={TestTaskApp} />
	        </Route>
	    </Router>
    </Provider>)
    , document.getElementById("root")
)
