import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import { STOCK_BUYER_SECTIONS } from '../../constants';

import StockBuyerListItems from './stockBuyerListItem';
import SidePanel from '../../components/SidePanel';


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
          setOpenPane();
          break;
        case STOCK_BUYER_SECTIONS.REVIEWS:
          setOpenPane();
          break;

       
        default:
          break;
      }
    }
  }, [location]);

 

  return (
    <SidePanel list={<StockBuyerListItems/>} item2="Categories" item3="Dashboard" page={openPane}/>
  );
}
