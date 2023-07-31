import React,{Fragment} from "react";
import { Modal } from "../../components/modal-form";
import { Header, Container} from "./style";
import theme from "../../theme/theme";

export default function HomeLogin( {children}){
   
    return(
    <Fragment>
      <Container>
        <Header>
          <img src={theme.logoWhite} alt="" />
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