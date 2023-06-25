
import '../Styles/cat.css'
import React, { useEffect, useState } from 'react'

  
	function Cat() {
		const monsteraPrice = 8
		const [cart, updateCart] = useState(0)
		//const [isOpen, setIsOpen] = useState(false)

	 useEffect(()=>{
		//alert(`afficher ${monsteraPrice} * ${cart} en euro`);
		document.title = `afficher ${monsteraPrice} * ${cart} en euro`;
	 }, [cart])
		return  (
			<div className='imj-cart'>
				<button onClick={()=>updateCart(cart - cart)}>vider</button>
				
				<h2>Panier</h2>
				<div>
					Monstera : {monsteraPrice}€
					<button onClick={() => updateCart(cart + 1)}>
						Ajouter
					</button>
				</div>
				<h3>Total : {monsteraPrice * cart}€</h3>
			</div>
		) 
	}


export default Cat