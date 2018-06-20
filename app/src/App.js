import React, { Component } from 'react';
import reactLogo from './img/react_logo.svg';
import reduxLogo from './img/redux_logo.svg';
import Filter from './components/Filter';
import Table from './components/Table';
import './App.css';
import  {connect} from 'react-redux';
import loader from './img/loader.gif'


class App extends Component {
  render() {
    return (
      <div className="App">

        <div className={this.props.loading ? '':'d-none' }>         
          <div className="load-background"></div>
          <img className="lds-blocks-svg" src={loader} alt="loading..." />
        </div>

        <div className="container">
          
          <div className="row">
            <div className="col mt-3">
              <img src={reactLogo} className="App-logo" alt="logo" />
              <img src={reduxLogo } className="App-logo" alt="logo" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col"></div>
            <div className="col-12  d-flex flex-row justify-content-center">
                <h1 className="text-light px-3 rounded border border-light">CSV Reader</h1>
            </div>
            <div className="col"></div>
          </div>


          <div className="row mt-5">
            <div className="col"></div>
            <div className="col-12  d-flex flex-row justify-content-center">
                <Filter/>
            </div>
            <div className="col"></div>
          </div>

          <div className="row mt-5">
            <div className="col-12 d-flex flex-row justify-content-center">
                <Table/>
            </div>
          </div>

        </div>

      </div>
    );
  }
}


function mapStateToProps(state){
  return{
    loading:state.loading,
  };
}


function mapDipsatchToProps(dispatch){
  return{
    // changeSort:(cat) => dispatch(changeSort(cat)),
  };
}

const AppContainer = connect(mapStateToProps,mapDipsatchToProps)(App);

export default AppContainer;
