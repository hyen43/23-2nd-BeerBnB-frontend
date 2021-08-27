import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
	
	* {
    box-sizing: border-box
    font-familly: Roboto, sans-serif;
  }
	
  a{
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyle;
