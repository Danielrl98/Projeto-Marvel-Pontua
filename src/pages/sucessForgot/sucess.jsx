import React, { Fragment, useEffect } from "react";
import HomeLogin from "../../layouts/home/home";
import { Modal } from "../../components/modal-form";
import { StyleForgot } from './style'
import { NormalButton } from "../../components/button";
import { Link } from "react-router-dom";

export default function Success(){

    const background = () => {
        document.body.style.backgroundColor = "#00113d";
    
        return () => {
          document.body.style.backgroundColor = "";
        };
      };
    
      useEffect( () => {
        background()
      },[])

    return(
        <Fragment>
            <HomeLogin>
                <Modal>
                    <section>
                        <div>
                            <h1>Tudo certo <strong>;)</strong></h1>
                        </div>
                        <StyleForgot>
                            <p>Foi enviado um e-mail para você com instruções de como redefinir a sua senha.</p>
                        </StyleForgot>
                        <div>
                            <NormalButton>
                            <Link to="/"><button>Voltar para login</button></Link>
                            </NormalButton>
                        </div>
                    </section>
                </Modal>
            </HomeLogin>
        </Fragment>
    )
}