import React from 'react'
import { Box, Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, List, ListItem, ListItemText, MenuItem, Select, TextField, Typography } from '@mui/material'
import WisTableData from './WisTableData'
import './wislist.css';
import SearchBar from '../../../components/SearchBar';

export default function Wislist() {
  return (
    <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'5%',minHeight:'100%'}}>
      <Box 
        width="70vw"
        maxWidth="xl"
        margin="auto"
        >
        <Card style={{height:'auto', margin:'20px  0 50px 0',borderRadius:'5px',backgroundColor:'#075e54',color:'#fff',padding:'15px',}}>
            
            <div className="topic-preference">
            <CardContent>
              <h2 style={{fontSize: '28px',fontWeight: '500',margin:'0 0 0 20px',}}>Wishlist</h2>
            </CardContent>
            {/* {<SearchBar/>} */}
            </div>
            
          
          <div className="table-container">
            <CardContent>
              <Divider color='#9df58c'/>
              <List dense >
                <ListItem style={{padding:'0 0',height:'40px',}}>
                  <ListItemText>
                    <Typography gutterBottom variant='subtitle1' style={{color:'#fff',fontSize:'18px',}}>
                      Seller Name
                    </Typography>
                  </ListItemText>

                  <ListItemText>
                    <Typography gutterBottom variant='subtitle1' style={{color:'#fff',fontSize:'18px',}}>
                      Location
                    </Typography>
                  </ListItemText>
                  
                  <ListItemText>
                    <Typography gutterBottom variant='subtitle1' style={{color:'#fff',fontSize:'18px',}}>
                        Recieve Notifications
                    </Typography>
                  </ListItemText>

                  <ListItemText>
                    <Typography gutterBottom variant='subtitle1' style={{color:'#fff',fontSize:'18px',}}>
                        Remove
                    </Typography>
                  </ListItemText>
                </ListItem>
                <Divider color='#9df58c'/>
                  
                  <WisTableData SellerName="T.A Afran" SellerLocation="Badulla"/>
                  <WisTableData SellerName="E.W Nuwan" SellerLocation="Badulla"/>
                  <WisTableData SellerName="W.G.D Jeniffer" SellerLocation="Badulla"/>
                  <WisTableData SellerName="A.B Mathew" SellerLocation="Badulla"/>
                  
              </List>
            </CardContent>
          </div>
        </Card>
      </Box>
    </div>
  )
}
