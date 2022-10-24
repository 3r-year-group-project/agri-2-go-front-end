import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Input,FormControl,Stack,Button } from '@mui/material';
import axios from 'axios';
 export default function PopupForm({closeHandle,getVeg}) {
  
  const [data1,setData] = React.useState({
    name:'',
    description:'',
    fileName:'',
    base64URL:'',

});
const [image, setImage] = React.useState({ preview: ''})
  const [data,setDataValues] = useState([
   
    
  ]);
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
        
        baseURL = reader.result;
        
        resolve(baseURL);
      };
      
    });
  };

  const handleChangeImage =(e)=>{
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
  
});
  
  }
  const handleName =(e)=>{
    setData ((prev) => {
      return({...prev, name : e.target.value});
  });
   
  }
  const handleSubmit =(e)=>{

    // console.log(data1);
    //     if(!Object.values(data).includes("")){
    //         axios.post('/api/admin/handlevegetable/add',{...data1})
    //             .then(res => {
    //                 setDataValues((pre)=>{
    //                   return [...data,{name:data1.name,description:data1.description,base64URL:data1.base64URL,fileName:data1.fileName}]
    //                 });

    //                 getVeg();
    //             });
    //     }else{
    //         // setErrorText((prev) => {
    //         //     return({...prev, totalError : "Please fill all the fields"});
    //         // });
    //     }
  }
  const handleDescription =(e)=>{
    setData ((prev) => {
      return({...prev, description : e.target.value});
  });
  }
  return (
    
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"

    >
      <FormControl >
     
      <div>
      <TextField
          id="standard-read-only-input"
          sx={{margin: '1rem 0',input: { color: 'black' }}}
          defaultValue="Vegetable Name"
          InputProps={{
            readOnly: true,
            disableUnderline:true,
          }}
          variant="standard"

         
        />
        <TextField
            sx={{margin: '1rem 0',input: { color: 'black' }}}
          id="standard-required"
          
      
          variant="standard"
          onChange={handleName}
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
         
          
          
          variant="standard"
          onChange={handleDescription}
        />
        
                <Input
                      accept="image/*"
                      id="contained-button-file"
                      multiple
                      type="file"
                      name='file'
                      onChange={handleChangeImage}
                      disableUnderline='true'
                    />

      </div>

      <Stack spacing={2} direction="row">
      <Button variant="outlined" onClick={closeHandle} >CANCEL</Button>
      <Button variant="contained" type="submit" onClick={()=>{handleSubmit();closeHandle();}} >ADD</Button>
      
    </Stack>
      <div/>
      </FormControl>
    </Box>
   
  );}
 


 

