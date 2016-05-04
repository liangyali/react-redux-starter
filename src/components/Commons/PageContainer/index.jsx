import React, {Component} from 'react';
import styles from './styles.less';

class PageContainer extends Component {

  render() {
    return (
      <div className={styles.content}>
        {this.props.children}
      </div>
    );
  }
}

PageContainer.propTypes = {
  children: React.PropTypes.object.isRequired
};

export default PageContainer;
