import React from 'react'
import './item.css';
import ItemCard from './ItemCard';
import SearchBar from '../../../components/SearchBar';

export default function Items() {
  return (
    <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'5%',minHeight:'100%'}}>
    <div className="App">
      {<SearchBar/>}
      <div className='item-row-one'>
      <ItemCard
      title="Carrot"
      quality="Rotten"
      location="Colombo"
      weight="50"
      price="100"
      />

    <ItemCard
      title="Pumpkin"
      quality="About to rot"
      location="Kandy"
      weight="150"
      price="100"
      />
    </div>
    <div className='item-row-two'>
      <ItemCard
        title="Eggplant"
        quality="Rotten"
        location="Badulla"
        weight="72"
        price="100"
        />

      <ItemCard
        title="Leeks"
        quality="Rotten"
        location="NuwaraEliya"
        weight="15"
        price="100"
        />
      </div>
    </div>
    </div>
  )
}
