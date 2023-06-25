import React from 'react'
import {plantList} from '../Data/listdata'
import Plantitem from './Plantitem'
import '../Styles/Shoplist.css'


function Shoping() {
	const categories = plantList.reduce(
	(acc, plant) =>
		acc.includes(plant.category) ? acc : acc.concat(plant.category),
	[])
  return (
	<div className='list-wrp'>
		<ul>
			{categories.map((cat) =>(<li key={cat}>{cat}</li>))}
		</ul>
		<ul>
			{plantList.map(({name, id, light, water}) =>(
				<Plantitem name={name}
							id ={id}
							light={light}
							water={water}
				/>
			))}
		</ul>
	</div>
  )
}

export default Shoping