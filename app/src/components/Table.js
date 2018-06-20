import React from 'react';
import Row from './Row';
import File from './File';
import  {connect} from 'react-redux';
import {changeSort} from '../actions/actionCreators';

const Table = ({data,filters,sort,tableFilter,tableSorter,changeSort}) => {

	const header = Object.keys(data[0]).map((cat,index) => (<th onClick={() => changeSort(cat)} key={index} className="table-header">
		{cat}
		<i className={'ml-2 fas ' + (sort.reverse ? 'fa-caret-down ':'fa-caret-up ') + (sort.item===cat ? '':'d-none ') }></i>
	</th>));

	const filteredData = tableFilter(data,filters);
	const sortedData = tableSorter(filteredData,sort);
	const rows = sortedData.map((item,index) => <Row key={index} obj={ item } /> );

	return (		


		<div className="w-100">


			<h4 className="float-left border border-info rounded">
				<span className="badge badge-info bg-transparent ">{filteredData.length} Results</span>
			</h4>
			
			<File/>

			<table className="table table-dark table-striped rounded">
				<thead>
					<tr>
						{header}
					</tr>
				</thead>
				<tbody>

					{rows}
				
				</tbody>
			</table>
		</div>

		);
};

function tableFilter(data,filters){
	if(!filters[0]){return data;}

	let by = filters[0].by;
	let on = filters[0].on;
	let string = filters[0].string;

	let newData = [];

	try{
		switch(on){
			case 'inc':
				newData = data.filter((item) => {
					return item[by].toLowerCase().includes(string.toLowerCase());
				});
				break;
			case 'dni':
				newData = data.filter((item) => {
					return ! item[by].toLowerCase().includes(string.toLowerCase());
				});
				break;
			case '=':
				newData = data.filter((item) => {
					let curr = isNaN(item[by]) ? item[by].toLowerCase():Number(item[by]);
					if(typeof curr === "string"){
						return curr === string.toLowerCase();
					}else if(typeof curr === "number"){
						return curr === Number(string.toLowerCase());
					}
					return false;
				});
				break;
			case '!=':
				newData = data.filter((item) => {
					let curr = isNaN(item[by]) ? item[by].toLowerCase():Number(item[by]);
					if(typeof curr === "string"){
						return !(curr === string.toLowerCase());
					}else if(typeof curr === "number"){
						return !(curr === Number(string.toLowerCase()));
					}
					return false;
				});
				break;
			case '>':
				newData = data.filter((item) => {
					let curr = isNaN(item[by]) ? item[by].toLowerCase():Number(item[by]);
					if(typeof curr === "string"){
						return (curr > string.toLowerCase());
					}else if(typeof curr === "number"){
						return (curr > Number(string.toLowerCase()));
					}
					return false;
				});
				break;
			case '<':
				newData = data.filter((item) => {
					let curr = isNaN(item[by]) ? item[by].toLowerCase():Number(item[by]);
					if(typeof curr === "string"){
						return (curr < string.toLowerCase());
					}else if(typeof curr === "number"){
						return (curr < Number(string.toLowerCase()));
					}
					return false;
				});
				break;
			case '>=':
				newData = data.filter((item) => {
					let curr = isNaN(item[by]) ? item[by].toLowerCase():Number(item[by]);
					if(typeof curr === "string"){
						return (curr >= string.toLowerCase());
					}else if(typeof curr === "number"){
						return (curr >= Number(string.toLowerCase()));
					}
					return false;
				});
				break;
			case '<=':
				newData = data.filter((item) => {
					let curr = isNaN(item[by]) ? item[by].toLowerCase():Number(item[by]);
					if(typeof curr === "string"){
						return (curr <= string.toLowerCase());
					}else if(typeof curr === "number"){
						return (curr <= Number(string.toLowerCase()));
					}
					return false;
				});
				break;
			default:
				break;
		}
		return tableFilter(newData,filters.slice(1));
	}
	catch(error){
		console.error(`By: ${by} On:${on} String:${string} \n ${error}`);
		return tableFilter(data,filters.slice(1));
	}

}

function tableSorter(data,sortObj){
	const sorted = data.sort((a,b) => {
	  let itemOne = a[sortObj.item];
	  let itemTwo = b[sortObj.item];
	  let reverse = sortObj.reverse ? -1:1;

	  if(typeof itemOne === "string" && typeof itemTwo === "string"){
		itemOne = isNaN(itemOne) ? itemOne.toLowerCase():Number(itemOne);
		itemTwo = isNaN(itemTwo) ? itemTwo.toLowerCase():Number(itemTwo);
	  }
      
      if (itemOne < itemTwo) {
	    return -1 * reverse;
	  }
	  if (itemOne > itemTwo) {
	    return 1 * reverse;
	  }else{
	  	return 0;
	  }
	
	});
	
	return sorted
}


function mapStateToProps(state){
	return{
		data:state.data,
		filters:state.filters,
		sort:state.sort,
		tableFilter:tableFilter,
		tableSorter:tableSorter,
	};
}


function mapDipsatchToProps(dispatch){
	return{
		changeSort:(cat) => dispatch(changeSort(cat)),
	};
}

const TableContainer = connect(mapStateToProps,mapDipsatchToProps)(Table);

export default TableContainer;