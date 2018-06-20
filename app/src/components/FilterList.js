import React from 'react';
import  {connect} from 'react-redux';
import {deleteFilter} from '../actions/actionCreators';

const FilterList = ({filters,deleteFilter}) => {

	const rows = filters ? filters.map((filter,index) => (<tr key={filter.id}>
		<td>Filter {index+1}</td>
		<td>{`${filter.by} ${filter.on} ${filter.string}`}</td>
		<td className="py-2"><button data-id={filter.id} onClick={deleteFilter} className="btn btn-outline-danger border-0"><i className="far fa-trash-alt"></i></button></td>
	</tr>)) : null;

	return (

		<div>
			<table className="table-sm table-dark table-striped rounded w-100">
				<tbody>
					{rows}
				</tbody>
			</table>
		</div>


		);
};

function mapStateToProps(state){
	return{
		filters:state.filters,
	};
}


function mapDipsatchToProps(dispatch){
	return{
		deleteFilter:(e) => dispatch(deleteFilter(e.currentTarget.dataset.id)),
	};
}

const FilterListContainer = connect(mapStateToProps,mapDipsatchToProps)(FilterList);

export default FilterListContainer;