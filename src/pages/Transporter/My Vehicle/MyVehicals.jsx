import { Button } from '@mui/material'
import { Box } from '@mui/system'
import {Card,CardContent,Divider} from '@mui/material'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React from 'react'
import './myVehical.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import VehicleCard from './Vehicals/VehicleCard';
import {checkWord, checkWordExactLen} from "../../../services/utils/FormValidation"; 
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export default function MyVehicals() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    const [open, setOpen] = React.useState(false);

    const[insert,setInsert] = React.useState(false);

    const [data,setData] = React.useState({
        vehicleType:'',
        vehicleNumber:'',
        driverName:'',
        vehicleCapacity:'',
        contactNumber:'',
        fileName:'',
        base64URL:'',

    });

    const [errorText, setErrorText] = React.useState({
        vehicleType:'',
        vehiclenumber:'',
        drivername:'',
        vehicleCapacity:'',
        contactNumber:'',
        totalError:'',
    });

    

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const [vehicals, setvehical] = React.useState('');
  
    const handleChange = (event) => {
      setvehical(event.target.value);
    };

    const [vehi,setVehi] = React.useState([]);


    const [image, setImage] = React.useState({ preview: ''})

   

    React.useEffect(() => {
        axios.post('/api/transporter/vehicle/getall',{email:user.email})
            .then(res => {console.log(res.data.data);
                setVehi(res.data.data);});
    },[insert]);


    const getBase64 = file => {
        return new Promise(resolve => {
          let fileInfo;
          let baseURL = "";
          // Make new FileReader
          let reader = new FileReader();
    
          // Convert the file to base64 text
          reader.readAsDataURL(file);
    
          // on reader load somthing...
          reader.onload = () => {
            // Make a fileInfo Object
            console.log("Called", reader);
            baseURL = reader.result;
            console.log(baseURL);
            resolve(baseURL);
          };
          console.log(fileInfo);
        });
      };

    const checkVehicleNumber = (e) => {
        let ob = checkWord(e.target.value,4,10);
        if(ob.state == true){
            setData ((prev) => {
                return({...prev, vehicleNumber : e.target.value});
            });
            setErrorText((prev) => {
                return({...prev, vehicleNumber : ""});
            });
            
        }else{
            setErrorText((prev) => {
                return({...prev, vehicleNumber : ob.errors});
            });
            setData ((prev) => {
                return({...prev, vehicleNumber : ""});
            });
        }
    }


    const checkDriverName = (e) => {
        let v = e.target.value;
        let ob = checkWord(v,5,20);
        if(ob.state == true){
            setData ((prev) => {
                return({...prev, driverName : v});
            });
            setErrorText((prev) => {
                return({...prev, driverName : ""});
            });
            
        }else{
            setErrorText((prev) => {
                return({...prev, driverName : ob.errors});
            });
            setData ((prev) => {
                return({...prev, driverName : ""});
            });
        }
    }


    const checkVehicleCapacity = (e) => {
        let ob = checkWord(e.target.value,2,5);
        if(ob.state == true){
            setData ((prev) => {
                return({...prev, vehicleCapacity : e.target.value});
            });
            setErrorText((prev) => {
                return({...prev, vehicleCapacity : ""});
            });
        }else{
            setErrorText((prev) => {
                return({...prev, vehicleCapacity : ob.errors});
            });
            setData ((prev) => {
                return({...prev, vehicleCapacity : ""});
            });
        }
    }
    const checkContactNumber = (e) => {
        let ob = checkWordExactLen(e.target.value,10);
        if(ob.state == true){
            setData ((prev) => {
                return({...prev, contactNumber : e.target.value});
            });
            setErrorText((prev) => {
                return({...prev, contactNumber : ""});
            });
        }else{
            setData ((prev) => {
                return({...prev, contactNumber : ""});
            });
            setErrorText((prev) => {
                return({...prev, contactNumber : ob.errors});
            });
        }
    }
    const checkVehicleType = (e) => {
        setData({...data,vehicleType:e.target.value})
    }
    const checkImgFile = (e) => {

        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            
          }
        setImage(img);
        getBase64(e.target.files[0])
        .then(result => {
            setData ((prev) => {
                return({...prev, 
                    fileName:e.target.files[0].name,
                    base64URL:result});
            });
            
      })
      .catch(err => {
        console.log(err);
      });
        
        
    }

    const handleSubmit = (e) => {
        console.log("data gonna be uploads",data);
        if(!Object.values(data).includes("")){
            axios.post('/api/transporter/vehicle/insert',{...data,email:user.email})
                .then(res => {
                    setInsert(true);
                });
        }else{
            setErrorText((prev) => {
                return({...prev, totalError : "Please fill all the fields"});
            });
        }
        
    }

   
    
  return (
    <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'2%',minHeight:'100%'}}>
         {/* <Typography style={{textAlign:'left',margin:'20px 0', color: 'green'}} gutterBottom variant='h6' color="text.primary">
                Vehical Details
        </Typography>  
        <Divider color='#9df58c'/>  */}
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '150px', paddingTop: '25px'}}>
        <Button variant='contained' color="success" onClick={handleClickOpen} endIcon={<AddCircleOutlineIcon/>} size="large">Add New Vehicle</Button>
        </div>

         <div className="main_container">
            <div className="vehicle-card-list">

                {vehi.map((element) => {
                    let vehicle = '';
                    console.log(element.type);
                    switch(element.type){
                        case 1:
                            vehicle = 'motorcycle';
                            break;
                        case 2:
                            vehicle = 'three wheel';
                            break;
                        case 3:
                            vehicle = 'car';
                            break;
                        case 4:
                            vehicle = 'van';
                            break;
                        case 5:
                            vehicle = 'lorry';
                            break;
                        case 6:
                            vehicle = 'other';
                            break;

                    }
                    return(<VehicleCard 
                        image={element.image}
                        vehicletype={vehicle}
                        vehicleno={element.vehicle_number}
                        drivername={element.driver_name}
                        vehiclenumber={element.contact_number}
                        capacity={element.capacity}
                        />);
                })}

                <VehicleCard 
                image='https://www.methmamovers.com/wp-content/uploads/2018/08/lorry-2.jpg'
                vehicletype='Lorry'
                vehicleno='BHE 4512'
                drivername='E.S Ajith'
                vehiclenumber='077 2515486'
                capacity='5000'
                />
                <VehicleCard 
                image='https://www.researchgate.net/profile/Waruna-Maddumage/publication/337274631/figure/fig1/AS:825376922157056@1573796601056/BAJAJ-RE-205cc-motorized-three-wheeler-17.png'
                vehicletype='Three Wheeler'
                vehicleno='BHE 4512'
                drivername='E.S Ajith'
                vehiclenumber='077 2515486'
                capacity='5000'
                />
            </div>

            <Dialog 
            open={open} 
            onClose={handleClose} 
            fullWidth
            maxWidth='sm'
            >
            <DialogTitle style={{textAlign:'left',}}>Add New Vehicle</DialogTitle>
        <Divider/>
            <div className='item-space'>
            <DialogContent style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Typography style={{width:'150px',}} gutterBottom variant='body1' color="text.primary">
                    Vehicle Type
                </Typography>
                <FormControl >
                    <InputLabel id="demo-simple-select-label">Vehicle Type</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={vehicals}
                    label="Vehical Type"
                    onChange={(e) => {handleChange(e);checkVehicleType(e);}}
                    style={{width:'250px',}}
                    
                    >
                    <MenuItem value={1}>Motorcycle</MenuItem>
                    <MenuItem value={2}>Three Wheeler</MenuItem>
                    <MenuItem value={3}>Car</MenuItem>
                    <MenuItem value={4}>Van</MenuItem>
                    <MenuItem value={5}>Lorry</MenuItem>
                    <MenuItem value={6}>Other</MenuItem>
                    </Select>
                </FormControl>
            </DialogContent>

            <DialogContent style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Typography style={{width:'150px',}} gutterBottom variant='body1' color="text.primary">
                    Vehicle No
                </Typography>

                <TextField
                error={errorText.vehiclenumber}
                helperText={errorText.vehiclenumber}
                onChange={checkVehicleNumber}
                autoFocus
                margin="dense"
                id="Vehical No"
                label="Vehical No"
                type="text"
                fullWidth
                variant="outlined"
                style={{width:'250px',}}
            />
            </DialogContent>

            <DialogContent style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Typography style={{width:'150px',}} gutterBottom variant='body1' color="text.primary">
                    Driver Name
                </Typography>

                <TextField
                error={errorText.drivername}
                helperText={errorText.drivername}
                autoFocus
                margin="dense"
                id="Driver Name"
                label="Driver Name"
                onChange={checkDriverName}
                type="text"
                fullWidth
                variant="outlined"
                style={{width:'250px',}}
            />
            </DialogContent>

            <DialogContent style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Typography style={{width:'150px',}} gutterBottom variant='body1' color="text.primary">
                    Vehicle Capacity
                </Typography>

                <TextField
                error={errorText.vehiclecapacity}
                helperText={errorText.vehiclecapacity}
                autoFocus
                margin="dense"
                id="vehicleCapacity"
                label="vehicle capacity"
                type="text"
                fullWidth
                variant="outlined"
                onChange={checkVehicleCapacity}
                style={{width:'250px',}}
            />
            </DialogContent>

            <DialogContent style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Typography style={{width:'150px',}} gutterBottom variant='body1' color="text.primary">
                    Contact Number
                </Typography>

                <TextField
                error={errorText.contactNumber}
                helperText={errorText.contactNumber}
                autoFocus
                margin="dense"
                id="Contact Number"
                label="Contact Number"
                type="tel"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                fullWidth
                variant="outlined"
                onChange={checkContactNumber}
                style={{width:'250px',}}
            />
            </DialogContent>

            <DialogContent style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Typography style={{width:'150px',}} gutterBottom variant='body1' color="text.primary">
                {image.preview && <img src={image.preview} width='100' height='100'/>}
                </Typography>
            </DialogContent>

            <DialogContent style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Typography style={{width:'150px',}} gutterBottom variant='body1' color="text.primary">
                    Upload Image
                </Typography>
                <div className='image_upload'>
                    <input
                    type='file'
                    name='file'
                    id='files'
                    accept='image/*'
                    onChange={checkImgFile}
                    style={{width:'250px',}}
                    />
                    <div className="lable-container">
                    <label for='files'>
                        Choose image
                    </label>
                    </div>
                    <span style={{color:'red'}}><small>{errorText.totalError}</small></span>
                </div>
            </DialogContent>
        </div>
        <br/>
            <DialogActions>
            <Button onClick={handleClose} variant="outlined" sx={{color: '#fff'}}>Cancel</Button>
            <Button onClick={()=>{handleSubmit();handleClose();}} variant="contained" sx={{backgroundColor: 'green'}}>Save</Button>
            </DialogActions>
        </Dialog>
      </div>
   
    </div>
  )
    }
    
