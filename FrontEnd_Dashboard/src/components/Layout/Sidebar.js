import logoKepco from 'assets/img/logo/logo_kepco_long.png';
import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg';
import React from 'react';
import {
  MdEventSeat,
  MdNoteAdd,
  MdList,
  MdMonetizationOn,
  // MdAccountCircle,
  // MdArrowDropDownCircle,
  // MdBorderAll,
  // MdBrush,
  // MdChromeReaderMode,
  // MdDashboard,
  // MdExtension,
  // MdGroupWork,
  // MdKeyboardArrowDown,
  // MdNotificationsActive,
  // MdPages,
  // MdRadioButtonChecked,
  // MdSend,
  // MdStar,
  // MdTextFields,
  // MdViewCarousel,
  // MdViewDay,
  // MdViewList,
  // MdWeb,
  // MdWidgets,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {
  // Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from 'utils/bemnames';

const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

// const navComponents = [
//   { to: '/buttons', name: 'buttons', exact: false, Icon: MdRadioButtonChecked },
//   {
//     to: '/button-groups',
//     name: 'button groups',
//     exact: false,
//     Icon: MdGroupWork,
//   },
//   { to: '/forms', name: 'forms', exact: false, Icon: MdChromeReaderMode },
//   { to: '/input-groups', name: 'input groups', exact: false, Icon: MdViewList },
//   {
//     to: '/dropdowns',
//     name: 'dropdowns',
//     exact: false,
//     Icon: MdArrowDropDownCircle,
//   },
//   { to: '/badges', name: 'badges', exact: false, Icon: MdStar },
//   { to: '/alerts', name: 'alerts', exact: false, Icon: MdNotificationsActive },
//   { to: '/progress', name: 'progress', exact: false, Icon: MdBrush },
//   { to: '/modals', name: 'modals', exact: false, Icon: MdViewDay },
// ];

// const navContents = [
//   { to: '/typography', name: 'typography', exact: false, Icon: MdTextFields },
//   { to: '/tables', name: 'tables', exact: false, Icon: MdBorderAll },
// ];

// const pageContents = [
//   { to: '/login', name: 'login / signup', exact: false, Icon: MdAccountCircle },
//   {
//     to: '/login-modal',
//     name: 'login modal',
//     exact: false,
//     Icon: MdViewCarousel,
//   },
// ];

// const navItems = [
//   { to: '/', name: 'dashboard', exact: true, Icon: MdDashboard },
//   { to: '/cards', name: 'cards', exact: false, Icon: MdWeb },
//   { to: '/charts', name: 'charts', exact: false, Icon: MdInsertChart },
//   { to: '/widgets', name: 'widgets', exact: false, Icon: MdWidgets },
// ];

const navItems = [
  {
    to: '/patent-info',
    name: '특허기본 정보',
    exact: false,
    Icon: MdNoteAdd,
  },
  {
    to: '/sales-inform-input',
    name: '판매정보 추가',
    exact: false,
    Icon: MdNoteAdd,
  },
  { to: '/sale-list', name: '매출 리스트', exact: false, Icon: MdList },
  { to: '/purchase-list', name: '구매 리스트', exact: false, Icon: MdList },
  {
    to: '/reward-list',
    name: '보상 내역',
    exact: false,
    Icon: MdMonetizationOn,
  },
  { to: '/origin', name: '기존페이지', exact: false, Icon: MdEventSeat },
];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: true,
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>
          <Navbar className="text-center">
            <div className="w-100 icon-wrapper">
              <img src={logoKepco} className="w-100" alt="" />
            </div>
            <h3 className="w-100 text-white ">Sales Management</h3>
          </Navbar>
          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="" style={{ fontSize: '20px' }}>
                    {name}
                  </span>
                </BSNavLink>
              </NavItem>
            ))}

            {/* <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Components')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdExtension className={bem.e('nav-item-icon')} />
                  <span className=" align-self-start">Components</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenComponents
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenComponents}>
              {navComponents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Contents')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdSend className={bem.e('nav-item-icon')} />
                  <span className="">Contents</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenContents
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenContents}>
              {navContents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Pages')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdPages className={bem.e('nav-item-icon')} />
                  <span className="">Pages</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenPages
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenPages}>
              {pageContents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse> */}
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
