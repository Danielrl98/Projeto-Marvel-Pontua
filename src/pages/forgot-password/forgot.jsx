import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import HomeLogin from "../../layouts/home/home";
import { Modal } from "../../components/modal-form";
import { StyleForgot, Sucess } from "./style";
import { InputComponent } from "../../components/input";
import { NormalButton } from "../../components/button";
import { sendPasswordResetEmail } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { firebase } from "../../firebase/firebase";
import { MessageErrorComponent } from "../../components/messageError";
import theme from "../../theme/theme";
import history from "../../config/history";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [disabledButton, setDisabledButton] = useState(false);
  const [disableSucess, setDisabledSucess] = useState(false);
  const [disableError, setDisabledError] = useState(false);
  const [errorMessageEmail, setErrorMessageEmail] = useState("");

  const background = () => {
    document.body.style.backgroundColor = "#00113d";

    return () => {
      document.body.style.backgroundColor = "";
    };
  };

  const validateEmail = (e) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(e);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (validateEmail(email) == false) {
      setErrorMessageEmail("Email não é válido, tente outro");
      setDisabledError(true);
      return;
    }
    const auth = getAuth(firebase);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("sucesso");
        setDisabledError(false);
        history.push("/success-forgot");
        location.reload();
        return;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorMessage == "Firebase: Error (auth/user-not-found).") {
          setErrorMessageEmail("Email não existe na base de dados");
          setDisabledError(true);
          return;
        } else {
          /* setErrorMessageEmail('Erro desconhecido, tente novamente')*/
          console.log(errorMessage);
          /* setDisabledError(true)*/
          return;
        }
      });
  };

  useEffect(() => {
    background();
    if (email !== "") {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }, [email]);

  return (
    <Fragment>
      <HomeLogin>
        <Modal>
          <StyleForgot>
            <div>
              <h1>
                Recuperar Senha<strong>.</strong>
              </h1>
            </div>
            <div>
              <p>
                Informe o e-mail do seu cadastro. Nós estaremos realizando o
                envio de um link com as instruções para você redefinir a sua
                senha.
              </p>
            </div>
            <form method="post">
              <div>
                <InputComponent>
                  <div>
                    <input
                      type="text"
                      placeholder="Informe seu email"
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <img className="img" src={theme.icons.inputLogin} />
                  </div>
                </InputComponent>
              </div>
              {disableSucess ? (
                <Sucess>
                  <p>
                    Email enviado com sucesso, verifique também sua caixa de
                    SPAM
                  </p>
                </Sucess>
              ) : (
                ""
              )}
              {disableError ? (
                <MessageErrorComponent>
                  {errorMessageEmail}
                </MessageErrorComponent>
              ) : (
                ""
              )}
              <div>
                <NormalButton>
                  {disabledButton ? (
                    <button onClick={handleClick}>Enviar Link</button>
                  ) : (
                    <button disabled={true} className="disabled">
                      Enviar Link
                    </button>
                  )}
                </NormalButton>
              </div>
            </form>
          </StyleForgot>
        </Modal>
      </HomeLogin>
    </Fragment>
  );
}
