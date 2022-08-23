import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

// export default function SearchBar() {
//   return (
//     <Paper
    
//       component="form"
//       sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:'70%' ,bgcolor:'white',color:'black',marginLeft:'6%' }}
//     >
      
//       <InputBase
    
//         sx={{ ml: 1, flex: 1,color:'black' }}
//         placeholder="Search Here"
//         inputProps={{ 'aria-label': 'search google maps' }}
        
//       />
//       <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
//         <SearchIcon />
//       </IconButton>
//       <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      
//     </Paper>
//   );
// }



// This holds a list of some fiction people
// Some  have the same name but different age and id
const USERS = [
  { id: 1, name: 'Andy', age: 32 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Tom Hulk', age: 40 },
  { id: 4, name: 'Tom Hank', age: 50 },
  { id: 5, name: 'Audra', age: 30 },
  { id: 6, name: 'Anna', age: 68 },
  { id: 7, name: 'Tom', age: 34 },
  { id: 8, name: 'Tom Riddle', age: 28 },
  { id: 9, name: 'Bolo', age: 23 },
];

function SearchB(props) {
  // the value of the search field 
  const [name, setName] = useState('');

  // the search result
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };
  
  return (
    <div width='100%' >
      <Paper
    
    component="form"
    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:'70%' ,bgcolor:'white',color:'black',marginLeft:'6%' }}
  >
    
    <InputBase
  type="search"
  value={name}
  onChange={filter}
      sx={{ ml: 1, flex: 1,color:'black' }}
      placeholder="Search Here"
      inputProps={{ 'aria-label': 'search google maps' }}
      
    />
    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
      <SearchIcon />
    </IconButton>
    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    
  </Paper>

      <div >
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((row) => (
            <li>{row.name}</li>
            
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}

export default SearchB;