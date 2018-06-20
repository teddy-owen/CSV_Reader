import {UPDATE_DATA,UPDATE_FILTER_INPUT, CLEAR_FILTER_INPUT,ADD_FILTER,DELETE_FILTER,DELETE_ALL_FILTERS,CHANGE_SORT,LOAD_TOGGLE} from './actions'

function updateData(dataJSON){
	return{
		type:UPDATE_DATA,
		dataJSON,
	};
}

function updateFilterInput(filterInput){
	return{
		type:UPDATE_FILTER_INPUT,
		filterInput,
	};
}

function clearFilterInput(defaultCol=""){
	return{
		type:CLEAR_FILTER_INPUT,
		defaultCol,
	};
}

function addFilter(filter){
	return{
		type:ADD_FILTER,
		filter
	};
}

function deleteFilter(id){
	return{
		type:DELETE_FILTER,
		id
	};
}

function deleteAllFilters(){
	return{
		type:DELETE_ALL_FILTERS,
	};
}

function changeSort(cat){
	return{
		type:CHANGE_SORT,
		cat
	};
}

function loadToggle(){
	return{
		type:LOAD_TOGGLE,
	};
}

export {updateData,updateFilterInput,clearFilterInput,addFilter,deleteFilter,deleteAllFilters,changeSort,loadToggle};