import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="flex justify-center py-20 px-0">
      <div className="text-center capitalize">
        <h1 className=' text-3xl pb-6 tracking-wide font-semibold'>oops! it's a dead end</h1>
        <Link to="/" className='uppercase tracking-widest  border-2 py-2 px-3 inline-block cursor-pointer text-xs rounded bg-violet-600 text-white border-transparent hover:bg-violet-200 hover:text-violet-600'>
          back home
        </Link>
      </div>
    </section>
  )
}

export default Error