import React from 'react'
import Scaveltyp from './Scaveltyp'
import '../Styles/Planitm.css'

function Plantitem({name, id, light, water}) {
  return (
		<li key ={id} className='li-sty'> {name}
			<div>
				<Scaveltyp scalval={light} scaltyp='light'/>
				<Scaveltyp scalval={water} scaltyp='water'/>
			</div>
		</li>
  )
}

export default Plantitem