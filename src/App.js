import React from "react";
import { createGlobalStyle } from 'styled-components';
import Menu from "./components/Menu";
import Cup from "./components/Cup";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Comfortaa:400,700&subset=cyrillic-ext');

  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    }

  body{
    font-family: 'Comfortaa', cursive;
    font-size: 16px;
    color: #410202
    }

  ul{
    list-style-type: none;
  }

  .wrapper {
    width: 960px;
    margin: 10px auto;
    border: 1px dashed #999;
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
`;


const App = () => {
  
  const [currentRecept, setCurrentRecept] = React.useState(null);

  return (
  <div className="wrapper">
    <GlobalStyle />
		<Menu setCurrentRecept = {setCurrentRecept}/>
    <Cup currentRecept = {currentRecept} />		
	</div>
)};

export default App;
