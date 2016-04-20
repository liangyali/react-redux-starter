import React, {PropTypes, Component} from 'react';
import styles from './style.css';

class Detail extends Component {
  doUpdate() {}

  render() {
    return (
      <div className={[styles.container]}>
        <button className="btn btn-primary" onClick={() => this.context.router.goBack()}>
          返回
        </button>
        <span>{JSON.stringify(this.props.params)}</span>
      </div>
    );
  }
}

Detail.PropTypes = {
  params: PropTypes.object.isRequired
};

Detail.contextTypes = {
  router: PropTypes.object.isRequired
};

export default Detail;
