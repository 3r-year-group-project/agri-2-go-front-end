import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

import LoginPage from '../../pages/LoginPage';

import { FARMER_SECTIONS } from '../../constants';
import FarmerListItems from './farmerListItem';
import SidePanel from '../../components/SidePanel';

const drawerWidth = 240;

export default function FarmerLayout() {
  
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const [openPane, setOpenPane] = React.useState();
  const location = useLocation();

  React.useEffect(() => {
    const params = location.pathname.split('/');

    if (params.length === 3) {
      const subComponent = params[2];
      switch (subComponent) {
        case FARMER_SECTIONS.DASHBOARD:
          setOpenPane(<LoginPage/>);
          break;
        case FARMER_SECTIONS.ORDERS:
          setOpenPane(<LoginPage/>);
          break;

        
        default:
          break;
      }
    }
  }, [location]);

 

  return (
    <SidePanel list={<FarmerListItems/>} item2="Categories" item3="Dashboard"/>
  );
}
