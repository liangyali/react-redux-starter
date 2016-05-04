import React, {Component} from 'react';
import styles from './styles.less';
import classNames from 'classnames';

class Header extends Component {

  render() {
    return (
      <div className={classNames(styles.headerRow, 'row')}>
        <div className={classNames(styles.main, 'col-md-6 col-sm-6')}>
          <i className="fa fa-shopping-bag"></i>
          <span>订单管理</span>
        </div>
        <div className={classNames('col-md-6 col-sm-6', styles.actions)}>
          <button className="btn btn-primary">添加商品</button>
          <button className="btn btn-disabled">修改商品</button>
          <button className="btn btn-default">删除商品</button>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  children: React.PropTypes.object.isRequired
};

export default Header;
