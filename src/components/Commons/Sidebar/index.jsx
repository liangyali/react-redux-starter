import React, {Component} from 'react';
import styles from './styles.less';
import classNames from 'classnames';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showSecondary: false
    };
  }

  componentDidMount() {}

  /**
   * 显示子菜单
   * @return {[type]} [description]
   */
  renderSecondary() {
    return (
      <div className={classNames(styles.sidebarSecondary, {
        [styles.in]: this.state.showSecondary === true,
        [styles.out]: this.state.showSecondary !== true
      })}
      >
        <div className={styles.sidebarSecondaryHeader}>test</div>
        <ul className="nav">
          <li>test</li>
          <li>test</li>
        </ul>
      </div>
    );
  }

  onClick() {
    this.state.showSecondary = !this.state.showSecondary;
    this.setState(this.state);
  }

  render() {
    return (
      <div className={styles.sidebar}>
        {this.renderSecondary()}
        <div className={styles.sidebarHeader}>
          <img src="https://imgcache.qq.com/open_proj/proj_qcloud_v2/dnspod/mc/css/img/v2-mc/logo.png" alt="" width="100"></img>
        </div>
        <div className={styles.sidebarContainer}>
          <ul className="nav" onClick={() => this.onClick()}>
            <li>
              <a href="javascipt:void(0)">
                <i className="fa fa-search"></i>
                <span>智能搜索</span>
              </a>
            </li>
            <li>
                <a href="javascipt:void(0)">
                <i className={classNames('fa fa-angle-right pull-right', styles.menuArrow)}/>
                <i className="fa fa-tag"/>
                <span>商品管理</span>
              </a>
            </li>
            <li>
              <a href="javascipt:void(0)">
                <i className={classNames('fa fa-angle-right pull-right', styles.menuArrow)}/>
                <i className="fa fa-shopping-bag"></i>
                <span>订单管理</span>
              </a>
            </li>
            <li>
                <a href="javascipt:void(0)">
                <i className={classNames('fa fa-angle-right pull-right', styles.menuArrow)}/>
                <i className="fa fa-users"></i>
                <span>客户管理</span>
              </a>
            </li>
            <li>
                <a href="javascipt:void(0)">
                <i className="fa fa-wrench"></i>
                <span>设置管理</span>
              </a>
            </li>
            <li>
              <a href="javascipt:void(0)">
                <i className={classNames('fa fa-angle-right pull-right', styles.menuArrow)}/>
                <i className="fa fa-cloud"></i>
                <span>应用市场</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className={classNames('fa fa-angle-right pull-right', styles.menuArrow)}/>
                <i className="fa fa-line-chart"></i>
                <span>报表统计</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
