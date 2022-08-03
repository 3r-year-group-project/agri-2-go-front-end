import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import { GROCERY_SELLER_SECTIONS } from '../../constants';
import GrocerySellerListItems from './grocerySellerListItem';
import SidePanel from '../../components/SidePanel';

export default function GrocerySellerLayout() {
  
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const [openPane, setOpenPane] = React.useState();
  const location = useLocation();

  React.useEffect(() => {
    const params = location.pathname.split('/');

    if (params.length === 3) {
      const subComponent = params[2];
      switch (subComponent) {
        case GROCERY_SELLER_SECTIONS.DASHBOARD:
          setOpenPane();
          break;
        case GROCERY_SELLER_SECTIONS.REVIEWS:
          setOpenPane();
          break;

       
        default:
          break;
      }
    }
  }, [location]);

 
  return (
    <SidePanel list={<GrocerySellerListItems/>} item2="Categories" item3="Dashboard"/>
  );
}
