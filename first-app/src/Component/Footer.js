
import '../Styles/fiter.css'
import React, {  useState } from 'react'

function Footer() {


	const[em,setem] = useState("bhu@gmail.com");
function hand(e){
		//e.preventDefault();
		setem(e.target.value)
	}
function err(){
	if (!em.includes('@'))
		alert("error");}
	 /*useEffect(()=>{
		return () => 
			alert("yopo");

	 })*/
  return (
	<div className='fot'>
		<h2 className='hhh'>taper votre email</h2>
		<input claasName='in' type='email' value ={em} onChange={hand} onBlur={err}></input>
	</div>
  )
}

export default Footer