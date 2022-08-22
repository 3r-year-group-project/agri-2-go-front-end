import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';

import Typography from '@material-ui/core/Typography';
import Button from '@mui/material/Button';

 export default function FormPropsTextFields() {
  const [name, setName] = useState("");
  const data = [
   { id:'1',name:'Basic Plan', duration:'1 Month', price:'$29.00', discounts:'$0.00',discription:'This Plan includes...'},
   { id:'2',name:'Standard Plan', duration:'1 Year', price:'$99.00', discounts:'$0.00',discription:'This Plan includes...'},
    
  ];
  return (
    
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"

    >
      <form >
     
      <div>
      <TextField
          id="standard-read-only-input"
          sx={{margin: '1rem 0',input: { color: 'black' }}}
          defaultValue="Subscription Plan Name"
          InputProps={{
            readOnly: true,
            disableUnderline:true,
          }}
          variant="standard"
        />
        <TextField
            sx={{margin: '1rem 0',input: { color: 'black' }}}
          id="standard-required"
          
          defaultValue="Basic Plan"
          variant="standard"
        />
      </div>
      <div>
      <TextField
          id="standard-read-only-input"
          sx={{margin: '1rem 0',input: { color: 'black' }}}
          defaultValue="Duration"
          InputProps={{
            readOnly: true,
            disableUnderline:true,
          }}
          variant="standard"
        />
        <TextField
            sx={{margin: '1rem 0',input: { color: 'black' }}}
          id="standard-required"
          
          defaultValue="1 Year"
          variant="standard"
        />
      </div>
      <div>
      <TextField
          id="standard-read-only-input"
          sx={{margin: '1rem 0',input: { color: 'black' }}}
          defaultValue="Price"
          InputProps={{
            readOnly: true,
            disableUnderline:true,
          }}
          variant="standard"
        />
        <TextField
            sx={{margin: '1rem 0',input: { color: 'black' }}}
          id="standard-required"
          
          defaultValue="$69.00"
          variant="standard"
        />
      </div>
      <div>
      <TextField
          id="standard-read-only-input"
          sx={{margin: '1rem 0',input: { color: 'black' }}}
          defaultValue="Discounts"
          InputProps={{
            readOnly: true,
            disableUnderline:true,
          }}
          variant="standard"
        />
        <TextField
            sx={{margin: '1rem 0',input: { color: 'black' }}}
          id="standard-required"
          
          defaultValue="$00.00"
          variant="standard"
        />
      </div>
      <div>
      <TextField
          id="standard-read-only-input"
          sx={{margin: '1rem 0',input: { color: 'black' }}}
          defaultValue="Description"
          InputProps={{
            readOnly: true,
            disableUnderline:true,
          }}
          variant="standard"
        />
        <TextField
            sx={{margin: '1rem 0',input: { color: 'black' }}}
          id="standard-required"
          value="This Plan includes..."
          
          
          variant="standard"
        />

      </div>
      <div/>
      <div>
      
      <Stack spacing={2} direction="row">
      <Button variant="outlined" >CANCEL</Button>
      <Button variant="contained" type="submit" >SAVE</Button>
      
    </Stack>
  
      </div>
      </form>
    </Box>
   
  );}
 export function FormPropsTextFields2() {
    const [name, setName] = useState("");
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`The name you entered was: ${name}`);
    }
    return (
      
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        
       
        <div>
        <TextField
            id="standard-read-only-input"
            sx={{margin: '1rem 0',input: { color: 'black' }}}
            value="Subscription Plan Name"
            InputProps={{
              readOnly: true,
              disableUnderline:true,
            }}
            variant="standard"
          />
          <TextField
              sx={{margin: '1rem 0',input: { color: 'black' }}}
            id="standard-required"
            
            value="Standard Plan"
            variant="standard"
          />
        </div>
        <div>
        <TextField
            id="standard-read-only-input"
            sx={{margin: '1rem 0',input: { color: 'black' }}}
            value="Duration"
            InputProps={{
              readOnly: true,
              disableUnderline:true,
            }}
            variant="standard"
          />
          <TextField
              sx={{margin: '1rem 0',input: { color: 'black' }}}
            id="standard-required"
            
            value="1 Year"
            variant="standard"
          />
        </div>
        <div>
        <TextField
            id="standard-read-only-input"
            sx={{margin: '1rem 0',input: { color: 'black' }}}
            value="Price"
            InputProps={{
              readOnly: true,
              disableUnderline:true,
            }}
            variant="standard"
          />
          <TextField
              sx={{margin: '1rem 0',input: { color: 'black' }}}
            id="standard-required"
            
            value="$69.00"
            variant="standard"
          />
        </div>
        <div>
        <TextField
            id="standard-read-only-input"
            sx={{margin: '1rem 0',input: { color: 'black' }}}
            value="Discounts"
            InputProps={{
              readOnly: true,
              disableUnderline:true,
            }}
            variant="standard"
          />
          <TextField
              sx={{margin: '1rem 0',input: { color: 'black' }}}
            id="standard-required"
            
            value="$00.00"
            variant="standard"
          />
        </div>
        <div>
        <TextField
            id="standard-read-only-input"
            sx={{margin: '1rem 0',input: { color: 'black' }}}
            value="Description"
            InputProps={{
              readOnly: true,
              disableUnderline:true,
            }}
            variant="standard"
          />
          <TextField
              sx={{margin: '1rem 0',input: { color: 'black' }}}
            id="standard-required"
            value="This Plan includes..."
            
            variant="standard"
          />
  
        </div>
        <div/>
        <div>
        
        <Stack spacing={2} direction="row">
        <Button variant="outlined" >CANCEL</Button>
        <Button variant="contained" type="submit" >SAVE</Button>
        
      </Stack>
    
        </div>
       
      </Box>
     
    );
}
// import * as React from 'react';
// import { useState } from "react";
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import Stack from '@mui/material/Stack';

