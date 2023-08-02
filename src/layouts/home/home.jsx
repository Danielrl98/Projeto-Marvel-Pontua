import React,{Fragment} from "react";
import { Modal } from "../../components/modal-form";
import { Header, Container} from "./style";
import theme from "../../theme/theme";
import { NavLink } from "react-router-dom";

export default function HomeLogin( {children}){
   
    return(
    <Fragment>
      <Container>
        <Header>
            <NavLink to="/dashboard"> <img src={theme.logoWhite} /></NavLink>
        </Header>
        <Modal>
          <div>
            <img className="build" src={theme.imgs.build} />
          </div>
          {children}
        </Modal>
      </Container>
     
    </Fragment>
    )
}