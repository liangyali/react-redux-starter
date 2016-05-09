import React, {Component} from 'react';
import styles from './styles.less';
import classNames from 'classnames';

class Secondary extends Component {
  todo() {}
  render() {
    return (
      <div className={classNames(styles.nav, {
        [styles. in]: this.props.show === true,
        [styles.out]: this.props.show !== true
      })}>
        <div className={styles.header}>
          <h3>订单管理</h3>
        </div>
        <ul className={classNames('nav', styles.nav)}>
          <li>
            <a href="javascipt:void(0)">
              <span>智能搜索</span>
            </a>
          </li>
          <li className={styles.active}>
            <a href="javascipt:void(0)">
              <span>商品管理</span>
            </a>
          </li>
          <li>
            <a href="javascipt:void(0)">
              <span>订单管理</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

Secondary.propTypes = {
  show: React.PropTypes.bool.isRequired
};

export default Secondary;
