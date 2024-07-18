import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const {id} = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);
  React.useEffect(()=>{
    setLoading(true);
    async function getCocktail() {
      try {
        const response= await fetch(`${url}${id}`)
        const data= await response.json();
        console.log(data);
        if (data.drinks) {
          const {strDrink:name,strDrinkThumb:image,strAlcoholic:info,strCategory:category,strGlass:glass,strInstructions:instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          }=data.drinks[0];
          const ingredients=[strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,];
            const newCocktail={name,image,info,category,glass,instructions,ingredients};
            setCocktail(newCocktail);
        }
        else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCocktail();
  },[id]);

  if (loading) {
    return <Loading/>
  }
  if (!cocktail) {
    return <h2 className='text-3xl capitalize tracking-[0.3rem] text-center mb-14 mt-4'>no cocktail to display</h2>
  }
  const {name,image,info,category,glass,instructions,ingredients}=cocktail;
  return (
    <section className=' py-20 px-0 text-center'>
      <Link to="/" className='uppercase tracking-widest  border-2 py-2 px-3 inline-block cursor-pointer text-xs rounded bg-violet-600 text-white border-transparent hover:bg-violet-200 hover:text-violet-600'>
        back home
      </Link>
      <h2 className="text-3xl capitalize tracking-[0.3rem] text-center mb-14 mt-4 font-semibold">{name}</h2>
      <div className="w-5/6 max-w-6xl my-0 mx-auto text-left lg:grid lg:grid-cols-[2fr_3fr] lg:gap-12 lg:items-center">
        <img src={image} alt={name} className='rounded'/>
        <div className="pt-8 lg:pt-0">
          <p className='font-bold capitalize leading-relaxed mb-5'>
            <span className="mr-2 bg-violet-200 py-1 px-2 rounded text-violet-600">name :</span>
            {name}
          </p>
          <p className='font-bold capitalize leading-relaxed mb-5'>
            <span className="mr-2 bg-violet-200 py-1 px-2 rounded text-violet-600">category :</span>
            {category}
          </p>
          <p className='font-bold capitalize leading-relaxed mb-5'>
            <span className="mr-2 bg-violet-200 py-1 px-2 rounded text-violet-600">info :</span>
            {info}
          </p>
          <p className='font-bold capitalize leading-relaxed mb-5'>
            <span className="mr-2 bg-violet-200 py-1 px-2 rounded text-violet-600">glass :</span>
            {glass}
          </p>
          <p className='font-bold capitalize leading-relaxed mb-5'>
            <span className="mr-2 bg-violet-200 py-1 px-2 rounded text-violet-600">instructions:</span>
            {instructions}
          </p>
          <p className='font-bold capitalize leading-relaxed mb-5'>
            <span className="mr-2 bg-violet-200 py-1 px-2 rounded text-violet-600">ingredients:</span>
            {
              ingredients.map((item,index)=>{
                return item?<span key={index}>{item}</span> :null;
              })
            }
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail