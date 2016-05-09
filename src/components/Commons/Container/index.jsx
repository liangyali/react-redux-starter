import React, {Component} from 'react';
import styles from './styles.less';

class Container extends Component {

  render() {
    return (
      <div className={styles.content}>
        {this.props.children}
      </div>
    );
  }
}

Container.propTypes = {
  children: React.PropTypes.array.isRequired
};

export default Container;
