import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import TransporterDetails from './TransporterDetails';

export default function TransporterDescription() {
  return (
    <TransporterDetails
    image = "https://visor.ph/wp-content/uploads/2019/09/suzuki-carry-main1.jpg"
    title = "Lorry"
    description="Carrot, (Daucus carota), herbaceous, generally biennial plant of the Apiaceae family that produces an edible taproot. Among common varieties root shapes range from globular to long, with lower ends blunt to pointed. Besides the orange-coloured roots, white-, yellow-, and purple-fleshed varieties are known."
    transporterName="W.D Ruwan"
    location="Kandy"
    price="1500LKR"

    />
  )
}
