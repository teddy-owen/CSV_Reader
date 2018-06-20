import React from 'react';
import FilterList from './FilterList';
import  {connect} from 'react-redux';
import {updateFilterInput,clearFilterInput,addFilter} from '../actions/actionCreators';

const Filter = ({filterInput,firstData,updateFilterInput,addFilter}) => {

	const catOptions = Object.keys(firstData).map((cat,index) => (<option key={index}>{cat}</option>));

	return (
		<div>
			
			<h2>{}</h2>
			<form onSubmit={(e) => e.preventDefault()} className="form-inline">

				<label className="text-light mx-3">Filter By:</label>
			    <select onChange={updateFilterInput} value={filterInput.by} className="custom-select rounded mx-3" name="by" id="by">
			    	{catOptions}
			    </select>

				
			    <select onChange={updateFilterInput} value={filterInput.on} className="custom-select rounded mx-3" name="on" id="on">
			    	<option value="inc">{'Includes'}</option>
			    	<option value="dni">{'Does not include'}</option>
			    	<option >{'='}</option>
			    	<option >{'!='}</option>
			    	<option >{'>'}</option>
			    	<option >{'<'}</option>
			    	<option >{'>='}</option>
			    	<option >{'<='}</option>
			    </select>

			  
			  <input onChange={updateFilterInput} value={filterInput.string} type="text" className="form-control mx-3" name="string" id="string" placeholder="Filter Search"/>


			  <button onClick={() => addFilter(filterInput,Object.keys(firstData)[0])} type="submit" className="btn btn-outline-info mx-3" >Filter</button>
			</form>

			<div className="mt-3">
				<FilterList/>
			</div>

		</div>

		);
};

function mapStateToProps(state){
	return{
		filterInput:state.filterInput,
		firstData:state.data[0],
	};
}


function mapDipsatchToProps(dispatch){
	return{
		updateFilterInput:(e) => dispatch(updateFilterInput({[e.target.name]:e.target.value})),
		addFilter:(filter,defaultCol) => {
			dispatch(addFilter(filter));
			dispatch(clearFilterInput(defaultCol));
		},
	};
}

const FilterContainer = connect(mapStateToProps,mapDipsatchToProps)(Filter);

export default FilterContainer;