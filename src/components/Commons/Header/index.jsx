import React, {Component} from 'react';
import styles from './styles.less';
import classNames from 'classnames';

class Header extends Component {

  render() {
    return (
      <div className={styles.headerRow}>
        <div className={styles.main}>
          <i className="fa fa-shopping-bag"></i>
          <span>订单管理</span>
        </div>
        <div className={classNames(styles.buttons)}>
          <button className="btn btn-primary">添加商品</button>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  children: React.PropTypes.object.isRequired
};

export default Header;
