
import React, { useEffect, useState } from 'react'
import styled  from 'styled-components'
import Card from "../Card.jsx"
import axios from 'axios';
const Container = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between;

`

const Home = ({type}) => {
	const [videos, setvid] = useState([]);
	useEffect(()=>{
		const fetchdata = async ()=>{
			const res = await axios.get(`/video/${type}`);
			setvid(res.data);
		}
		fetchdata();
	},[type])

  return (
	<Container >
		{videos.map(video=>{
			<Card />
		})}
	</Container>
  )
}

export default Home