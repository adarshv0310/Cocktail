import React from 'react'
import { useGlobalContext } from '../Context'
import Cocktail from './Cocktail'
import Loading from './Loading'

const cocktailList =()=>{
   const { loading, cocktails } = useGlobalContext();
  console.log(cocktails);
  if (loading) {
    return <Loading/>;
  }
  if (cocktails.length===0) {
    return <h2 className="text-3xl capitalize tracking-[0.3rem] text-center mb-14 mt-4">no cocktails matched your search</h2>
  }
  
  return (
    <section className=" py-20 px-0">
      <h2 className="text-3xl capitalize tracking-[0.3rem] text-center mb-14 mt-4">cocktails</h2>
      <div className="w-5/6 my-0 mx-auto max-w-6xl grid gap-8 grid-cols-[repeat(auto-fill,minmax(338.8px,_1fr))]">
        {
          cocktails.map((item)=>{
            return <Cocktail key={item.id} {...item}/>
          })
        }
      </div>
    </section>
  )
}

export default cocktailList