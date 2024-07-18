import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({image,name,id,info,glass}) => {
  return (
    <article className="bg-gray-800 mb-8 shadow-[2px_5px_3px_0px_rgba(0,0,0,0.5)] grid grid-rows-[auto_1fr] rounded hover:shadow-[4px_10px_5px_0px_rgba(0,0,0,0.5)]">
      <div className="img-container">
        <img src={image} alt={name} className='h-80 object-cover rounded-t w-full'/>
      </div>
      <div className="p-6">
        <h3 className='mb-1 text-3xl font-bold'>{name}</h3>
        <h4 className='mb-1 font-bold'>{glass}</h4>
        <p className='text-gray-400 mb-2'>{info}</p>
        <Link to={`/cocktail/${id}`} className='uppercase tracking-widest  border-2 py-2 px-3 inline-block cursor-pointer text-xs rounded bg-violet-600 text-white border-transparent hover:bg-violet-200 hover:text-violet-600' >details</Link>
      </div>
    </article>
  )
}

export default Cocktail