import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { breakingPoint } from "constants/breakingPoint";
export const GlobalStyle = createGlobalStyle`
${reset}
html {
box-sizing: border-box;
font-size: 62.5%;
min-width: 320px;
overflow-x: hidden;
font-family: 'Gowun Batang', serif;
@media ${breakingPoint.device.mobile} {
  max-width: 100%;
  overflow-x: hidden;
}
}
body {
overflow-x: hidden;
}
/* body::-webkit-scrollbar {
    width: 8px;
}

body::-webkit-scrollbar-thumb {
    height: 30%;
    background: black; 
    
    border-radius: 10px;
}

body::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
} */
a { -webkit-tap-highlight-color:transparent;}
*,
*::before,
*::after {
box-sizing: inherit;
}
* { font-family: 'Gowun Batang', serif;}
a { cursor: pointer; text-decoration: none; }
input[type="datetime-local"]::-webkit-inner-spin-button,
input[type="datetime-local"]::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
}
input:focus, select:focus, option:focus, textarea:focus, button:focus{
	outline: none;
}
div {
  -ms-user-select: none; 
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
select {

-webkit-appearance:none; /* for chrome */

-moz-appearance:none; /*for firefox*/

appearance:none;

}
`;
