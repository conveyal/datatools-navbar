import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap'

class DatatoolsNavbar extends Component {

  static propTypes = {
    title: PropTypes.string,
    username: PropTypes.string,
    managerUrl: PropTypes.string,
    editorUrl: PropTypes.string,
    userAdminUrl: PropTypes.string,
    loginHandler: PropTypes.func,
    logoutHandler: PropTypes.func,
    resetPasswordHandler: PropTypes.func
  };

  render () {
    var userControl
    if (!this.props.username) {
      userControl = <NavItem onClick={this.props.loginHandler} href='#'>Log In</NavItem>
    } else {
      userControl =
        <NavDropdown title={
          <span><Glyphicon glyph='user' /> {this.props.username}</span>
        } id='basic-nav-dropdown'>
          <MenuItem onClick={this.props.resetPasswordHandler}>Reset Password</MenuItem>
          <MenuItem onClick={this.props.logoutHandler}>Log Out</MenuItem>
        </NavDropdown>
    }

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='#'>{this.props.title}</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem href={this.props.managerUrl} active={this.props.managerUrl === '#'}>
            Manager
          </NavItem>
          <NavItem href={this.props.editorUrl} active={this.props.editorUrl === '#'}>
            Editor
          </NavItem>
          <NavItem href={this.props.userAdminUrl} active={this.props.userAdminUrl === '#'}>
            Users
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem href='#'><Glyphicon glyph='question-sign' /> Guide</NavItem>
          {userControl}
        </Nav>
      </Navbar>
    )
  }
}

module.exports = DatatoolsNavbar

// set up global function for use in legacy applications
function RenderDatatoolsNavbar (options) {
  ReactDOM.render(<DatatoolsNavbar
    title={options.title}
    username={options.username}
    managerUrl={options.managerUrl}
    editorUrl={options.editorUrl}
    userAdminUrl={options.userAdminUrl}
    loginHandler={options.loginHandler}
    logoutHandler={options.logoutHandler}
    resetPasswordHandler={options.resetPasswordHandler}
  />, document.getElementById(options.elementId))
}

window.RenderDatatoolsNavbar = RenderDatatoolsNavbar