// import Typography from '@material-ui/core/Typography';
// import Button from '@mui/material/Button';
// const data = [
//   { id:'1',name:'Basic Plan', duration:'1 Month', price:'$29.00', discounts:'$0.00',description:'This Plan includes...'},
//   { id:'2',name:'Standard Plan', duration:'1 Year', price:'$99.00', discounts:'$0.00',description:'This Plan includes...'},
   
//  ];
 
//  export default function FormPropsTextFields() {
//   // const [name, setName] = useState("");
//   const [details,setData]=useState(data);
 
//   {details.map((detail,index) => {
// console.log(detail.name);
//     return (
      
//       <Box
//         component="form"
//         sx={{
//           '& .MuiTextField-root': { m: 1, width: '25ch' },
//         }}
//         noValidate
//         autoComplete="off"
  
//       >
      
       
//         <div>
//         <TextField
//             id="standard-read-only-input"
//             sx={{margin: '1rem 0',input: { color: 'black' }}}
//             value="Subscription Plan Name"
//             InputProps={{
//               readOnly: true,
//               disableUnderline:true,
//             }}
//             variant="standard"
//           />
//           <TextField
//               sx={{margin: '1rem 0',input: { color: 'black' }}}
//             id="standard-required"
            
//             defaultValue={detail.name}
//             variant="standard"
//           />
//         </div>
//         <div>
//         <TextField
//             id="standard-read-only-input"
//             sx={{margin: '1rem 0',input: { color: 'black' }}}
//             defaultValue="Duration"
//             InputProps={{
//               readOnly: true,
//               disableUnderline:true,
//             }}
//             variant="standard"
//           />
//           <TextField
//               sx={{margin: '1rem 0',input: { color: 'black' }}}
//             id="standard-required"
            
//             defaultValue={detail.duration}
//             variant="standard"
//           />
//         </div>
//         <div>
//         <TextField
//             id="standard-read-only-input"
//             sx={{margin: '1rem 0',input: { color: 'black' }}}
//             defaultValue="Price"
//             InputProps={{
//               readOnly: true,
//               disableUnderline:true,
//             }}
//             variant="standard"
//           />
//           <TextField
//               sx={{margin: '1rem 0',input: { color: 'black' }}}
//             id="standard-required"
            
//             defaultValue={detail.price}
//             variant="standard"
//           />
//         </div>
//         <div>
//         <TextField
//             id="standard-read-only-input"
//             sx={{margin: '1rem 0',input: { color: 'black' }}}
//             defaultValue="Discounts"
//             InputProps={{
//               readOnly: true,
//               disableUnderline:true,
//             }}
//             variant="standard"
//           />
//           <TextField
//               sx={{margin: '1rem 0',input: { color: 'black' }}}
//             id="standard-required"
            
//             defaultValue={detail.discounts}
//             variant="standard"
//           />
//         </div>
//         <div>
//         <TextField
//             id="standard-read-only-input"
//             sx={{margin: '1rem 0',input: { color: 'black' }}}
//             defaultValue="Description"
//             InputProps={{
//               readOnly: true,
//               disableUnderline:true,
//             }}
//             variant="standard"
//           />
//           <TextField
//               sx={{margin: '1rem 0',input: { color: 'black' }}}
//             id="standard-required"
          
//             defaultValue={detail.description}
            
//             variant="standard"
//           />
  
//         </div>
//         <div/>
//         <div>
        
//         <Stack spacing={2} direction="row">
//         <Button variant="outlined" >CANCEL</Button>
//         <Button variant="contained" type="submit" >SAVE</Button>
        
//       </Stack>
    
//         </div>
        
//       </Box>
     
//     );})}

// }
 

