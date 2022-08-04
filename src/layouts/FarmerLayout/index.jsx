import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

import LoginPage from '../../pages/LoginPage';

import { FARMER_SECTIONS } from '../../constants';
import FarmerListItems from './farmerListItem';
import MySchedule from '../../pages/Farmer/mySchedule';
import Chat from '../../pages/Farmer/chat';
import MyProfit from '../../pages/Farmer/myProfit';
import Orders from '../../pages/Farmer/orders';
import DashBoard from '../../pages/Farmer/dashboard';
import Reviews from '../../pages/Farmer/review';
import SidePanel from '../../components/SidePanel';

const drawerWidth = 240;

export default function FarmerLayout() {
  
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const [openPane, setOpenPane] = React.useState();
  const location = useLocation();

  React.useEffect(() => {
    const params = location.pathname.split('/');

    if (params.length === 4) {
      const subComponent = params[3];
      switch (subComponent) {
        case FARMER_SECTIONS.DASHBOARD:
          setOpenPane(<DashBoard/>);
          break;
        case FARMER_SECTIONS.ORDERS:
          setOpenPane(<Orders/>);
          break;
        case FARMER_SECTIONS.MYSCHEDULE:
          setOpenPane(<MySchedule/>);
          break;
        case FARMER_SECTIONS.CHAT:
          setOpenPane(<Chat/>);
          break;
        case FARMER_SECTIONS.MYPROFIT:
          setOpenPane(<MyProfit/>);
          break;
        case FARMER_SECTIONS.REVIEWS:
          setOpenPane(<Reviews/>);
          break;
        default:
          
      }
    }
  }, [location]);

 

  return (
    <SidePanel list={<FarmerListItems/>} item2="Categories" item3="Dashboard"  page={openPane}/>
  );
}
