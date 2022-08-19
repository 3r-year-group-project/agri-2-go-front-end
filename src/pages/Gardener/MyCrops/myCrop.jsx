import * as React from 'react';
import { Typography, Grid, Card, Toolbar, Paper } from "@mui/material";
import Box from '@mui/material/Box';
import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import AddCrop from './addCrop';
import SearchBar from '../../../components/SearchBar';


import Container from '@mui/material/Container';
import AddCircleIcon from '@mui/icons-material/AddCircle';
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
    
    <Button variant="contained" color="success" sx={{marginTop:"20px" , marginLeft: "20px" ,marginBottom : "20px", width:"20%" , height: "6%" , fontWeight:"bold"}} onClick={()=>navigate("/gardener/dash/addcrop")} >
        Add New Vegetable 
        <AddCircleIcon sx={{marginLeft: "10px"}}/>
    </Button>
    </Box>
    <Container>

        <Grid  container spacing={5} >
            {/* <VegDetails/> */}
            <Grid item md={3}>
            <Paper elevation={3} style={{marginTop:"10px"}}>
                    <img
                    className="img"
                    src="https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}>
                    <Typography variant="subtitles2" component="h4">Carrot</Typography>
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
                            View 
                        </Button>
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px"}} onClick={()=>navigate("/gardener/dash/editcrop")}>
                            Edit 
                        </Button>
                        <Button variant="contained" color="error" sx={{ fontSize:"10px" }} onClick={()=>navigate("/gardener/dash/deletecrop")}>
                            Delete
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
                    src="https://food.unl.edu/newsletters/images/tomatoes.png"
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}>
                    <Typography variant="subtitles2" component="h4">Tomato</Typography>
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
                            View 
                        </Button>
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px"}} onClick={()=>navigate("/gardener/dash/editcrop")}>
                            Edit 
                        </Button>
                        <Button variant="contained" color="error" sx={{ fontSize:"10px" }} onClick={()=>navigate("/gardener/dash/deletecrop")}>
                            Delete
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
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2015/05/230-health-benefits-of-beetroot_451273462.jpg"
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}>
                    <Typography variant="subtitles2" component="h4">Beetroot</Typography>
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
                            View 
                        </Button>
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px"}} onClick={()=>navigate("/gardener/dash/editcrop")}>
                            Edit 
                        </Button>
                        <Button variant="contained" color="error" sx={{ fontSize:"10px" }} onClick={()=>navigate("/gardener/dash/deletecrop")}>
                            Delete
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
                    src="https://www.allaboutgardening.com/wp-content/uploads/2022/01/Garden-Vegetable-Roots.jpg"
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}>
                    <Typography variant="subtitles2" component="h4">Leeks</Typography>
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
                            View 
                        </Button>
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px"}} onClick={()=>navigate("/gardener/dash/editcrop")}>
                            Edit 
                        </Button>
                        <Button variant="contained" color="error" sx={{ fontSize:"10px" }} onClick={()=>navigate("/gardener/dash/deletecrop")}>
                            Delete
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
                    src="https://c.ndtvimg.com/2019-03/k5ngm26o_green-chilli_625x300_08_March_19.jpg"
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}>
                    <Typography variant="subtitles2" component="h4">Green Chillies</Typography>
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
                            View 
                        </Button>
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px"}} onClick={()=>navigate("/gardener/dash/editcrop")}>
                            Edit 
                        </Button>
                        <Button variant="contained" color="error" sx={{ fontSize:"10px" }} onClick={()=>navigate("/gardener/dash/deletecrop")}>
                            Delete
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
                    src="https://gardenerspath.com/wp-content/uploads/2020/02/White-and-Purple-Eggplants.jpg.webp"
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}>
                    <Typography variant="subtitles2" component="h4">Brinjal</Typography>
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
                            View 
                        </Button>
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px"}} onClick={()=>navigate("/gardener/dash/editcrop")}>
                            Edit 
                        </Button>
                        <Button variant="contained" color="error" sx={{ fontSize:"10px" }} onClick={()=>navigate("/gardener/dash/deletecrop")}>
                            Delete
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
                    src="https://media.istockphoto.com/photos/pile-of-fresh-cucumbers-lying-diagonally-picture-id147058947?k=20&m=147058947&s=612x612&w=0&h=s6336g9Z1YOVxfjT7_7z_X7TOLu0tHTFS6e6QfFbx7c="
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}>
                    <Typography variant="subtitles2" component="h4">Cucumber</Typography>
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
                            View 
                        </Button>
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px"}} onClick={()=>navigate("/gardener/dash/editcrop")}>
                            Edit 
                        </Button>
                        <Button variant="contained" color="error" sx={{ fontSize:"10px" }} onClick={()=>navigate("/gardener/dash/deletecrop")}>
                            Delete
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
                    src="https://media.istockphoto.com/photos/white-cabbage-on-wooden-table-picture-id1328561636?b=1&k=20&m=1328561636&s=612x612&w=0&h=rDGSj3aaN4VC71HZCdT4SvmggS8fmazkup_pXdkm5h0="
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}>
                    <Typography variant="subtitles2" component="h4">Cabbage</Typography>
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
                            View 
                        </Button>
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px"}} onClick={()=>navigate("/gardener/dash/editcrop")}>
                            Edit 
                        </Button>
                        <Button variant="contained" color="error" sx={{ fontSize:"10px" }} onClick={()=>navigate("/gardener/dash/deletecrop")}>
                            Delete
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
                    src="https://cdn.pixabay.com/photo/2014/08/06/20/32/potatoes-411975_960_720.jpg"
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}>
                    <Typography variant="subtitles2" component="h4">Potatoes</Typography>
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
                            View 
                        </Button>
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px"}} onClick={()=>navigate("/gardener/dash/editcrop")}>
                            Edit 
                        </Button>
                        <Button variant="contained" color="error" sx={{ fontSize:"10px" }} onClick={()=>navigate("/gardener/dash/deletecrop")}>
                            Delete
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
                    src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/06/green-beans-1296x728-header.jpg?w=1575"
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}>
                    <Typography variant="subtitles2" component="h4">Green Beans</Typography>
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
                            View 
                        </Button>
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px"}} onClick={()=>navigate("/gardener/dash/editcrop")}>
                            Edit 
                        </Button>
                        <Button variant="contained" color="error" sx={{ fontSize:"10px" }} onClick={()=>navigate("/gardener/dash/deletecrop")}>
                            Delete
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
                    src="https://img.freepik.com/premium-photo/autumn-concept-with-pumpkins-rustic-wooden-table_73387-594.jpg?w=2000"
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}>
                    <Typography variant="subtitles2" component="h4">Pumpkins</Typography>
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
                            View 
                        </Button>
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px"}} onClick={()=>navigate("/gardener/dash/editcrop")}>
                            Edit 
                        </Button>
                        <Button variant="contained" color="error" sx={{ fontSize:"10px" }} onClick={()=>navigate("/gardener/dash/deletecrop")}>
                            Delete
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
                    src="https://t3.ftcdn.net/jpg/03/03/07/36/240_F_303073667_1pW25vKa9eNpxpO0nGhkiYOxJjMhVKlM.jpg"
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}>
                    <Typography variant="subtitles2" component="h4">Capsicums</Typography>
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
                            View 
                        </Button>
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px"}} onClick={()=>navigate("/gardener/dash/editcrop")}>
                            Edit 
                        </Button>
                        <Button variant="contained" color="error" sx={{ fontSize:"10px" }} onClick={()=>navigate("/gardener/dash/deletecrop")}>
                            Delete
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
                    src="https://i0.wp.com/happyacres.blog/wp-content/uploads/2017/06/kossakkohlrabijun17.jpg?resize=600%2C437&ssl=1"
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}>
                    <Typography variant="subtitles2" component="h4">Knol Kohl</Typography>
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
                            View 
                        </Button>
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px"}} onClick={()=>navigate("/gardener/dash/editcrop")}>
                            Edit 
                        </Button>
                        <Button variant="contained" color="error" sx={{ fontSize:"10px" }} onClick={()=>navigate("/gardener/dash/deletecrop")}>
                            Delete
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