import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
display:flex;
margin:30px 0px;
gap:10px;
`
const Avatar = styled.img`
height:35px;
width:35px;
border-radius:50%;
`

const Details = styled.div`
display:flex;
flex-direction:column;
gap:10px;
`
const Name = styled.span`
color:${({theme})=>theme.text};
`
const Dat = styled.span`
color:${({theme})=>theme.text};
font-size:12px
`

const Text =styled.span`
color:${({theme})=>theme.text};`
const Coments = () => {
  return (
	<Container>
		<Avatar />
		<Details>
			<Name>Obra <Dat>1 day ago</Dat></Name>
			<Text> hello every body comments id=s awesome</Text>
		</Details>
	</Container>
  )
}

export default Coments