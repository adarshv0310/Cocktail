import React from 'react'
import { useGlobalContext } from '../Context'

const SearchForm=()=>{

   const {setSearchTerm} =useGlobalContext();

  const searchValue=React.useRef('');

  React.useEffect(()=>{
    searchValue.current.focus();
  } ,[])
  const searchCocktail=()=>{
    setSearchTerm(searchValue.current.value);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  return (
 
  
    
    
    <section className=" py-20 px-0 mt-4 pb-0">
      <form className="w-5/6 my-0 mx-auto max-w-2xl bg-gray-800 py-8 px-10 capitalize rounded shadow-[2px_5px_3px_0px_rgba(0,0,0,0.5)]" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className='block mb-5 font-bold tracking-wide text-violet-300'>search your favorite cocktail</label>
          <input type="text" id="name" ref={searchValue} className='w-full border-none border-transparent rounded p-2 text-xl text-black' onChange={searchCocktail}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm