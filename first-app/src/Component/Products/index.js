import React from 'react'

const Products = ({prod = []}) => {
  return (
	<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      
	  {
		prod.map((prod, id ) =>{
			console.log(prod);
			return (
				<div className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-45 cursor-pointer" key={prod.id} >
				<a className="block  h-48 rounded overflow-hidden">
				  <img alt={prod.title} class="object-contain object-center w-full h-full block" src={prod.image} />
				</a>
				<div className="mt-4">
				  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{prod.category}</h3>
				  <h2 className="text-gray-900 title-font text-xl font-medium">{prod.title}</h2>
				  <p className="mt-1 font-semibold">${prod.price}</p>
				</div>
			  </div>
			)
		})
	  }
    </div>
  </div>
</section>
  )
}

export default Products