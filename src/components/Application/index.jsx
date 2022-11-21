import React, {useEffect, useState} from "react";
import axios from "axios";

import { ContainerApp, ContentCaracters, HeaderApp, Loader } from "./styles";

import { Card } from "../Card";
import IconLoader from '../../assets/loader.gif'
import { Banner } from "../Banner";



export function Application(){
  const [ characters, setCharacters] = useState([])
  const [page, setPage] = useState(1);
  const [countPages, setCountPages] = useState('');
  const [qtdCharacters, setQtdCharacters ] = useState('');

  const [ isLoader, setIsLoader] = useState(true)

  useEffect(() => {
     axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
     .then(response => {
      const array = [...characters, ...response.data.results]
      setCharacters(array)
      setCountPages(response.data.info.pages)
      setQtdCharacters(response.data.info.count)
      setIsLoader(false)
     })
  }, [page])

  return(
    <>
    {
      isLoader && 
      (
        <Loader>
        <img src={IconLoader} alt="" />
       </Loader>
      )
    }
    <Banner/>

    <ContainerApp>
      <div id="list"></div>
      <HeaderApp>
      <h1 data-aos="fade-left">Rick and Morty</h1>
      <span data-aos="fade-right">Nº de Personagens {qtdCharacters}</span>
      </HeaderApp>

      <ContentCaracters>
        <div data-aos="fade-up">
          {
            characters && characters.map(({image, name, species, gender})  => {
              return(
                <Card
                image={image}
                nome={name}
                genre={gender}
                spacie={species}
                />
              )
            }) 
   
            }
          

        </div>
        {
          (!(page === countPages)) && <button onClick={()=> setPage(page + 1)}>Load more</button>
        }
      </ContentCaracters>
      
    </ContainerApp>
    </>
  )
}