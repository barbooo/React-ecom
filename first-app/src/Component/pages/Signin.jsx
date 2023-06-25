import React from 'react'

import styled from "styled-components";

const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
aligm-items:center;
height: calc(100vh - 60px);
color :${({theme})=>theme.text};

`
const Top = styled.div`
display:flex;
flex-direction:column;
align-items:center;
background-color :${({theme})=>theme.bgLighter};
padding:25px 45px;
border :1px solid ${({theme})=>theme.soft};
gap:10px;

`
const Titl = styled.h1`
font-size:19px;
color:${({theme})=>theme.text};
text-align:center;
`
const Subtitl = styled.h2`
font-size:14px;
color :${({theme})=>theme.text};
text-align:center;
`
const Input = styled.input`
border:1px solid ${(theme)=>theme.soft};
outline:none;
bordrer-radius:3px;
width:290px;
//background-color:transparent;
`
const Btn = styled.button`
color:${({theme})=>theme.text};
border-radius:3px;
padding:10px 15px;
border:none;
cursor:pointer;
font-weight:500;
background-color:${(theme)=>theme.soft};
`
const But = styled.div`
display:flex;
justify-content:space-between;
color:${({theme})=>theme.text};
cursor:pointer;
`
const Links = styled.div`
margin-left:50px;
cursor:pointer;
`
const Link = styled.span`
margin-left:50px;
`
const Signin = () => {
  return (
	<Container>
		<Top>
		<Titl>Sing up</Titl>
		<Subtitl>to continue to Obra</Subtitl>
		<Input placeholder='add username'/>
		<Input type ="password" placeholder='add password '/>
		<Btn>Sign in</Btn>
		<Titl>Or </Titl>
		<Input placeholder='add username'/>
		<Input type = "email" placeholder='add email '/>
		<Input type ="password" placeholder='add password '/>
		<Btn>Sign up</Btn>
		</Top>
		<But>
			English(usa)
			<Links>
			<Link>
				Help
			</Link>
			<Link>
				Privacy
			</Link>
			<Link>
				Term
			</Link>
			</Links>
		</But>
	</Container>
  )
}

export default Signin