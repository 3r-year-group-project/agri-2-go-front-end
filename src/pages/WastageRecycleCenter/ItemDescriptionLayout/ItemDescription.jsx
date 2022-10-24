import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React,{useEffect, useState} from 'react'
import ItemDetails from './ItemDetails';
import axios from 'axios'

export default function ItemDescription({orderId}) {

  const [itemInfo, setItemInfo] = useState()
  const [userInfo, setUserInfo] = useState()
  
  useEffect(()=>{
    const fetchOrderInfo = async()=>{
      const {data} = await axios.get(`http://localhost:3002/api/wrc/wastage_detail_item_info/${orderId}`);
      setItemInfo(data.data)

      
    }
    const fetchUserInfo = async()=>{
      const {data} = await axios.get(`http://localhost:3002/api/wrc/wastage_detail_user/${orderId}`);
      setUserInfo(data.data[0])

      
    }
    fetchOrderInfo()
    fetchUserInfo()
  }, [])


  return (

    itemInfo != undefined ? itemInfo.map(info=>{
     return <ItemDetails
      title = {info.vegetable}
      sellName= {userInfo != undefined ? (userInfo.first_name + ' ' + userInfo.last_name) : null}
      location= { userInfo != undefined ? (userInfo.address1+ " " + userInfo.city): null}
      category= {info.vegetable}
      quality={info.quality}
      quantity=  {info.quantity}
      price= {info.price}
      sellerInfo={userInfo}
      orderInfo={info}
      wastage_details_id ={orderId}
      />
    }) : <></>
    
  )
}
