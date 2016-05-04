import React, {Component} from 'react';
import styles from './styles.less';
import classNames from 'classnames';
import Secondary from './Secondary';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showSecondary: false
    };
  }

  componentDidMount() {}

  onClick() {
    this.state.showSecondary = !this.state.showSecondary;
    this.setState(this.state);
  }

  render() {
    return (
      <div className={classNames(styles.sidebar, {
        [styles.secondary]: this.state.showSecondary === true
      })}>
        <Secondary show={this.state.showSecondary}/>
        <div className={styles.header}>
          <img src="https://imgcache.qq.com/open_proj/proj_qcloud_v2/dnspod/mc/css/img/v2-mc/logo.png" alt="" width="100"></img>
        </div>
        <div className={styles.content}>
          <div className={styles.nav}>
            <ul className="nav" onClick={() => this.onClick()}>
              <li>
                <a href="javascipt:;">
                  <i className="fa fa-search"></i>
                  <span>智能搜索</span>
                </a>
              </li>
              <li>
                <a href="javascipt:;">
                  <i className={classNames('fa fa-angle-right pull-right', styles.arrow)}/>
                  <i className="fa fa-tag"/>
                  <span>商品管理</span>
                </a>
              </li>
              <li className={styles.active}>
                <a href="javascipt:;">
                  <i className={classNames('fa fa-angle-right pull-right', styles.arrow)}/>
                  <i className="fa fa-shopping-bag"></i>
                  <span>订单管理</span>
                </a>
              </li>
              <li>
                <a href="javascipt:;">
                  <i className={classNames('fa fa-angle-right pull-right', styles.arrow)}/>
                  <i className="fa fa-users"></i>
                  <span>客户管理</span>
                </a>
              </li>
              <li>
                <a href="javascipt:;">
                  <i className="fa fa-wrench"></i>
                  <span>设置管理</span>
                </a>
              </li>
              <li>
                <a href="javascipt:;">
                  <i className={classNames('fa fa-angle-right pull-right', styles.arrow)}/>
                  <i className="fa fa-cloud"></i>
                  <span>应用市场</span>
                </a>
              </li>
              <li>
                <a href="javascipt:;">
                  <i className={classNames('fa fa-angle-right pull-right', styles.arrow)}/>
                  <i className="fa fa-line-chart"></i>
                  <span>报表统计</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
