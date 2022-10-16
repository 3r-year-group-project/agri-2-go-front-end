import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import ItemDetails from './ItemDetails';

export default function ItemDescription() {
  return (
    <ItemDetails
    title = "Carrot"
    // description="Carrot, (Daucus carota), herbaceous, generally biennial plant of the Apiaceae family that produces an edible taproot. Among common varieties root shapes range from globular to long, with lower ends blunt to pointed. Besides the orange-coloured roots, white-, yellow-, and purple-fleshed varieties are known."
    sellName="W.D Ruwan"
    location="23/C, Mirissa Rd, Kandy"
    category="Carrot"
    quality="Good"
    quantity="56.5"
    price="200"
    />
  )
}
