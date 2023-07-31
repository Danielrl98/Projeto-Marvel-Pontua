import React,{Fragment, useContext, useEffect,useState} from "react";
import HomeLogin from "../../layouts/home/home";
import { Modal } from "../../components/modal-form";
import { onAuthStateChanged,getAuth } from 'firebase/auth';
import { collection, query, where, getDocs,getFirestore,doc,getDoc } from 'firebase/firestore';
import { firebase } from "../../firebase/firebase";
import { Context } from "../../context/context";

export default function SelectHero(){


    const [userData, setUserData] = useState(null);
    const { user,setUser } = useContext(Context)

  const background = () => {
        document.body.style.backgroundColor = "#00113d";
    
        return () => {
          document.body.style.backgroundColor = "";
        };
    };
    
    const auth = getAuth(firebase);
    const db = getFirestore(firebase);

    async function requestUser(){

        console.log(user)

        if (user) {
         const result = await  doc(db, 'users', user.uid)
              
         getDoc(result)
        .then((docSnapshot) => {
          if (docSnapshot.exists()) {
            
            const userData2 = docSnapshot.data();
            console.log(userData2)
            setUserData(userData);
          } else {
            // O documento não existe ou ainda não foi criado
            console.log('Dados do usuário não encontrados.');
            setUserData(null);
          }
        })
        .catch((error) => {
          console.error('Erro ao buscar dados do usuário:', error);
        });
    } else {
      // O usuário não está autenticado, então defina os dados do usuário como null
      setUserData(null);
    }
    }

    useEffect(() => {
        
        background();
       
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            requestUser()
        })
        return unsubscribe
      
       
    }, [user]);



    return(
        <Fragment>
            <HomeLogin>
                <Modal>
                    <section>
                        <h1>Selecione</h1>
                    </section>
                </Modal>
            </HomeLogin>
        </Fragment>
    )
}