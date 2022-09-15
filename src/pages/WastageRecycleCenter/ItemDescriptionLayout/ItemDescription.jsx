import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import ItemDetails from './ItemDetails';

export default function ItemDescription() {
  return (
    <ItemDetails
    image = "https://images.unsplash.com/photo-1606355601253-61a57fe375e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
    title = "Carrot"
    description="Carrot, (Daucus carota), herbaceous, generally biennial plant of the Apiaceae family that produces an edible taproot. Among common varieties root shapes range from globular to long, with lower ends blunt to pointed. Besides the orange-coloured roots, white-, yellow-, and purple-fleshed varieties are known."
    sellName="W.D Ruwan"
    location="23/C, Mirissa Rd, Kandy"
    category="Carrot"
    quality="Good"
    
    quantity="56.5"
    />
  )
}
