// import * as React from 'react';
// import { Typography, Grid, Card, Toolbar } from "@mui/material";
// // import tempImage from '../../../assets/images/rice.png';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import IconButton from '@mui/material/IconButton';
// import Box from '@mui/material/Box';
// import 'react-tippy/dist/tippy.css';
// import Filter from '../../../components/FilterBar';

// import {
//     Tooltip,
// } from 'react-tippy';

// export default function Sellers() {
//   const [crops, setcrops] = React.useState(30);

//   function range(start, end) {
//     return Array(end - start + 1).fill().map((_, idx) => start + idx)
//   }

//   const jsx = `
// <Grid container spacing={2}>
// `;

//   return (
//     <div>
//         <Box
//             component="span"
//             m={1}
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//             // sx={boxDefault}
//             >
//             <Filter id="filter-sellers" label="Filter" options={[{title: "By Distance"}, {title: "By Crop"}]}/>
//         </Box>
//         <Grid item xs={12}>
//             <Grid container justifyContent="left" spacing={3}>
//             {range(0, crops).map((value) => (
//                 <Grid key={value} item>
//                 <Tooltip
//                     title="My name is chikki"
//                     theme="light"
//                 >
//                     <label>
//                         <Card  
//                         sx={{
//                             padding: '10px 3px',
//                             border: '1px solid',
//                             borderRadius: 2,
//                             backgroundColor: '#FFFFFF', 
//                             boxShadow: '1',
//                             "&:hover": {
//                             backgroundColor: "#EAEAEA",},
//                         }}>
//                             {/* <img src={tempImage} alt="seller" width="150" height="150"/> */}
//                             <Typography align="left" variant="body2" sx={{color:'#000000'}}>Seller {value}</Typography>
//                             <Typography align="left" variant="body2" sx={{color:'#000000'}}>Distance: ___km</Typography>
//                         </Card>
//                     </label>
//                 </Tooltip>
//                 </Grid>
//             ))}
//             </Grid>
//         </Grid>
//     </div>
//   );
// }

import * as React from 'react';
import { Typography, Grid, Card, Toolbar, Paper } from "@mui/material";
import Box from '@mui/material/Box';
import {useNavigate} from "react-router-dom"
import Button from '@mui/material/Button';
import SearchBar from '../../../components/SearchBar';
import Filter from '../../../components/FilterBar';


import Container from '@mui/material/Container';
import ButtonGroup from "@mui/material/ButtonGroup";

export default function MyCrop() {
    const navigate = useNavigate();
    const [crops, setcrops] = React.useState(30);

    function range(start, end) {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }

    const jsx = `
    <Grid container spacing={2}>
    `;

    const filterSellerOptions = [
        {title: "Farmers"}, 
        {title: "Grocery Sellers"},
        {title: "Stock Buyers"}
    ];

    const sortDistanceOptions = [
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
    <SearchBar/>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Filter id="filter-sellers" label="Categories" options={filterSellerOptions} width={200}/>
        <Filter id="sort-sellers" label="Distance" options={sortDistanceOptions} width={150}/>
    </ButtonGroup> 
    </Box>
    <Container>

        <Grid  container spacing={5} >
            <Grid item md={3}>
            <Paper elevation={3} style={{marginTop:"10px"}}>
                    <img
                    className="img"
                    src="https://randomuser.me/api/portraits/men/6.jpg"
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}>
                    <Typography variant="subtitles2" component="h4">Gaamini</Typography>
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
                            Profile 
                        </Button>
                        
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px"}}>
                            Chat
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
                    src="https://randomuser.me/api/portraits/men/5.jpg"
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}>
                    <Typography variant="subtitles2" component="h4">Sumanasiri</Typography>
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
                            Profile 
                        </Button>
                        
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px"}}>
                            Chat
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
                    src="https://randomuser.me/api/portraits/men/4.jpg"
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}>
                    <Typography variant="subtitles2" component="h4">Gunapala</Typography>
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
                            Profile 
                        </Button>
                        
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px"}}>
                            Chat
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
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}>
                    <Typography variant="subtitles2" component="h4">Sunil</Typography>
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
                            Profile 
                        </Button>
                        
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px"}}>
                            Chat
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
                    src="https://randomuser.me/api/portraits/men/2.jpg"
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}>
                    <Typography variant="subtitles2" component="h4">Yasas</Typography>
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
                            Profile 
                        </Button>
                        
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px"}}>
                            Chat
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
                    src="https://randomuser.me/api/portraits/men/3.jpg"
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}>
                    <Typography variant="subtitles2" component="h4">Ravindu</Typography>
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
                            Profile 
                        </Button>
                        
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px"}}>
                            Chat
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