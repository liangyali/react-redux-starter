import React, {Component} from 'react';
import styles from './styles.less';

class PageContent extends Component {
  render() {
    return (
      <div className={styles.content}>{this.props.children}</div>
    );
  }
}

PageContent.propTypes = {
  children: React.PropTypes.object.isRequired
};

export default PageContent;
