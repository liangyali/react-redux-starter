import React, {Component} from 'react';
import styles from './styles.less';

class Content extends Component {
  render() {
    return (
      <div className={styles.content}>{this.props.children}</div>
    );
  }
}

Content.propTypes = {
  children: React.PropTypes.array.isRequired
};

export default Content;
