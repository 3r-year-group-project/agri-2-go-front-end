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
      image="https://familynano.com/wp-content/uploads/2019/01/bad-carrot.jpg?ezimgfmt=rs:352x235/rscb3/ngcb3/notWebP"
      title="Carrot"
      quality="Rotten"
      location="Colombo"
      weight="50"
      price="100"
      />

    <ItemCard
      image="https://images.unsplash.com/photo-1633362811339-713febc7146b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
      title="Pumpkin"
      quality="About to rot"
      location="Kandy"
      weight="150"
      price="100"
      />
    </div>
    <div className='item-row-two'>
      <ItemCard
        image="https://st4.depositphotos.com/15795830/22193/i/600/depositphotos_221935962-stock-photo-rotten-spoiled-eggplant-vegetables-lie.jpg"
        title="Eggplant"
        quality="Rotten"
        location="Badulla"
        weight="72"
        price="100"
        />

      <ItemCard
        image="http://2.bp.blogspot.com/-KVzwLifmXXs/Uy8WEt_T09I/AAAAAAAACw0/rW7ojdfZ8yY/s1600/IMG_7577.JPG"
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
