import * as React from 'react';
import { Typography, Grid, Card, Toolbar, Paper } from "@mui/material";
import Box from '@mui/material/Box';
import {useNavigate} from "react-router-dom"
import Button from '@mui/material/Button';
import SearchBar from '../../../components/SearchBar';
import Filter from '../../../components/FilterBar';


import Container from '@mui/material/Container';
import ButtonGroup from "@mui/material/ButtonGroup";

export default function FindTransporter() {
    const navigate = useNavigate();
    const [crops, setcrops] = React.useState(30);

    function range(start, end) {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }

    const jsx = `
    <Grid container spacing={2}>
    `;

    const sortByOptions = [
        {title: "Capacity (cc)"}, 
        {title: "Weight (kg) "}
    ];

    const sortOptions = [
        {title: "Asc"}, 
        {title: "Desc"}
    ];

  return (
    <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'5%',minHeight:'100%'}} >
    <Box
    component="span"
    m={1}
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    >
    <SearchBar placeholder="Search here"/>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Filter id="sort-sellers" label="Search By" options={sortByOptions} width={200}/>
        <Filter id="sort-sellers" label="Order" options={sortOptions} width={150}/>
    </ButtonGroup> 
    </Box>
    <Container>

        <Grid  container spacing={5} >
            <Grid item md={3}>
            <Paper elevation={3} style={{marginTop:"10px"}}>
                    <img
                    className="img"
                    src="https://lal.lk/wp-content/uploads/2017/02/thump2.jpg"
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}>
                    <Typography variant="subtitles2" component="h4">ECOMET 1212</Typography>
                    <Typography variant="subtitles2" component="h4">5660 cc</Typography>
                    <Box
                        sx={{display: "flex",
                             alignItems: "center"
                    }}
                    >
                        {/* <Button variant="contained" color="success" sx={{marginRight:"10px" , marginBottom:"10px", fontSize:"10px"}}>
                            View 
                        </Button>
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , marginBottom:"10px", fontSize:"10px"}}>
                            Edit 
                        </Button>
                        <Button variant="contained" color="error" sx={{ fontSize:"10px" , marginBottom:"10px"}}>
                            Delete
                        </Button> */}

                        <ButtonGroup variant="text" aria-label="text button group" sx={{marginLeft: "17px" , marginTop:"5px" , marginBottom:"10px"}}>
                        <Button variant="contained" color="success" sx={{marginRight:"10px" , fontSize:"10px"}}>
                            Details 
                        </Button>
                        
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px"}} onClick={()=>{navigate("/farmer/dash/chatpage")}}>
                            Contact
                        </Button> 
                        </ButtonGroup>
                        {/* <Typography variant="body2" component="p" style={{color:"white"}}>
                            Quantity: 
                        </Typography> */}
                        
                    </Box>
                    <Box id="detailsList">

                    </Box>
                    
                    {/* <Box>
                    <Typography variant="body2" component="p" style={{color:"white"}}>
                            Minimum Buying Price: 
                        </Typography>
                    </Box>

                    <Box>
                    <Typography variant="body2" component="p" style={{color:"white"}}>
                            Maximum Buying Price: 
                        </Typography>
                    </Box>

                    <Box>
                    <Typography variant="body2" component="p" style={{color:"white"}}>
                            Average Buying Price: 
                        </Typography>
                    </Box> */}

                    </Box>
                </Paper>
            </Grid>
            <Grid item md={3}>
            <Paper elevation={3} style={{marginTop:"10px"}}>
                    <img
                    className="img"
                    src="https://lal.lk/wp-content/uploads/2017/02/boss-inner1.jpg"
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}>
                    <Typography variant="subtitles2" component="h4">Boss</Typography>
                    <Typography variant="subtitles2" component="h4">5660 cc</Typography>
                    <Box
                        sx={{display: "flex",
                             alignItems: "center"
                    }}
                    >
                        {/* <Button variant="contained" color="success" sx={{marginRight:"10px" , marginBottom:"10px", fontSize:"10px"}}>
                            View 
                        </Button>
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , marginBottom:"10px", fontSize:"10px"}}>
                            Edit 
                        </Button>
                        <Button variant="contained" color="error" sx={{ fontSize:"10px" , marginBottom:"10px"}}>
                            Delete
                        </Button> */}

                        <ButtonGroup variant="text" aria-label="text button group" sx={{marginLeft: "17px" , marginTop:"5px" , marginBottom:"10px"}}>
                        <Button variant="contained" color="success" sx={{marginRight:"10px" , fontSize:"10px"}}>
                            Details 
                        </Button>
                        
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px"}} onClick={()=>{navigate("/farmer/dash/chatpage")}}>
                            Contact
                        </Button> 
                        </ButtonGroup>

                        {/* <Typography variant="body2" component="p" style={{color:"white"}}>
                            Quantity: 
                        </Typography> */}
                        
                    </Box>
                    <Box id="detailsList">

                    </Box>
                    
                    {/* <Box>
                    <Typography variant="body2" component="p" style={{color:"white"}}>
                            Minimum Buying Price: 
                        </Typography>
                    </Box>

                    <Box>
                    <Typography variant="body2" component="p" style={{color:"white"}}>
                            Maximum Buying Price: 
                        </Typography>
                    </Box>

                    <Box>
                    <Typography variant="body2" component="p" style={{color:"white"}}>
                            Average Buying Price: 
                        </Typography>
                    </Box> */}

                    </Box>
                </Paper>
            </Grid>
            <Grid item md={3}>
            <Paper elevation={3} style={{marginTop:"10px"}}>
                    <img
                    className="img"
                    src="data:image/jpeg;base64,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"
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}>
                    <Typography variant="subtitles2" component="h4">Tata ACE</Typography>
                    <Typography variant="subtitles2" component="h4">4000 cc</Typography>
                    <Box
                        sx={{display: "flex",
                             alignItems: "center"
                    }}
                    >
                        {/* <Button variant="contained" color="success" sx={{marginRight:"10px" , marginBottom:"10px", fontSize:"10px"}}>
                            View 
                        </Button>
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , marginBottom:"10px", fontSize:"10px"}}>
                            Edit 
                        </Button>
                        <Button variant="contained" color="error" sx={{ fontSize:"10px" , marginBottom:"10px"}}>
                            Delete
                        </Button> */}

                        <ButtonGroup variant="text" aria-label="text button group" sx={{marginLeft: "17px" , marginTop:"5px" , marginBottom:"10px"}}>
                        <Button variant="contained" color="success" sx={{marginRight:"10px" , fontSize:"10px"}}>
                            Details 
                        </Button>
                        
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px"}} onClick={()=>{navigate("/farmer/dash/chatpage")}}>
                            Contact
                        </Button> 
                        </ButtonGroup>

                        {/* <Typography variant="body2" component="p" style={{color:"white"}}>
                            Quantity: 
                        </Typography> */}
                        
                    </Box>
                    <Box id="detailsList">

                    </Box>
                    
                    {/* <Box>
                    <Typography variant="body2" component="p" style={{color:"white"}}>
                            Minimum Buying Price: 
                        </Typography>
                    </Box>

                    <Box>
                    <Typography variant="body2" component="p" style={{color:"white"}}>
                            Maximum Buying Price: 
                        </Typography>
                    </Box>

                    <Box>
                    <Typography variant="body2" component="p" style={{color:"white"}}>
                            Average Buying Price: 
                        </Typography>
                    </Box> */}

                    </Box>
                </Paper>
            </Grid>
            <Grid item md={3}>
            <Paper elevation={3} style={{marginTop:"10px"}}>
                    <img
                    className="img"
                    src="https://5.imimg.com/data5/QV/XS/GLADMIN-40048987/ashokleyland-ecomet-1212-strong-500x500.jpg"
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}>
                    <Typography variant="subtitles2" component="h4">Ecomet 1212 Strong</Typography>
                    <Typography variant="subtitles2" component="h4">5800 cc</Typography>
                    <Box
                        sx={{display: "flex",
                             alignItems: "center"
                    }}
                    >
                        {/* <Button variant="contained" color="success" sx={{marginRight:"10px" , marginBottom:"10px", fontSize:"10px"}}>
                            View 
                        </Button>
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , marginBottom:"10px", fontSize:"10px"}}>
                            Edit 
                        </Button>
                        <Button variant="contained" color="error" sx={{ fontSize:"10px" , marginBottom:"10px"}}>
                            Delete
                        </Button> */}

                        <ButtonGroup variant="text" aria-label="text button group" sx={{marginLeft: "17px" , marginTop:"5px" , marginBottom:"10px"}}>
                        <Button variant="contained" color="success" sx={{marginRight:"10px" , fontSize:"10px"}}>
                            Details 
                        </Button>
                        
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px"}} onClick={()=>{navigate("/farmer/dash/chatpage")}}>
                            Contact
                        </Button> 
                        </ButtonGroup>

                        {/* <Typography variant="body2" component="p" style={{color:"white"}}>
                            Quantity: 
                        </Typography> */}
                        
                    </Box>
                    <Box id="detailsList">

                    </Box>
                    
                    {/* <Box>
                    <Typography variant="body2" component="p" style={{color:"white"}}>
                            Minimum Buying Price: 
                        </Typography>
                    </Box>

                    <Box>
                    <Typography variant="body2" component="p" style={{color:"white"}}>
                            Maximum Buying Price: 
                        </Typography>
                    </Box>

                    <Box>
                    <Typography variant="body2" component="p" style={{color:"white"}}>
                            Average Buying Price: 
                        </Typography>
                    </Box> */}

                    </Box>
                </Paper>
            </Grid>
            <Grid item md={3}>
            <Paper elevation={3} style={{marginTop:"10px"}}>
                    <img
                    className="img"
                    src="https://countrysites-tatamotors-com.s3.ap-southeast-1.amazonaws.com/countrysite/wp-content/uploads/sites/5/2016/02/24113515/superace-gallery-02.jpg"
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}>
                    <Typography variant="subtitles2" component="h4">Tata Super ACE</Typography>
                    <Typography variant="subtitles2" component="h4">4000 cc</Typography>
                    <Box
                        sx={{display: "flex",
                             alignItems: "center"
                    }}
                    >
                        {/* <Button variant="contained" color="success" sx={{marginRight:"10px" , marginBottom:"10px", fontSize:"10px"}}>
                            View 
                        </Button>
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , marginBottom:"10px", fontSize:"10px"}}>
                            Edit 
                        </Button>
                        <Button variant="contained" color="error" sx={{ fontSize:"10px" , marginBottom:"10px"}}>
                            Delete
                        </Button> */}

                        <ButtonGroup variant="text" aria-label="text button group" sx={{marginLeft: "17px" , marginTop:"5px" , marginBottom:"10px"}}>
                        <Button variant="contained" color="success" sx={{marginRight:"10px" , fontSize:"10px"}}>
                            Details 
                        </Button>
                        
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px"}} onClick={()=>{navigate("/farmer/dash/chatpage")}}>
                            Contact
                        </Button> 
                        </ButtonGroup>

                        {/* <Typography variant="body2" component="p" style={{color:"white"}}>
                            Quantity: 
                        </Typography> */}
                        
                    </Box>
                    <Box id="detailsList">

                    </Box>
                    
                    {/* <Box>
                    <Typography variant="body2" component="p" style={{color:"white"}}>
                            Minimum Buying Price: 
                        </Typography>
                    </Box>

                    <Box>
                    <Typography variant="body2" component="p" style={{color:"white"}}>
                            Maximum Buying Price: 
                        </Typography>
                    </Box>

                    <Box>
                    <Typography variant="body2" component="p" style={{color:"white"}}>
                            Average Buying Price: 
                        </Typography>
                    </Box> */}

                    </Box>
                </Paper>
            </Grid>
            <Grid item md={3}>
            <Paper elevation={3} style={{marginTop:"10px"}}>
                    <img
                    className="img"
                    src="https://5.imimg.com/data5/RK/HS/XB/SELLER-3294479/tata-t-7-ultra-500x500.jpg"
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}>
                    <Typography variant="subtitles2" component="h4">Tata T.7 Ultra BS6</Typography>
                    <Typography variant="subtitles2" component="h4">5800 cc</Typography>
                    <Box
                        sx={{display: "flex",
                             alignItems: "center"
                    }}
                    >
                        {/* <Button variant="contained" color="success" sx={{marginRight:"10px" , marginBottom:"10px", fontSize:"10px"}}>
                            View 
                        </Button>
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , marginBottom:"10px", fontSize:"10px"}}>
                            Edit 
                        </Button>
                        <Button variant="contained" color="error" sx={{ fontSize:"10px" , marginBottom:"10px"}}>
                            Delete
                        </Button> */}

                        <ButtonGroup variant="text" aria-label="text button group" sx={{marginLeft: "17px" , marginTop:"5px" , marginBottom:"10px"}}>
                        <Button variant="contained" color="success" sx={{marginRight:"10px" , fontSize:"10px"}}>
                            Details 
                        </Button>
                        
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px"}} onClick={()=>{navigate("/farmer/dash/chatpage")}}>
                            Contact
                        </Button> 
                        </ButtonGroup>

                        {/* <Typography variant="body2" component="p" style={{color:"white"}}>
                            Quantity: 
                        </Typography> */}
                        
                    </Box>
                    <Box id="detailsList">

                    </Box>
                    
                    {/* <Box>
                    <Typography variant="body2" component="p" style={{color:"white"}}>
                            Minimum Buying Price: 
                        </Typography>
                    </Box>

                    <Box>
                    <Typography variant="body2" component="p" style={{color:"white"}}>
                            Maximum Buying Price: 
                        </Typography>
                    </Box>

                    <Box>
                    <Typography variant="body2" component="p" style={{color:"white"}}>
                            Average Buying Price: 
                        </Typography>
                    </Box> */}

                    </Box>
                </Paper>
            </Grid>

        </Grid>

      </Container>

      </div>
  );
}