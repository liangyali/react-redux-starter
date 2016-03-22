import React, {
  Component,
  PropTypes
} from 'react';
import {
  connect
} from 'react-redux';
import TodoList from '../components/TodoList';

class App extends Component {
  componentDidMount() {
  }

  render() {
    return ( <div> <TodoList {...this.props} todos={[]}/><button onClick={this.props.update.bind(this)}>click</button> </div>)
    }
  }

  function mapStateToProps(state,ownProps) {
    return {
      todos:state.todos
    }
  }

  function mapDispatchToProps(dispatch,ownProps){
    return {
      update:()=>{
        dispatch({
          type:'FETCH_ALL'
        })
      }
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(App);
