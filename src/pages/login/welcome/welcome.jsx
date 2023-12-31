import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Popup } from "./style";
import { NormalButton } from "../../../components/button";
import { Context } from "../../../context/context";

export default function Welcome(){

   function verifyCache(){
        if(localStorage.getItem('welcome')){
            document.querySelector('.popup').style.display="none"
        } 
   }

   const handleClick = () => {
        localStorage.setItem('welcome','true')
        verifyCache()
       
   }
   useEffect( () => {
 
    verifyCache()
    
   },[])
    return(
        <Fragment>
           <Popup className="popup">
                <main>
                    <h1>Seja bem vindo(a) ao projeto Marvel</h1>
                    <p>Foi uma honra ter feito parte desse projeto, navegue pelas abas e encontre seu Agente favorito da Marvel.</p><br></br>
                    <p>Para Acessar, digite um email e senha nos campos para registrar ou logar.</p><br></br>
                    <NormalButton >
                        <button onClick={ handleClick }>Começar</button>
                    </NormalButton><br></br>
                    <i><a target="__blank" href="https://github.com/danielrl98">Daniel Rezende - Desenvolvedor</a></i><br></br><br></br>
                    <i><a target="__blank"  href="https://wa.me/21968600931">Dúvidas fale comigo</a></i>
                </main>
            </Popup>
        </Fragment>
    )
}