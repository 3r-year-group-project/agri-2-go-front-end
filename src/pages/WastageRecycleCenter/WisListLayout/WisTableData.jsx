import { Button, Divider, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import SwitchWislis from './SwitchWislist'
import './wislist.css';

export default function WisTableData(props) {
    return (
    <div>
        <List dense>
            <ListItem>
                <ListItemText><Typography sx={{color:'#fff'}}>{props.SellerName}</Typography></ListItemText>
                <ListItemText><Typography sx={{color:'#fff'}}>{props.SellerLocation}</Typography></ListItemText>
                <ListItemText><SwitchWislis/></ListItemText>
                <ListItemText><Button variant="contained" sx={{color:'#fff',backgroundColor:'#f57a38',}}>Remove</Button></ListItemText>
            </ListItem>
            <Divider color='#9df58c'/>
        </List>
    </div>
  )
}
