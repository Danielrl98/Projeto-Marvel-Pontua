import React,{ Fragment } from 'react'
import Perfil from '../perfil/perfil'
import { useParams } from 'react-router-dom'

export default function Character(){

    const { id } = useParams()
    return(
        <Fragment>
             
            <Perfil idhero={ id }/>
        </Fragment>
    )
}