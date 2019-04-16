import React, { Component, createRef } from 'react';
import logo from '../logo.svg';
import Dropdown from './Dropdown';
import ModalButton from './ModalButton';
import Modal from './Modal';

class Navigation extends Component {
  state = {
    isDropdownOpen: false,
    isOpenModal: false,
  };

  containerRef = createRef();

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
    // window.addEventListener('click', this.handleWindowClickModal);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isDropdownOpen } = this.state;
    return nextState.isDropdownOpen !== isDropdownOpen;
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
    // window.removeEventListener('click', this.handleWindowClickModal);
  }

  handleWindowClick = event => {
    const clickOnDropdown = this.containerRef.current.contains(event.target);
    const { isDropdownOpen } = this.state;
    if (!clickOnDropdown && isDropdownOpen) {
      this.toggleDropdown();
    }
  };

  // handleWindowClickModal = event => {
  //   const clickOnDropdown = this.containerRef.current.contains(event.target);
  //   const { isOpenModal } = this.state;

  //   if (!clickOnDropdown && isOpenModal) {
  //     console.log(this.containerRef.current);
  //     this.handleCloseToggleModalWindow();
  //   }
  // };

  toggleDropdown = () => {
    this.setState(state => ({
      isDropdownOpen: !state.isDropdownOpen,
    }));
  };

  // handleOpenToggleModalWindow = () => {
  //   this.setState(state => ({
  //     isOpenModal: !state.isOpenModal,
  //   }));
  //   console.log(this.state.isOpenModal);
  // };

  // handleCloseToggleModalWindow = () => {
  //   this.setState(() => ({
  //     isOpenModal: false,
  //   }));
  // };

  render() {
    const { isDropdownOpen, isOpenModal } = this.state;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <img src={logo} alt="main-logo" width="70" height="70" className="navbar-brand" />

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav w-100">
            <li className="nav-item active mr-auto">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <ModalButton onToggleOpenModalWindow={this.handleOpenToggleModalWindow} />
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handleOpenToggleModalWindow}
              >
                Modal Window
              </button>
            </li>
            {isOpenModal && (
              <Modal
                containerRef={this.containerRef}
                onToggleCloseModalWindow={this.handleCloseToggleModalWindow}
              />
            )} */}
            <li ref={this.containerRef} className="nav-item dropdown d-flex align-items-center">
              <img src={logo} alt="user-logo" width="60" height="60" />
              <div onClick={this.toggleDropdown} className="nav-link dropdown-toggle">
                Dropdown
              </div>
              {isDropdownOpen && <Dropdown />}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
