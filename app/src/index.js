import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import data from './data/laborCodes.json';
import rootReducer from './reducers/reducers';

const initState = {
	data:data,

	filterInput:{
			by:Object.keys(data[0])[0],
			on:'inc',
			string:'',
	},
	
	sort:{
		item:Object.keys(data[0])[0],
		reverse:false,
	},

	filters:[],

	loading:false,
};


export const store = createStore(rootReducer,initState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
