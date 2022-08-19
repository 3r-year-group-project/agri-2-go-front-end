import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import { STOCK_BUYER_SECTIONS } from '../../constants';

import StockBuyerListItems from './stockBuyerListItem';
import SidePanel from '../../components/SidePanel';
import Calendar from '../../components/Calendar';
import LoginPage from '../../pages/LoginPage';
import Chat from '../../components/chat';
import FindVeges from '../../pages/GrocerySellerFindVeges';


export default function StockBuyerLayout() {
  
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const [openPane, setOpenPane] = React.useState();
  const location = useLocation();

  React.useEffect(() => {
    const params = location.pathname.split('/');

    if (params.length === 4) {
      const subComponent = params[3];
      switch (subComponent) {
        case STOCK_BUYER_SECTIONS.DASHBOARD:
          setOpenPane(<LoginPage/>);
          break;
        case STOCK_BUYER_SECTIONS.MYSCHEDULE:
          setOpenPane(<Calendar/>);
          break;  
        case STOCK_BUYER_SECTIONS.REVIEWS:
          setOpenPane();
          break;
        case STOCK_BUYER_SECTIONS.ORDERS:
          setOpenPane();
          break;
        case STOCK_BUYER_SECTIONS.TRANSACTIONS:
          setOpenPane();
          break;
        case STOCK_BUYER_SECTIONS.CHAT:
          setOpenPane(<Chat/>);
          break;
        case STOCK_BUYER_SECTIONS.WASTAGEORDERS:
          setOpenPane();
          break; 
        case STOCK_BUYER_SECTIONS.DEMANDING:
          setOpenPane();
          break; 
        case STOCK_BUYER_SECTIONS.STOCKS:
          setOpenPane();
          break; 
        case STOCK_BUYER_SECTIONS.FINDVEGETABLES:
          setOpenPane(<FindVeges/>);
          break;  

       
        default:
          break;
      }
    }
  }, [location]);

 

  return (
    <SidePanel list={<StockBuyerListItems/>} item2="Categories" page={openPane}/>
  );
}
