import React from 'react'
import '../css/home.css'
import { InputName } from '../components/InputName'
import { FooterHome } from '../components/FooterHome'
export const Home = () => {

    
  return (

    <div className='container'>

      <div className="container_info">

        {/* CONTAINER DE LA IAMGEN */}
        <div className="container_imagen">
          <img src="/img/pokedex.svg" alt="" />
        </div>

        {/* CONTAINER DE LA DEL TEXTO */}
        <div className="container_text">
          <h1 className='title'>Hello Trainer!</h1>
          <h2>To start, give me your name</h2>
        </div>

        {/* COMPONENTE INPUT PARA EL NOMBRE */}
        
          <InputName />
       

      </div>  
      <FooterHome />
    </div>
  )
}
