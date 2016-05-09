import React, {Component} from 'react';
import styles from './styles.less';
import classNames from 'classnames';

class Header extends Component {

  render() {
    return (
      <div className={classNames('container-fluid', styles.headerRow)}>
        <div className={styles.main}>
          <i className="fa fa-shopping-bag"></i>
          <span className={styles.breadcrumb}>
            <a>订单管理</a>
          </span>
        </div>
        <div className={styles.actions}>
          <button className="btn btn-primary">添加商品</button>
          <button className="btn btn-default">Cancel</button>
          <button className="btn btn-disabled">Disabled</button>
        </div>
      </div>
    );
  }
}

export default Header;
