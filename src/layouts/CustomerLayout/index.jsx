import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

import CustomerListItems from './customerListItem';

import LoginPage from '../../pages/LoginPage';

import { CUSTOMER_SECTIONS } from '../../constants';

import SidePanel from '../../components/SidePanel';
import {Stack } from '@mui/material';
import CalendarScedule from '../../components/Calendar';

import CustomerOrders from '../../pages/Customer/Orders';
import CustomerTransactions from '../../pages/Customer/Transactions';
import ChatMemberList from '../../components/chat/memberList';

const drawerWidth = 240;



export default function CustomerLayout() {
  
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const [openPane, setOpenPane] = React.useState();
  const location = useLocation();

  React.useEffect(() => {
    const params = location.pathname.split('/');

    if (params.length === 4) {
      const subComponent = params[3];
      switch (subComponent) {
        case CUSTOMER_SECTIONS.DASHBOARD:
          setOpenPane(<CalendarScedule/>);
          break;
        case CUSTOMER_SECTIONS.ORDERS:
          setOpenPane(<CustomerOrders/>);
          break;
        case CUSTOMER_SECTIONS.CHATMEMBERSLIST:
          setOpenPane(<ChatMemberList/>);
          break;
        case CUSTOMER_SECTIONS.CART:
          setOpenPane();
          break;
        case CUSTOMER_SECTIONS.TRANSACTIONS:
          setOpenPane(<CustomerTransactions/>);
          break;
        default:
          break;
      }
    }
  }, [location]);

 
  return (
    <SidePanel list={<CustomerListItems/>} item2="Categories"  page={openPane}/>
  );
}
