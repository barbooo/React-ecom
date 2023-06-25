import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styled from "styled-components";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
const Container = styled.div`
position:sticky;
top:0;
backround-color:${({theme})=>theme.bg};
height:60px;

`
const Wraper = styled.div`
display:flex;
align-items:center;
height:100%;
padding:0px 20px;
justify-content:flex-end;
position:relative;
`
const Search = styled.div`
position:absolute;
left:0px;
right:0;
margin:auto;
width:40%;
display:flex;
justify-content:space-between;
border: 1px solid grey;
border-raduis:3px;
`
const Input = styled.input`
align-items:center;
border:none;
outline:none;
background-color:transparent;
width:100%;
`
const Btn = styled.button`
padding:5px 14px;
margin-top:5px;
background-color:transparent;
border: 1px solid #3ea6ff;
color:#3ea6ff;
border-raduis:7px;
cursor:pointer;
display:flex;
gap:4px;
`
const Navbar = () => {
  return (
	<Container>
    <Wraper>
    <Search>
      <Input placeholder='Search'/>
    <SearchIcon />
    </Search>
    <Link to ="singin">
    <Btn >
      <AccountCircleIcon />
      Sign In</Btn>
    </Link>
    </Wraper>
  </Container>
  )
}

export default Navbar