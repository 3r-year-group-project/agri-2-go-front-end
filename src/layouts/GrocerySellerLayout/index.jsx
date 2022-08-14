import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import { GROCERY_SELLER_SECTIONS } from '../../constants';
import GrocerySellerListItems from './grocerySellerListItem';
import SidePanel from '../../components/SidePanel';
import LoginPage from '../../pages/LoginPage'
import FindVeges from '../../pages/GrocerySellerFindVeges';
import Calendar from '../../components/Calendar';

export default function GrocerySellerLayout() {
  
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const [openPane, setOpenPane] = React.useState();
  const location = useLocation();

  React.useEffect(() => {
    const params = location.pathname.split('/');

    if (params.length === 4) {
      const subComponent = params[3];
      switch (subComponent) {
        case GROCERY_SELLER_SECTIONS.DASHBOARD:
          setOpenPane(<LoginPage/>);
          break;
        case GROCERY_SELLER_SECTIONS.MYSCHEDULE:
          setOpenPane(<Calendar/>);
          break;  
        case GROCERY_SELLER_SECTIONS.REVIEWS:
          setOpenPane();
          break;
        case GROCERY_SELLER_SECTIONS.FINDVEGETABLES:
          setOpenPane(<FindVeges/>);
          break;  
       
        default:
          break;
      }
    }
  }, [location]);

 
  return (
    <SidePanel list={<GrocerySellerListItems/>} item2="Categories"  page={openPane}/>
  );
}
