import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`

  ul,h1,h2,h3,h4,h5,h6,li,p{
    list-style:none;
    margin:0;
    padding:0};

  body{
    background:#ececec;
    color: '#010101'; 
    -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  };

  a{
    text-decoration:none;
    color:inherit};
 footer{

 }
`;
