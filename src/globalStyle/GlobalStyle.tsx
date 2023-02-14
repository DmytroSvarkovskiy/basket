import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`

  ul,h1,h2,h3,h4,h5,h6,li,p{
    list-style:none;
    margin:0;
    padding:0};

  body{
    background: linear-gradient(90deg,#faf0cd, #f1dcd4);
    color: '#010101'; 
  };

  a{
    text-decoration:none;
    color:inherit};
`;
