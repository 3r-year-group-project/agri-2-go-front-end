import { CardContent, Divider, IconButton, List, ListItem, ListItemText, TextField, Typography } from '@mui/material'
import React,{useState, useEffect} from 'react'
import OrderComponent from './OrderComponent'
import './orderpage.css';
import SearchBar from '../../../components/SearchBar';
import Filter from '../../../components/FilterBar';
import axios from 'axios'


export default function OrderPage() {

  const [orderData, setOrderData] = useState()

  useEffect(()=>{

    const fetchData = async()=>{
      const {data} = await axios.get('http://localhost:3002/api/wrc/wastage_orders')
      setOrderData(data.data)
    }

    fetchData()
    
  },[])

  useEffect(()=>{
    console.log(orderData,'orderData')
  },[orderData])

  console.log(orderData)


  return (
    <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'5%',minHeight:'100%'}}>
       <Typography
          sx={{ flex: '1 1 100%' }}
          id="tableTitle"
          component="div"
          color='#075E54'
          fontWeight='700'
          fontSize='28px'

        >
        Order List
        </Typography>
    <div className='table-pre'>
      <div className="topic-preference">
        
            {/* {<SearchBar/>} */}
            <Filter id="order-filter-status" label="Status" width="30%" options={[{title:"Pending"}, {title:"Completed"}, {title:"Cancelled"}]} setOrderData={e=>setOrderData(e)}/>
      </div>
      <br />
         
         <Divider color='#9df58c'/>
      <List dense className='list-head'>
      <ListItem style={{marginLeft:'12px',}}>
        <ListItemText>
          <Typography gutterBottom variant='subtitle1' style={{color:'#fff',fontSize:'18px',}}>
              Order Date
          </Typography>
        </ListItemText>

        <ListItemText>
          <Typography gutterBottom variant='subtitle1' style={{color:'#fff',fontSize:'18px',}}>
              Order Name
          </Typography>
        </ListItemText>

        <ListItemText>
          <Typography gutterBottom variant='subtitle1' style={{color:'#fff',fontSize:'18px',}}>
              Pickup Date
          </Typography>
        </ListItemText>

        <ListItemText>
          <Typography gutterBottom variant='subtitle1' style={{color:'#fff',fontSize:'18px',}}>
              Status
          </Typography>
        </ListItemText>

        <ListItemText>
          <Typography gutterBottom variant='subtitle1' style={{color:'#fff',fontSize:'18px',}}>
              Order Details
          </Typography>
        </ListItemText>

        <ListItemText>
          <Typography gutterBottom variant='subtitle1' style={{color:'#fff',fontSize:'18px',}}>
              Mark as Collected
          </Typography>
        </ListItemText>

        <ListItemText>
          <Typography gutterBottom variant='subtitle1' style={{color:'#fff',fontSize:'18px',}}>
              Cancel Order
          </Typography>
        </ListItemText>

      </ListItem>
      <Divider color='#9df58c'/>
      </List>
        {orderData != undefined ? orderData.map((orderDetails)=>{

        return <OrderComponent date={orderDetails.order_date} id={orderDetails.id} orderName={orderDetails.order_name} pickupDate={orderDetails.pickup_date} status={orderDetails.status} orderId={orderDetails.order_id}
          setOrderData={(data)=>setOrderData(data) }
        />

         
        }) : <></>} 
       

    </div>
    </div>
  )
}
