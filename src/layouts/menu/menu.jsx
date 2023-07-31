import React, { Fragment, useContext } from "react";
import theme from "../../theme/theme";
import { Nav, SubNav, DivLogo, Opcoes, Logout } from "./style";
import { NavLink } from "react-router-dom";
import { Context } from "../../context/context";

export default function Menu() {
  const { handleLogout } = useContext(Context)
  
  return (
    <Fragment>
      <Nav>
        <SubNav>
          <DivLogo>
            <NavLink to={"/dashboard"}>
              <img src={theme.logo}></img>
            </NavLink>
          </DivLogo>
          <Opcoes>
            <nav>
              <ul>
                <li>
                  <NavLink to={"/dashboard"} activeclassname="active">
                    <img src={theme.icons.home}></img>
                    <div>Home</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/perfil"} activeclassname="active">
                    <img src={theme.icons.perfil}></img>
                    <div>Perfil</div>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </Opcoes>
          <Logout>
            <nav>
              <ul>
                <li>
                  <img src={theme.icons.sair}></img>
                  <div>
                    <div className="logout" onClick={handleLogout}>Sair</div>
                  </div>
                </li>
              </ul>
            </nav>
          </Logout>
        </SubNav>
      </Nav>
    </Fragment>
  );
}
