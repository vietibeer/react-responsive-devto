import React, {useState} from 'react';
import {FaDev} from 'react-icons/fa';
import {FiSearch} from 'react-icons/fi';
import {BiMessageRoundedCheck} from 'react-icons/bi';
import {RiNotificationLine} from 'react-icons/ri';
import {useComponentVisible} from '../utils/handleClickOutside';
function Navigation(props) {
  const {ref, isComponentVisible, setIsComponentVisible} = useComponentVisible(false);
  const toggle = () => {
    setIsComponentVisible(!isComponentVisible);
  };
  return (
    <header className="header">
      <div className="headerContainer">
        <div className="headerContainer__hamburgerMenu" onClick={props.openMenu}></div>
        <a href="/#" className="headerContainer__logo">
          <FaDev size="3.125rem" />
        </a>

        <div className="headerContainer__searchBox">
          <form>
            <input />
          </form>
        </div>

        <div className="headerContainer__right">
          <button>Write a post</button>
          <i className="hidden-search">
            <FiSearch />
          </i>
          <i>
            <BiMessageRoundedCheck />
          </i>
          <i>
            <RiNotificationLine />
          </i>

          <span onClick={toggle}>
            <img src="https://picsum.photos/100" alt="Profile" />
          </span>
        </div>
      </div>

      <div ref={ref} className={isComponentVisible ? 'dropdown-menu' : 'dropdown-menu-close'}>
        <ul>
          <li onClick={toggle}>
            <a href="/#">
              <div className="u-name">ABC</div>
              <small className="u-name-id">@ABC</small>
            </a>
          </li>
          <li onClick={toggle}>
            <a href="/#">Dashboard</a>
          </li>
          <li onClick={toggle}>
            <a href="/#">Writting a Post</a>
          </li>
          <li onClick={toggle}>
            <a href="/#">Reading List</a>
          </li>
          <li onClick={toggle}>
            <a href="/#">Settings</a>
          </li>
          <li onClick={toggle}>
            <a href="/#">Sign out</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navigation;
