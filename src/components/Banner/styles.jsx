import styled from "styled-components";
import BGfoto from '../../assets/bg-banner.png'

export const Container = styled.div`
background-image: url(${BGfoto});
width: 100%;
height: 100vh;
background-position: center bottom;
background-repeat: no-repeat;
background-size: cover;
@media(max-width:500px){
  height: auto;
  background-position: -60rem;
  margin-bottom: 28rem;
}

  .content{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 46rem;
    @media(max-width:500px){
      width: 80%;
      margin: auto;
    }
    a{
      display: block;
      line-height: 6.5rem;
      background-color: #00B5CC;
      border-radius: 6px;
      max-width: 45rem;
      width: 100%;
      text-align: center;
      margin: 0 auto;
      cursor: pointer;
      border: none;
      font-size: 2.5rem;
      margin-top: 4.8rem;
      transition: all .3s ease;
      text-decoration: none;
      font-weight: 700;
      &:hover{
        filter: brightness(0.8);
      }
    }
    
  }
`;