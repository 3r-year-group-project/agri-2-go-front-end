import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

import CustomerListItems from './customerListItem';

import LoginPage from '../../pages/LoginPage';

import { CUSTOMER_SECTIONS } from '../../constants';

import SidePanel from '../../components/SidePanel';


export default function CustomerLayout() {
  
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const [openPane, setOpenPane] = React.useState();
  const location = useLocation();

  React.useEffect(() => {
    const params = location.pathname.split('/');

    if (params.length === 3) {
      const subComponent = params[2];
      switch (subComponent) {
        case CUSTOMER_SECTIONS.DASHBOARD:
          setOpenPane();
          break;
        case CUSTOMER_SECTIONS.ORDERS:
          setOpenPane(<LoginPage/>);
          break;

        case CUSTOMER_SECTIONS.CART:
          setOpenPane();
          break;
        case CUSTOMER_SECTIONS.TRANSACTIONS:
          setOpenPane();
          break;
        default:
          break;
      }
    }
  }, [location]);

 
  return (
    <SidePanel list={<CustomerListItems/>} item2="Categories" item3="Dashboard"/>
  );
}
