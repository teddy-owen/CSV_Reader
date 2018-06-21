import React from 'react';
import  {connect} from 'react-redux';
import {updateData,clearFilterInput,deleteAllFilters,changeSort,loadToggle} from '../actions/actionCreators';


const File = ({data,readFile}) => {

	return (		

			<div>
				<div className="upload-btn-wrapper float-right mb-2">
				  <button className="btn btn-outline-success">CSV<i className="fas fa-upload ml-2"></i></button>
				  <input onChange={readFile}  type="file"/>
				</div>
			</div>

		);
};

function readFile(file,dispatch){
	if(!file){
		return;
	}
	console.log("loading...");
	dispatch(loadToggle());

	var reader = new FileReader();

	reader.onload = function(e) {
		var text = reader.result;

		var myWorker = new Worker('worker.js');
		myWorker.onmessage = (m) => {
			let jsonObj = m.data;
		    const defaultCol = Object.keys(jsonObj[0])[0];
		    dispatch(updateData(jsonObj));
		    dispatch(deleteAllFilters());
		    dispatch(changeSort(defaultCol));
		    dispatch(clearFilterInput(defaultCol));
			console.log("Done loading");
			dispatch(loadToggle());
		};
		myWorker.postMessage(text);

	}

	reader.readAsText(file);
}


function mapStateToProps(state){
	return{
		data:state.data,
	};
}


function mapDipsatchToProps(dispatch){
	return{
		readFile:(e) => readFile(e.target.files[0],dispatch),
	};
}

const FileContainer = connect(mapStateToProps,mapDipsatchToProps)(File);

export default FileContainer;