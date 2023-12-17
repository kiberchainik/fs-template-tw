import React from 'react'

const HomePage = () => {
  return (
    <div className='container flex flex-row'>
      <div className='bg-find-yellow py-10 px-4 w-1/2 rounded-tl-xl rounded-bl-xl'>
        Candidats list
      </div>
      <div className="bg-sol-sky py-10 px-4 w-1/2 rounded-tr-xl rounded-br-xl">
        Vacancies list
      </div>
    </div>
  )
}

export default HomePage