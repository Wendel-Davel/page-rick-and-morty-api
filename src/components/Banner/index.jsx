import React from "react";
import { Container } from "./styles";
import Logo from '../../assets/logo.png'


export function Banner(){
  return(
    <Container>
      <div className="content" data-aos="fade-down">
       <img src={Logo} alt="" />
       <a href="#list">Get Started</a>
      </div>

    </Container>
  )
}