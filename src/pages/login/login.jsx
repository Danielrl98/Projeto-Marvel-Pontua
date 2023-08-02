import React,{useState,Fragment, useContext} from "react";
import { firebase } from "../../firebase/firebase";
import { getFirestore,doc, setDoc } from "firebase/firestore"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "firebase/auth";
import Login from "./formLogin";
import { environment } from "../../Auth/Auth";
import { Context } from "../../context/context";
import { Navigate } from "react-router-dom";
import history from '../../config/history'


const auth = getAuth(firebase);

export default function UtilsLogin(){


    const { setUser,user } = useContext(Context)

    let email = ''
    let pass = ''

    const receberLogin = (recebeEmail,recebePass) => {
     email = recebeEmail
     pass = recebePass
    }

    const [errorEmail,setErrorEmail] = useState(false)
    const [messagemErrorEmail,setmessagemErrorEmail] = useState('')
    const [errorPass,setErrorPass] = useState(false)
    const [messagemErrorPass,setmessagemErrorPass] = useState('')
    const [createAccount,setCreateAccount] = useState(false)
   
    const handleLogin = async (e) => {
      e.preventDefault()
     
   
      if(validateEmail(email) == false){
        setErrorEmail(true)
        setmessagemErrorEmail('Email não é válido, tente outro')
        return
      }
      if(email == '' ){
        setErrorEmail(true)
        setmessagemErrorEmail('Email vazio, obrigatório o preechimento')
        return
      }
      if(pass == ''){
        setErrorPass(true)
        setmessagemErrorPass('Senha vazia, obrigatório o preechimento')
        return
      }
      if(pass.length < 6){
        setErrorPass(true)
        setmessagemErrorPass('Senha precisa ter no mínimo 6 caracteres')
        return
      }
      
      
     const userData = {
        email:email,
        heroId:'',
        heroName:  ''
      }

    await signInWithEmailAndPassword(auth, email , pass)
    .then((userCredential) => {
   
    const user = userCredential.user;
    const unsubscribe =  auth.onAuthStateChanged((User) => {

        if (User) {
          // O usuário está autenticado
         console.log('autenticado:',User)
         saveUserData(User.uid, userData);
         localStorage.setItem('token',User.accessToken)
        
         setUser(User)
      
          if(user.accessToken !== ''){
             history.push('/select-hero')
             location.reload()
          }

        } else {
         
          console.log('erro')
        }
      });
      return unsubscribe 
    })
    .catch( (error) => {
      const errorMessage = error.message;
      
      console.log(error.message)

      if(errorMessage == 'Firebase: Error (auth/wrong-password).' && pass.length >= 5){
        setmessagemErrorPass('Senha incorreta')
        setErrorPass(true)
        return
      }

      if(errorMessage == 'Firebase: Error (auth/user-not-found).'){
        setCreateAccount(true)
        setErrorEmail(false)
        setErrorPass(false)
        return
      }
      if(errorMessage =='Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).'){
          alert('muitas requisições sendo feitas, resete sua senha')
          return
      }
      alert('Erro desconhecido, verifique com o administrador do site')
      return
    })

    }
 
    
    const createUser =  async (e) => {
        e.preventDefault()

        if(email == '' ){
          setErrorEmail(true)
          setmessagemErrorEmail('Email vazio, obrigatório o preechimento')
          return
        }
        if(pass == ''){
          setErrorPass(true)
          setmessagemErrorPass('Senha vazia, obrigatório o preechimento')
          return
        }
        if(pass.length < 6){
          setErrorPass(true)
          setmessagemErrorPass('Senha precisa ter no mínimo 6 caracteres')
          return
        }

        const auth = getAuth(firebase);
    
        async function execCreate() {
          await createUserWithEmailAndPassword(auth,email,pass)
    
          .then((userCredential) => {
    
             const user = userCredential.user;
             console.log(user) 
    
              const userData = {
              email:email,
              heroId:'',
              heroName:''
              }
            const unsubscribe =  auth.onAuthStateChanged((user) => {
              if (user) {
               console.log('autenticado:',user)
               saveUserData(user.uid, userData);
                
               alert('Usuário criado com sucesso')
              } else {
               
                console.log('erro')
              }
            });
            return unsubscribe 
      
          })
         .catch((error) => {
           const errorMessage = error.message;
           console.log({ errorMessage })
    
           if(errorMessage == 'Firebase: Error (auth/email-already-in-use).'){
            setErrorEmail(true)
            setmessagemErrorEmail('Email já existe, tente outro')
            return
           }
    
         });
    
        }execCreate() 
      
      }
      /*Salvar dados na collection */
      const saveUserData = async (uid, userData) => {
      
        const db = getFirestore(firebase);
        const userRef = doc(db, 'users', uid);
        

        await setDoc(userRef, userData).then( (success) => {
          setCreateAccount(false)
          setErrorPass(false)
          setErrorEmail(false)
        })
      }
      const validateEmail = (e) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(e);
      };

    return(
        <Fragment>
            <Login value={{errorEmail,messagemErrorEmail,errorPass,messagemErrorPass,createAccount,createUser,receberLogin,handleLogin }}></Login>
        </Fragment>
    )

}
