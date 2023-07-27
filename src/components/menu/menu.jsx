import React, { Fragment } from "react";
import theme from "../../theme/theme";
import { Nav, SubNav, DivLogo, Opcoes, Logout  } from "./style";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <Fragment>
      <Nav>
        <SubNav>
          <DivLogo>
            <Link to={"/dashboard"}>
              <img src={theme.logo}></img>
            </Link>
          </DivLogo>
          <Opcoes>
            <nav>
              <ul>
                <li>
                  <img src={theme.icons.home}></img>
                  <div>
                    <Link to={"/dashboard"}>Home</Link>
                  </div>
                </li>
                <li>
                  <img src={theme.icons.perfil}></img>
                  <div>
                    <Link to={"/perfil"}>Perfil</Link>
                  </div>
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
                    <Link to={"/sair"}>Sair</Link>
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
