// import "./Header.scss";

// function Header() {
//     return (
//         <div className="header-container">
//         <div className="headerimage"></div>
//         </div>
//     )
// }

// export default Header;

import "./Header.scss";
import menuIcon from "../../assets/menu-button-of-three-horizontal-lines.png";
import logo from "../../assets/royal-caribbean-logo-border.svg";
import searchIcon from "../../assets/search.png";
function Header() {
  return (
    <nav className="nav">
      <section className="nav__section-top">
        <p>UNITED STATES :us:</p>
        <p>866-562-7625</p>
      </section>
      <section className="nav__section-bottom">
        <ul className="nav__list-left">
          <li className="nav__item">
            <img className="nav__menu-btn" src={menuIcon} alt="" />
            <img src={logo} alt="rc-logo" className="nav__logo" />
          </li>
          <li className="nav__item">
          FIND A CRUISE
          </li>
          <li className="nav__item">DEALS</li>
          <li className="nav__item">SHIPS</li>
          <li className="nav__item">DESTINATIONS</li>
          <li className="nav__item">MANAGE MY CRUISE</li>
        </ul>
        <ul className="nav__list-right">
          <li className="nav__item">
            <p className="nav__text">SIGN IN</p>
            <img className="nav__icon" src={searchIcon} alt="search-icon" />
          </li>
        </ul>
      </section>
    </nav>
  );
}
export default Header;