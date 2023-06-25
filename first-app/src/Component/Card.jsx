import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

const Container = styled.div`
width:${props => props.type !== "sm" && "360px"};
margin-buttom:${props => props.type === "sm" ? "25px" : "45px"}; 
cursor:pointer;
gap:15px;
margin:0px 20px;
display:${props => props.type === "sm" && "flex"}; 
`
const Img = styled.img`
width:100%;
height:${props => props.type === "sm" ? "120px" : "202px"};
background-color:grey;
flex:1;
`
const Details = styled.div`
display:flex;
margin-top:${props => props.type !== "sm" && "16px"};
gap:12px;
flex:1;
`
const Im = styled.img`
width:${props => props.type === "sm" ? "15px" : "32px"};
height:${props => props.type === "sm" ?"15px" : "32px"}; 
border-radius:50%;
margin-buttom:22px;
background-color:#999;
display:${props => props.type === "sm" && "none"}
`

const Par = styled.div`
margin-top:0px;

`
const Text = styled.h1`
font-size:15px;
font-weight:500;
color :${({theme})=>theme.text}
`
const Chanelname = styled.h2`
font-size:10px;
font-weight:300;
color :${({theme})=>theme.text};
margin:3px 5px;;
`
const Info = styled.div`
font-size:10px;
margin:5px 0px;
color :${({theme})=>theme.text};
`
const Card = ({type}) => {
  return (
	<Link to ="/video/test">
	<Container type ={type}>
		<Img type ={type}/>
		<Details type={type}>
		<Im type ={type}></Im>
		<Par>
			<Text>Test videos</Text>
			<Chanelname>Obra</Chanelname>
			<Info>690,560 viewes * 1day ago</Info>
		</Par>
		</Details>
	</Container>
	</Link>
  )
}

export default Card