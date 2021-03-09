import React, { useState } from "react";
import "./Header.component.css";
import { IconButton, Heading , SlideFade, Button} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink, useHistory } from "react-router-dom";

const Header = (props) => {
  const [showNav, setShowNav] = useState(true);
  const history = useHistory()
  const logout = ()=>{
    localStorage.removeItem('loggedIn');
    history.push('/')
  }
  return (
    <header>
      <nav>
        <div className="navBan">
          <Heading as="h2" size="xl">
            Quiz
          </Heading>
          <IconButton
            onClick={() => {
              setShowNav(!showNav);
            }}
            aria-label="HamburgerIcon"
            icon={showNav ? <HamburgerIcon /> : <CloseIcon />}
          />
        </div>
        <ul className={showNav ? "navBanDisp" : "nav-list"}>
          {props.isLoggedIn?<>
            <li className="header-item">
            <SlideFade in="true">
            <NavLink to="/home" activeClassName="active">
              <SlideFade in="true">Home</SlideFade>
            </NavLink>
            </SlideFade>
          </li>
          <li className="header-item">
            <Button onClick={logout}>Log Out</Button>
          </li></>
          :<>
            <li className="header-item">
            <NavLink to="/" activeClassName="active">
              <SlideFade in="true">Login</SlideFade>
            </NavLink>
          </li>
          <li className="header-item">
            <NavLink to="/register" activeClassName="active">
              <SlideFade in="true">Register </SlideFade>
            </NavLink>
          </li>
          </>}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
