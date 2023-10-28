import React from 'react'

const Home = () => {
  return (
    <section className='w-full flex flex-col items-center   font-satoshi h-screen bg-gradient-to-b from-red-100 to-blue-100'>
      <h1 className='text-2xl font-bold '>
        Discover & Share 
      </h1>
      <span className='min-md:hidden text-4xl font-extrabold 
      bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent
      leading-relaxed
      '>AI-Powered Prompts</span>
      <p className='font-inter  leading-loose'>Modern OpenSource For AI-Power prompts, Create and share Creative prompts</p>
    </section>
  )
}

export default Home;