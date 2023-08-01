import React, { Fragment, useState, useEffect, useContext } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { firebase } from "../../firebase/firebase";
import { Context } from "../../context/context";

export default function UtilsHero({ children }) {
 
  const { user, setUser } = useContext(Context);
  const auth = getAuth(firebase);
  const db = getFirestore(firebase);
  const [getData ,setGetData] = useState(true)

  function requestUser() {
    /*console.log(user);*/

    if (user) {
      const result = doc(db, "users", user.uid);

      getDoc(result)
        .then((docSnapshot) => {
          if (docSnapshot.exists()) {
            const userData2 = docSnapshot.data();
            console.log(userData2);
            if(getData){
                children.props.value.setSelectedImage(userData2.heroImage)
                children.props.value.setselectedName(userData2.heroName)
                setGetData(false)
            } else {
                sendData(user)
            }
           

           
          } else {
            console.log("Dados do usuário não encontrados.");
          }
        })
        .catch((error) => {
          console.error("Erro ao buscar dados do usuário:", error);
        });
    }
  }

  const saveUserData = async (uid, userData) => {
    const db = getFirestore(firebase);
    const userRef = doc(db, "users", uid);

    await setDoc(userRef, userData).then((success) => {
      console.log("salvo com sucesso");
      children.props.value.setSelected(false)
    });
  };

  useEffect(() => {
  
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        requestUser();
        });
    return unsubscribe;
   
    
  }, [user,children.props.value.selected]);

  function sendData(user){
  
  if(document.querySelector('#name').value !== '' && document.querySelector('#name').value !== '' && document.querySelector('#name').value!== ''){
                let name = document.querySelector('#name').value
                let id = document.querySelector('#id').value
                let image = document.querySelector('#image').value
            saveUserData(user.uid, {
                heroId: id,
                heroName: name,
                heroImage: image
            });
        }
        
        
      
  }
  
 

  return (
    <Fragment>
      <div>{children}</div>
    </Fragment>
  );
}
