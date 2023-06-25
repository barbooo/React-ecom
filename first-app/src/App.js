
import './App.css';
//import Header from './Component/header/indexe';
//import Shoping from './Component/Shoping';
//import Headr from './Component/Headr';
//import Cat from './Component/Cat';
//import Footer from './Component/Footer';
//import './Styles/layout.css'
//import Products from './modules/Home/Product/index';
//import Home from './modules/Home/index';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Menu from "./Component/Menu"
import Navbar from './Component/Navbar';
import { Darkthm, light } from './Component/utils/Them';
import Home from "./Component/pages/Home"
import Video from './Component/pages/Video';
import Signin from './Component/pages/Signin';
const Container = styled.div`
display:flex;
`
const Main = styled.div`
flex:7;
background-color:${({theme})=>theme.bg}
`
const  Wrapper= styled.div`
padding:30px 90px;
`
function App() {
  const[darkmod, setdark] = useState(true)
  return (
    <ThemeProvider theme={darkmod ? Darkthm: light}>
   <Container >
      <BrowserRouter>
    <Menu darkmod = {darkmod} setdark ={setdark}/>
    <Main >
      <Navbar />
      <Wrapper>
        <Routes>
          <Route path ="/">
          <Route index element ={<Home type ="random"/>}/>
          <Route path="/trends" element ={<Home  type="trend"/>}/>
          <Route path="/subscription" element ={<Home  type="subscription"/>}/>
          <Route path ="/singin" element ={<Signin />}/>
          <Route path ="video">
            <Route path = ":id" index element ={<Video />} />
          </Route>
          </Route>
        </Routes>
      </Wrapper>
    </Main>
      </BrowserRouter>
   </Container>
    </ThemeProvider>

   
  );
}

export default App;
