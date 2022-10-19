import React from 'react'

export default function Error() {
  return (
    <div className='not-home text-pink-50'>
      <div className='flex h-[40vh] items-center flex-col lg:h-[50vh] justify-center'>
          <h1 className='font-bold text-6xl'>404 <span className='font-thin'> Page not found</span></h1>
          <p className='mt-5'>The page you are requesting doesn't exist</p>
      </div>
    </div>
  )
}
