import React from "react";
import { useNavigate } from "react-router-dom";

export default function Protected(){
    const navigate = useNavigate();

    const token = false

    if(token == false){
        return navigate('/')
    }

}