import React from 'react'
import ItemCount from '../itemCount/ItemCount'

export default function ItemDetail({item}) {
  return (
    <div className='cont-detail'>

      <img className="img-detail" src={item.pictureUrl} />

      <div className='detail'>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p>Precio: {item.price}</p>
        <ItemCount stock={4} initial= {0}/>
      </div>
    </div>
  )
}
