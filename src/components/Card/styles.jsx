import styled from "styled-components";

export const ContainerCard = styled.div`
width: 100%;
background-color: #151020;
border-radius: 0.4rem;
padding:2rem;
.imagem{
  width: 100%;
  height: 24.3rem;
  overflow: hidden;
  border-radius: 0.4rem;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.info{
  margin-top: 1.6rem;
  h3{
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
  }
  ul{
    list-style: none;
    display: flex;
  }
  li{
    display: block;
    font-size: 1.4rem;
    &:last-child{
      &:before{
        content: '';
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.177);
        display: inline-block;
        margin: 0 8px;
        vertical-align: middle;
      }
    }
  }
}
`;