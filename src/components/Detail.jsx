import React, {PropTypes} from 'react';

class Detail {
  render() {
    const style = {
      padding: '20px',
      fontSize: '24px'
    };
    return (
      <div style={style}>
        <button className="btn btn-list" onClick={() => this.context.router.goBack()}>
          返回
        </button>
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
};

export default Detail;
