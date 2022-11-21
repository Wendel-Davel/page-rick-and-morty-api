import React from "react";
import { ContainerCard } from './styles'

export function Card({image, nome, genre, spacie}){
  return(
    <>
    <ContainerCard>
      <div className="imagem">
        <img src={image} alt="" />
      </div>
      <div className="info">
        <h3>{nome}</h3>
        <ul>
          <li>Gênero: {genre}</li>
          <li>Especie: {spacie}</li>
        </ul>
      </div>
    </ContainerCard>

    </>
  )
}