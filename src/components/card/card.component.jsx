import React from 'react'
import './card.styles.css'

export const Card = props => (
  <div className='card'>
    <img
      className='card__image'
      src={`https://robohash.org/${props.monster.id}?set=set1&size=180x180`}
      alt={props.monster.name}
    />
    <h2>{props.monster.name}</h2>
    <div>{props.monster.email}</div>
  </div>
);
