import React from 'react'
import styled from 'styled-components'
import Coments from './Coments'


const Container = styled.div`
margin :25px 5px;
`
const Newcomt = styled.div`
display:flex;
align-items:center;
gap:20px;
`
const Avatar = styled.img`
height:35px;
width:35px;
border-radius:50%;
`
const Input = styled.input`
border:none;
border-buttom: 1px solid ${({theme})=>theme.soft};
outline:none;
padding:5px;
background-color:transparent;
width:100%
`

const Comentairs = () => {
  return (
	<Container>
		<Newcomt>
			<Avatar />
				<Input placeholder='add a comment'/>
		</Newcomt>
		<Coments/>
		<Coments/>
		<Coments/>
		<Coments/>
		<Coments/>
		<Coments/>
		<Coments/>
		<Coments/>
		<Coments/>
		<Coments/>
	</Container>
  )
}

export default Comentairs