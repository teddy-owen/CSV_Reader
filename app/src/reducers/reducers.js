import {combineReducers} from 'redux';
import {UPDATE_DATA,UPDATE_FILTER_INPUT, CLEAR_FILTER_INPUT,ADD_FILTER,DELETE_FILTER,DELETE_ALL_FILTERS,CHANGE_SORT,LOAD_TOGGLE} from '../actions/actions'

function data(state=[],action){
	switch(action.type){
		case UPDATE_DATA:
			return action.dataJSON

		default:
			return state;
	}
}

function filterInput(state={},action){
	switch(action.type){
		case UPDATE_FILTER_INPUT:
			const filterInput = action.filterInput; 
			return {
				...state,
				...filterInput,
			};

		case CLEAR_FILTER_INPUT:
			const defaultCol = action.defaultCol;
			return {
				by:defaultCol,
				on:'inc',
				string:'',
			};

		default:
			return state;
	}
	
}

function sort(state={},action){
	switch(action.type){
		case CHANGE_SORT:
			const cat = action.cat;
			const reverse = action.cat === state.item && ! state.reverse;
			return {
				item:cat,
				reverse:reverse,
			};

		default:
			return state;
	}
}


function filters(state=[],action){
	switch(action.type){
		case ADD_FILTER:
			const filter = action.filter;
			const id = state.slice(-1)[0] ? state.slice(-1)[0].id+1 : 0;
			return [...state,{...filter,id}];

		case DELETE_FILTER:
			return state.filter((filt) => filt.id !== Number(action.id));

		case DELETE_ALL_FILTERS:
			return [];
			
		default:
			return state;
	}
}

function loading(state=false,action){
	switch(action.type){
		case LOAD_TOGGLE:
			return !state;
			
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	data,
	filterInput,
	sort,
	filters,
	loading,
});

export default rootReducer;