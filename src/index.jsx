import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import devTools from 'redux-devtools-extension';

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const store = createStore(rootReducer, devTools);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
