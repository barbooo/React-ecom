

import React from 'react'

const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}

function Scaveltyp({scalval,scaltyp}) {
const rang =[1,2,3]

  return (
	<div onClick={() =>
		alert(
			`Cette plante requiert ${quantityLabel[scalval]} ${
				scaltyp === 'light' ? 'de lumière' : "d'arrosage"
			}`
		)
	}>
		
	{rang.map(sc => scalval >= rang ? (<span key={sc} >{scaltyp}</span>)  : null)}  

	</div>
  )
}

export default Scaveltyp