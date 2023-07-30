import React, { Fragment, useContext, useEffect, useState } from "react";
import { Container, Header, Flex, GridForm, Form, Button } from "./style";
import theme from "../../theme/theme";
import { Context } from "../../context/Auth";
import history from "../../config/history";

export default function Login() {
  const [hidePass, setHidePass] = useState("password");

  const { authenticate , handleLogin } = useContext(Context)

  console.log('login:' + authenticate )

  const handleClickPass = () => {
    if (hidePass == "password") {
      setHidePass("text");
    } else {
      setHidePass("password");
    }
  };
  useEffect(() => {
    // Aplicar o estilo de fundo quando o componente é montado
    document.body.style.backgroundColor = '#00113d';

    // Remover o estilo de fundo quando o componente é desmontado
    return () => {
      document.body.style.backgroundColor = '';
    };

  }, []);

  
  return (
    <Fragment>
      <Container>
        <Header>
          <img src={theme.logoWhite} alt="" />
        </Header>
        <Flex>
          <div>
            <img className="build" src={theme.imgs.build} />
          </div>
          <GridForm>
            <div>
              <h1>
                Bem-vindo<strong>.</strong>
              </h1>
              <p>informe as suas credenciais de acesso ao portal</p>
            </div>
            <Form action="">
              <div>
                <input type="text" placeholder="Informe seu email"></input>
                <img className="img" src={theme.icons.inputLogin} />
              </div>
              <div>
                <input  type={hidePass} autoComplete="on" placeholder="Informe sua senha"></input>
                <img
                  src={theme.icons.inputSenha}
                  className="pass img"
                  onClick={handleLogin }
                />
              </div>
              <div>
                <Button onClick={handleLogin}>
                 Entrar <img src={theme.icons.arrowWhite}></img>  
                </Button>
              </div>
            </Form>
          </GridForm>
        </Flex>
      </Container>
    </Fragment>
  );
}
