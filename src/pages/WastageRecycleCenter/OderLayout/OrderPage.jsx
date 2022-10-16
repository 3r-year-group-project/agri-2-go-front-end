import { CardContent, Divider, IconButton, List, ListItem, ListItemText, TextField, Typography } from '@mui/material'
import React from 'react'
import OrderComponent from './OrderComponent'
import './orderpage.css';
import SearchBar from '../../../components/SearchBar';
import Filter from '../../../components/FilterBar';


export default function OrderPage() {
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
        
            {<SearchBar/>}
            <Filter id="order-filter-status" label="Status" width="30%" options={[{title:"Pending"}, {title:"Completed"}, {title:"Cancelled"}]}/>
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
        <OrderComponent date="2021 - 05 - 30" orderName="Carrot" pickupDate="2021 - 05 - 31" status="Pending"/>
        <OrderComponent date="2016 - 08 - 23" orderName="Potato" pickupDate="2021 - 05 - 31" status="Pending"/>
        <OrderComponent date="2019 - 12 - 05" orderName="Beetroot" pickupDate="2021 - 05 - 31" status="Completed"/>
        <OrderComponent date="2020 - 02 - 10" orderName="Tomato" pickupDate="2021 - 05 - 31" status="Completed"/>

    </div>
    </div>
  )
}
