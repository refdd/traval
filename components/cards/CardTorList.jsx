import React from 'react'
import CardList from './CardList'

function CardTorList({packages}) {
  return (
    <div className='flex  flex-col justify-center items-center gap-3 w-full '>
        <div><CardList  packages={packages}/></div>
     
    </div>
  )
}

export default CardTorList