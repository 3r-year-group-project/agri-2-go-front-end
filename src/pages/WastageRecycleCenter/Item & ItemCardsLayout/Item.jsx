import React,{useEffect, useState} from 'react'
import './item.css';
import ItemCard from './ItemCard';
import SearchBar from '../../../components/SearchBar';
import axios from 'axios'

export default function Items() {

  const [orderData, setOrderData] = useState()

  useEffect(()=>{

    const fetchData = async()=>{
      const {data} = await axios.get('http://localhost:3002/api/wrc/wastage_details')
      setOrderData(data.data)
    }

    fetchData()
    
  },[])

  useEffect(()=>{
    console.log(orderData)
  }, [orderData])

  return (
    <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'5%',minHeight:'100%'}}>
    <div className="App">
      <SearchBar/>
      <div className='item-row-one'>

        {
          orderData != undefined ? orderData.map(order=>{
            if(order.declined === 0 ){
              return <ItemCard
            title={order.vegetable}
            quality={order.quality}
            location="Colombo"
            weight={order.quantity}
            price={order.price}
            orderInfo={order}
            setOrderData={(orders)=>setOrderData(orders)}
            />
            }
                  
          }) : <></>
        }


    </div>

    </div>
    </div>
  )
}
