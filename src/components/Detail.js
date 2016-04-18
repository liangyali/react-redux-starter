import React, {PropTypes, Component} from 'react';

class Detail extends Component {
  render() {
    return (
      <div style={{
        padding: '20px',
        fontSize:'24px'
      }}>
        <button className='btn btn-list' onClick={() => this.context.router.goBack()}>返回ddsd</button>
        <span>{JSON.stringify(this.props.params)}</span>
      </div>
    );
  }
}

Detail.PropTypes = {
  todos: PropTypes.array.isRequired
};

Detail.contextTypes = {
  router: PropTypes.object.isRequired
}

export default Detail;
