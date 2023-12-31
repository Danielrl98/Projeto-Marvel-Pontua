import React, { Fragment, useContext, useEffect, useState } from "react";
import { Form, Button, Forgot } from "./style";
import theme from "../../theme/theme";
import { Context } from "../../context/context";
import { Link, Navigate } from "react-router-dom";
import { MessageErrorComponent } from "../../components/messageError";
import { InputComponent } from "../../components/input";
import HomeLogin from "../../layouts/home/home";
import history from "../../config/history";
import { NormalButton } from "../../components/button";
import Welcome from "./welcome/welcome";

export default function Login(props) {
  const prop = props.value;

  const [disabledButton, setDisabledButton] = useState(false);

  const { authenticate, user } = useContext(Context);

  if (localStorage.getItem("token")) {
    history.push("/select-hero");
    location.reload();
    return;
  }

  const [hidePass, setHidePass] = useState("password");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  prop.receberLogin(email, pass);

  const handleClickPass = () => {
    if (hidePass == "password") {
      setHidePass("text");
    } else {
      setHidePass("password");
    }
  };
  const background = () => {
    document.body.style.backgroundColor = "#00113d";

    return () => {
      document.body.style.backgroundColor = "";
    };
  };

  useEffect(() => {
    
    if (email !== "" && pass !== "") {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }

    background();

    console.log(authenticate);
  }, [authenticate, email, pass]);
  return (
    <Fragment>
     
      <Welcome />
        
      <HomeLogin>
        <section>
          <div>
            <h1>
              Bem-vindo<strong>.</strong>
            </h1>
            <p>informe as suas credenciais de acesso ao portal</p>
          </div>
          <Form action="">
            <InputComponent>
              <input
                type="text"
                placeholder="Informe seu email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <img className="img" src={theme.icons.inputLogin} />
              {prop.errorEmail ? (
                <MessageErrorComponent>
                  {prop.messagemErrorEmail}
                </MessageErrorComponent>
              ) : (
                ""
              )}
            </InputComponent>
            <InputComponent>
              <input
                type={hidePass}
                autoComplete="on"
                placeholder="Informe sua senha"
                onChange={(e) => setPass(e.target.value)}
              ></input>
              <img
                src={theme.icons.inputSenha}
                className="pass img"
                onClick={handleClickPass}
              />
              {prop.errorPass ? (
                <MessageErrorComponent>
                  {prop.messagemErrorPass}
                </MessageErrorComponent>
              ) : (
                ""
              )}
            </InputComponent>
            {disabledButton ? (
              <NormalButton>
                <button onClick={prop.handleLogin}>
                  Entrar <img src={theme.icons.arrowWhite}></img>
                </button>
              </NormalButton>
            ) : (
              <NormalButton>
              <button disabled={true} className="disabled" onClick={prop.handleLogin}>
                Entrar <img src={theme.icons.arrowWhite}></img>
              </button>
            </NormalButton>
            )}

            <Forgot>
              <img src={theme.icons.forgotPassword} />

              <Link to="/forgot">Esqueceu a senha?</Link>
            </Forgot>
            {prop.createAccount ? (
              <div>
                <MessageErrorComponent className="center">
                  Usuário não existe, deseja criar um acesso com essas
                  credenciais?
                </MessageErrorComponent>
                <Button>
                  <button className="createAccount" onClick={prop.createUser}>
                    Sim, criar acesso
                  </button>
                </Button>
              </div>
            ) : (
              ""
            )}
          </Form>
        </section>
      </HomeLogin>
    </Fragment>
  );
}
