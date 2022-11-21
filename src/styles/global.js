import {createGlobalStyle} from "styled-components";


 const GlobalStyle = createGlobalStyle`

 *{
  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif;
  box-sizing: border-box;
  color: #fff;
 }
 body{
  background-color: #040011;

 }
 html{
  font-size: 62.5%;
  scroll-behavior: smooth;
 }

 img{
  display: block;
  max-width: 100%;
 }
`
export default GlobalStyle;