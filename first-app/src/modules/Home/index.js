import React, { useEffect, useState } from 'react'
import Hero from '../../Hero'
import Products from '../../Component/Products'
import FeaturCard from '../../Component/FeaturesCard'
import Stati from '../../Component/Statist'
import Footer from '../../Component/Footer/index'

const Home = () => {
	const[prod, setprod] = useState([])
	useEffect( ()=> {
		const fetchdat = async () =>{
			const resp = await fetch("https://fakestoreapi.com/products")
			const data = await (resp.json())
			//console.log(data)
			setprod(data)
		}
		fetchdat()
	},[]

	)
  return (
	<>
	 <Hero />
	 <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-ms text-blue-500 tracking-widest font-medium title-font mb-1">Products</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Most popular</h1>
    </div>
	{
		prod.length > 0 ?
		<Products prod={prod} />
		:
		<div className='text-center'>!....Loading</div>
	}
	 <Products />
	 <FeaturCard />
	 <Stati />
	 <Footer />
	</>
  )
}

export default Home